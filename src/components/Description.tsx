import { Button } from "./ui/button";

const Description = () => {
  return (
    <div className="p-10 md:p-24">
      <div>
        <h2 className="text-xl font-bold md:text-2xl">
          ようこそ、Vite + React + Tailwind CSS へ！
        </h2>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, mollitia? Culpa distinctio enim dolorum dolore iste
          cupiditate assumenda laudantium eum molestiae nesciunt provident,
          excepturi nisi doloribus debitis ut voluptas, hic, praesentium soluta
          aliquid ab quis mollitia! Fuga aut quas ad. Similique obcaecati dicta
          id aperiam consequuntur ipsam, distinctio nesciunt temporibus.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Vite</Button>
        <Button>React</Button>
        <Button>Tailwind CSS</Button>
      </div>
    </div>
  );
};

export default Description;
