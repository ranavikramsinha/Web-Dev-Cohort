import express from "express";
import axios from "axios";
import Redis from "ioredis";
import http from "http";
import { Server } from "socket.io";

const app = express(); //* Express Server

const state = new Array(1000).fill(false);

const httpServer = http.createServer(app); //* Http Server (Express Server mount on http)
const io = new Server(); //* Socket Server

io.attach(httpServer);

io.on("connection", (socket) => {
  console.log(`Socket Connect ${socket.id}`);
  socket.on("message", (msg) => {
    io.emit('server-message', msg); //* Broadcast to all the connected clients 
  });

  socket.on("checkbox-update", (data) => {
    state[data.index] = data.value;
    io.emit("checkbox-update", data);
  })
});

const PORT = process.env.PORT ?? 8800;

// interface CacheStore {
//   totalPageCount: number;
// }

// const cacheStore: CacheStore = {
//   totalPageCount: 0,
// };

const redis = new Redis({ host: "localhost", port: Number(6379) });

// redis.lpush('video-queue', 'video-url-1')
// redis.lpush('video-queue', 'video-url-2')
// redis.lpush('video-queue', 'video-url-3')

app.use(express.static("./public"));

app.use(async function (req, res, next) {
  const key = `rate-limit`; // global rate limiting
  // const key = `rate-limit:${_id}`; // rate limiting per user
  const value = await redis.get(key);

  if (value === null) {
    await redis.set(key, 0);
    await redis.expire(key, 60);
  }

  if (Number(value) > 100) {
    return res.status(429).json({ message: "Too many request" });
  }

  redis.incr(key);
  next();
});

app.get('/state', (req, res) => {
  return res.json({ state });
})

app.get("/", (req, res) => {
  return res.json({ status: "success" });
});

app.get("/books", async (req, res) => {
  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );

  // console.log(response.data);

  return res.json(response.data);
});

app.get("/books/total", async (req, res) => {
  const cachedValue = await redis.get("totalPageValue");

  //* check cache
  if (cachedValue) {
    console.log(`Cached Hit`);
    // return res.json({ totalPageCount: Number(cacheStore.totalPageCount) });

    return res.json({ totalPageCount: Number(cachedValue) });
  }

  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );

  const totalPageCount = response?.data?.data?.data?.reduce(
    (acc: number, curr: { volumeInfo?: { pageCount?: number } }) =>
      !curr.volumeInfo?.pageCount ? 0 : curr.volumeInfo.pageCount + acc,
    0
  );

  //* Set the cache
  // cacheStore.totalPageCount = Number(totalPageCount);

  await redis.set("totalPageValue", totalPageCount);

  console.log(`Cache Missed`);

  // console.log(totalPageCount);

  return res.json({ totalPageCount });
});

// app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));

httpServer.listen(PORT, () =>
  console.log(`HTTP Server is running on PORT: ${PORT}`)
);

//* NOTE (for checking redis) :-
//* export PORT=8000 && pnpm dev
//* export PORT=8001 && pnpm dev
//* export PORT=8002 && pnpm dev
