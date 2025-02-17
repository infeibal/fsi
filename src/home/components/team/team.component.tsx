import {
  globalImgAppearanceConfig,
  globalTransitionConfig,
} from "../../../common/config/animation.config";
import { TeamList } from "./team_list.component";
import { motion } from "framer-motion";

export const HomeTeam = () => {
  return (
    <section>
      <motion.div
        {...globalImgAppearanceConfig("y", 80, 0, 0)}
        transition={{ ...globalTransitionConfig, delay: 0 }}
        className="flex flex-col gap-4 px-24"
      >
        <h1 className="text-6xl">Наша команда</h1>
        <h3 className="text-base text-gray-700 w-3/4 text-pretty">
          Это группа увлечённых профессионалов, которые делают мир финансов
          немного более непредсказуемым и захватывающим! Мы превращаем каждую
          транзакцию в маленький финансовый спектакль и не боимся нарушать
          шаблоны. Познакомьтесь с нашими мастерами «ФПИ»:
        </h3>
      </motion.div>

      <TeamList />
    </section>
  );
};
