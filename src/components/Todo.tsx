import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  return (
    <div className="flex justify-center items-center">
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>TODO APP</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="内容を追加"
          onChange={e => setTodo(e.target.value)}
          value={todo}
          className="mb-4"
        />
        {todo}
        <Button
          className="w-full mt-4"
          onClick={() => {
            setTodos([...todos, todo]);
            setTodo("");
          }}
        >
          追加
        </Button>
        <ul className="mt-4">
          {todos.map((todo, index) => {
            return (
              <div className="flex">
                <li key={todo}>・{todo}</li>
                <button
                  className="ml-2"
                  onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index));
                  }}
                >
                  <MdDelete color="red" />
                </button>
              </div>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  </div>

  );
}

export default Todo;
