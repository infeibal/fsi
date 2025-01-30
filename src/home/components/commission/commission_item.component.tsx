import { useSpring, animated } from "react-spring";

type CommissionItemType = {
  text: string;
  percent: number;
};

export const CommissionItem = ({ text, percent }: CommissionItemType) => {
  const { number } = useSpring({
    number: percent,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  return (
    <div className="flex gap-16 justify-between items-center w-min">
      <h1 className="w-64">{text}</h1>
      <animated.span className="text-lime-400 w-[50px]">
        {percent === 0 ? "???" : number.to((n) => `${Math.floor(n)}%`)}
      </animated.span>
    </div>
  );
};
