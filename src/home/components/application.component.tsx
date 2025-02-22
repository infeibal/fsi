import { motion } from "framer-motion";
import {
  globalImgAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";
import TiltedCard from "../../common/components/dancing-element.component";
import ApplicationImgTwo from "../../common/images/application_two.svg";
import ApplicationImgOne from "../../common/images/application_one.svg";
import ApplicationPhoneImg from "../../common/images/application-phone.png";
import WayImg from "../../common/images/way.svg";
import FieldImg from "../../common/images/field.svg";
import PenImg from "../../common/images/pen.svg";

export const HomeApplication = () => {
  return (
    <section className="flex  justify-center my-20 px-16">
      <div className="flex relative items-center justify-center w-1/2">
        <motion.img
          {...globalImgAppearanceConfig("x", -150, 0)}
          transition={{ ...globalTransitionConfig, duration: 1.5 }}
          className="select-none z-[0] pointer-events-none opacity-80 absolute w-[230px] top-[-32px] left-10"
          src={ApplicationImgTwo}
          alt="app_back"
        />

        <motion.img
          {...globalImgAppearanceConfig("x", 150, 0)}
          transition={{ ...globalTransitionConfig, duration: 1.5 }}
          className="select-none z-[0] pointer-events-none opacity-80 absolute w-[180px] h-[127px] bottom-16 right-10"
          src={ApplicationImgOne}
          alt="app_back"
        />

        <div>
          <TiltedCard
            showTooltip={false}
            rotateAmplitude={4}
            scaleOnHover={1.01}
            altText="application_image"
            imageSrc={ApplicationPhoneImg}
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-6 pb-28">
        <h1 className="text-4xl flex flex-col gap-2">
          Попробуйте в приложении
          <span className="text-system-purple font-semibold">ФCИ. Кошель</span>
        </h1>

        <p className="text-gray-700 text-base pr-20">
          Погрузитесь в мир финансового хаоса с нашим приложением! Тут вы
          найдете непредсказуемые очереди при входе, загадочные исчезновения
          баланса и квесты по поиску нужных функций. Управление финансами стало
          еще менее удобным — и вы не захотите пропустить ни одного сюрприза!
        </p>

        <div className="flex justify-between">
          <div className="flex gap-3 ">
            <img className="w-[32px]" src={WayImg} alt="way" />

            <span className="text-sm leading-4 w-min block">
              Запутанный интерфейс
            </span>
          </div>
          <div className="flex gap-3 ">
            <img className="w-[32px]" src={FieldImg} alt="field" />

            <span className="text-sm leading-4 w-min block">
              Автоматические Сборы
            </span>
          </div>
          <div className="flex gap-3 ">
            <img className="w-[32px]" src={PenImg} alt="pen" />

            <span className="text-sm leading-4 w-min block">
              Абсурдный Дизайн
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
