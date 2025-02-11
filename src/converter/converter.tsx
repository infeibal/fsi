import { ConverterComponent } from "./converter.component";

export const Converter = () => {
  return (
    <article className="mx-auto max-w-[1050px] px-12 py-10 bg-system-green">
      <div className="w-min flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-nowrap">Конвертер валют</h1>
        <p>
          Представляем вашему вниманию нашу новую разработку: "Конвертер Валют".
          Введите количество секунд, которое хотите посчитать и увидите сколько
          это в рублях
        </p>
      </div>

      <ConverterComponent />
    </article>
  );
};
