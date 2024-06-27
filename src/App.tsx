import Header from "./components/Header";
import Todo from "./components/Todo";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
      <div className="justify-center items-center">
        <Header />
        <Description />
        <Todo />
      </div>
    </>
  );
}
