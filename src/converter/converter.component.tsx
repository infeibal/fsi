import { useState } from "react";
import { Button } from "../common/components/button.component";

export const ConverterComponent = () => {
  const [value, setValue] = useState<number | undefined>();
  const [result, setResult] = useState<string | undefined>();

  function handleClick() {
    if (!value) {
      setResult(`${0} секунд = ${0} рублей`);
    } else if (value > 99999999998) {
      setResult("∞ рублей");
    } else {
      setResult(`${value} секунд = ${value * 30} рублей`);
    }
  }

  return (
    <div className="flex justify-center items-center gap-10 my-16">
      <div className="flex flex-col gap-4">
        <input
          className="outline-none px-4 py-2 placeholder-gray-500 hover:bg-lime-500 focus:bg-lime-500 duration-300 border-black border-2 bg-system-green"
          type="number"
          placeholder="Введите кол-во секунд"
          onChange={(e) => setValue(+e.target.value)}
        />

        <Button onClick={handleClick}>Конвертировать</Button>
      </div>

      <span
        id="result"
        className="text-4xl self-baseline text-wrap w-[40%] text-center"
      >
        {result || "*здесь будет результат конвертации*"}
      </span>
    </div>
  );
};
