"use client"

import todoService from "@/services/todoService";
import Image from "next/image";
import {useState, useEffect} from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    loadTodos();
  }, [])

  const loadTodos = async() => {
    try {
      const data = await todoService.getAllTodos();
      setTodos(data)
    } catch (error) {
      
    }
  }

  return (
    <div>{todos.map(todo => <p key={todo.id}>{todo.title}</p>)}</div>
  );
}
