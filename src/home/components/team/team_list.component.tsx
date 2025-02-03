import { TeamItem } from "./team_item.component";

export const TeamList = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center gap-x-40">
      <TeamItem
        name="Тимур Ловкачев"
        post="Главный Архитектор Финансовых Пакостей"
        first_img_src="/src/common/images/team/first.png"
        second_img_src="/src/common/images/team/first_evil.png"
      />

      <TeamItem
        name="Анатолий Обманов"
        post="Главный Инженер По Финансовым Ловушкам"
        first_img_src="/src/common/images/team/second.png"
        second_img_src="/src/common/images/team/second_evil.png"
      />

      <TeamItem
        name="Арсений Капканов"
        post="Специалист По Неожиданным Платежам"
        first_img_src="/src/common/images/team/third.png"
        second_img_src="/src/common/images/team/third_evil.png"
      />

      <TeamItem
        name="Павел Подвохов"
        post="Специалист По Уловкам и Скрытым Опциям"
        first_img_src="/src/common/images/team/4th.png"
        second_img_src="/src/common/images/team/4th_evil.png"
      />

      <TeamItem
        name="Лариса Загвоздкина"
        post="Креативный Обдуролог"
        first_img_src="/src/common/images/team/5th.png"
        second_img_src="/src/common/images/team/5th_evil.png"
      />

      <TeamItem
        name="Любовь Подвохова"
        post="Креативный Уловкоплёт"
        first_img_src="/src/common/images/team/6th.png"
        second_img_src="/src/common/images/team/6th_evil.png"
      />

      <TeamItem
        name="Аглая Вредникова"
        post="Ведущий Консультант по Обдираловке"
        first_img_src="/src/common/images/team/7th.png"
        second_img_src="/src/common/images/team/7th_evil.png"
      />

      <TeamItem
        name="Мистер Загадкин <br/> Пакостинатор"
        post="Главный Крутиверт Сверхмудрых Пакостей"
        first_img_src="/src/common/images/team/8th.png"
        second_img_src="/src/common/images/team/8th_evil.png"
      />
    </div>
  );
};
