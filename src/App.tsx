import Header from "./components/Header";
import Todo from "./components/Todo";
import Description from "./components/Description";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <>
      <div className="justify-center items-center">
        <Header />
        <Description />
        <Todo />
        <LoginForm />
      </div>
    </>
  );
}
