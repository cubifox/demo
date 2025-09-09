"use client";
import { useState } from "react";

type Priority = "高" | "中" | "低";
type Category = "仕事" | "プライベート" | "その他";

type Todo = {
  id: number;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  deadline: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("仕事");
  const [priority, setPriority] = useState<Priority>("中");
  const [deadline, setDeadline] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        category,
        priority,
        deadline,
        completed: false,
      },
    ]);
    setTitle("");
    setDescription("");
    setCategory("仕事");
    setPriority("中");
    setDeadline("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-8">
      <h1 className="text-4xl font-extrabold mb-6 text-pink-400 drop-shadow-lg tracking-wide">
        🌈 TODO APP 🦄
      </h1>
      <form
        className="flex flex-col gap-3 mb-8 w-full max-w-md bg-white/80 p-6 rounded-3xl shadow-xl border-2 border-pink-200"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-purple-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-pink-50 placeholder-purple-300 text-purple-700 text-lg shadow"
          placeholder="タイトル（例：おかしパーティーの準備）"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-blue-200 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-blue-50 placeholder-pink-300 text-pink-700 shadow"
          placeholder="説明（例：かわいいおかしを買う）"
        />
        <div className="flex gap-3 flex-wrap">
          <label className="flex items-center gap-2 text-purple-500">
            カテゴリ:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
              className="border-2 border-pink-200 rounded-full px-2 py-1 bg-pink-50 text-purple-700 shadow"
            >
              <option value="仕事">仕事</option>
              <option value="プライベート">プライベート</option>
              <option value="その他">その他</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-pink-500">
            優先度:
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="border-2 border-purple-200 rounded-full px-2 py-1 bg-purple-50 text-pink-700 shadow"
            >
              <option value="高">高</option>
              <option value="中">中</option>
              <option value="低">低</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-blue-500">
            期限:
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="border-2 border-blue-200 rounded-full px-2 py-1 bg-blue-50 text-blue-700 shadow"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          🦄 追加する！
        </button>
      </form>
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col gap-2 bg-white/80 rounded-3xl shadow-lg p-4 mb-4 border-2 border-purple-100"
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-bold text-lg cursor-pointer transition-all duration-200 ${
                  todo.completed
                    ? "line-through text-purple-300"
                    : "text-pink-500"
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.title}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 text-white bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 rounded-full shadow hover:scale-110 transition-transform"
              >
                ✨ 削除 ✨
              </button>
            </div>
            <div className="text-sm text-blue-400">{todo.description}</div>
            <div className="flex gap-4 text-xs">
              <span className="bg-pink-100 px-2 py-1 rounded-full">
                カテゴリ: {todo.category}
              </span>
              <span className="bg-purple-100 px-2 py-1 rounded-full">
                優先度: {todo.priority}
              </span>
              <span className="bg-blue-100 px-2 py-1 rounded-full">
                期限: {todo.deadline || "未設定"}
              </span>
              <span className="bg-yellow-100 px-2 py-1 rounded-full">
                完了: {todo.completed ? "DONE" : "未"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
