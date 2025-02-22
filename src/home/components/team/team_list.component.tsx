import { TeamItem } from "./team_item.component";
import Team1 from "../../../common/images/team/first.png";
import Team2 from "../../../common/images/team/second.png";
import Team3 from "../../../common/images/team/third.png";
import Team4 from "../../../common/images/team/4th.png";
import Team5 from "../../../common/images/team/5th.png";
import Team6 from "../../../common/images/team/6th.png";
import Team7 from "../../../common/images/team/7th.png";
import Team8 from "../../../common/images/team/8th.png";
import TeamEvil1 from "../../../common/images/team/first_evil.png";
import TeamEvil2 from "../../../common/images/team/second_evil.png";
import TeamEvil3 from "../../../common/images/team/third_evil.png";
import TeamEvil4 from "../../../common/images/team/4th_evil.png";
import TeamEvil5 from "../../../common/images/team/5th_evil.png";
import TeamEvil6 from "../../../common/images/team/6th_evil.png";
import TeamEvil7 from "../../../common/images/team/7th_evil.png";
import TeamEvil8 from "../../../common/images/team/8th_evil.png";

export const TeamList = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center gap-x-40">
      <TeamItem
        name="Тимур Ловкачев"
        post="Главный Архитектор Финансовых Пакостей"
        first_img_src={Team1}
        second_img_src={TeamEvil1}
      />

      <TeamItem
        name="Анатолий Обманов"
        post="Главный Инженер По Финансовым Ловушкам"
        first_img_src={Team2}
        second_img_src={TeamEvil2}
      />

      <TeamItem
        name="Арсений Капканов"
        post="Специалист По Неожиданным Платежам"
        first_img_src={Team3}
        second_img_src={TeamEvil3}
      />

      <TeamItem
        name="Павел Подвохов"
        post="Специалист По Уловкам и Скрытым Опциям"
        first_img_src={Team4}
        second_img_src={TeamEvil4}
      />

      <TeamItem
        name="Лариса Загвоздкина"
        post="Креативный Обдуролог"
        first_img_src={Team5}
        second_img_src={TeamEvil5}
      />

      <TeamItem
        name="Любовь Подвохова"
        post="Креативный Уловкоплёт"
        first_img_src={Team6}
        second_img_src={TeamEvil6}
      />

      <TeamItem
        name="Аглая Вредникова"
        post="Ведущий Консультант по Обдираловке"
        first_img_src={Team7}
        second_img_src={TeamEvil7}
      />

      <TeamItem
        name="Мистер Загадкин <br/> Пакостинатор"
        post="Главный Крутиверт Сверхмудрых Пакостей"
        first_img_src={Team8}
        second_img_src={TeamEvil8}
      />
    </div>
  );
};
