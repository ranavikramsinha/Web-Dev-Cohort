import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    let token = req.cookies.token || "";

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Authenticaton Failed",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Server Error!",
    });
  }
};
