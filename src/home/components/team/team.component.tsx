import { TeamList } from "./team_list.component";

export const HomeTeam = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 px-24">
        <h1 className="text-6xl">Наша команда</h1>
        <h3 className="text-base text-gray-500 w-3/4 text-pretty">
          Это группа увлечённых профессионалов, которые делают мир финансов
          немного более непредсказуемым и захватывающим! Мы превращаем каждую
          транзакцию в маленький финансовый спектакль и не боимся нарушать
          шаблоны. Познакомьтесь с нашими мастерами «ФПИ»:
        </h3>
      </div>

      <TeamList />
    </section>
  );
};
