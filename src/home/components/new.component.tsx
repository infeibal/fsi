import { Link } from "react-router-dom";
import { Button } from "../../common/components/button.component";
import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";
import { GradientText } from "../../common/components/gradient-text.component";
import TiltedCard from "../../common/components/dancing-element.component";

export const HomeNew = () => {
  return (
    <motion.section
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="flex justify-between items-center px-[5rem]"
    >
      <div className="flex flex-col mx-auto gap-6 w-[40%]">
        <div className="flex flex-col gap-0">
          <h1 className="text-4xl font-semibold">Новая карта</h1>
          <GradientText
            colors={["#7e47be", "#9b5db6", "#5e2d8c", "#9b5db6", "#7e47be"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl font-bold"
          >
            Трепещительная
          </GradientText>
        </div>

        <h3 className="text-xl text-gray-700">
          Для тех, кто готов рисковать на каждом шагу. Ваши финансы никогда не
          будут в безопасности!
        </h3>

        <div className="flex justify-between">
          <motion.div
            {...globalAppearanceConfig}
            transition={{
              ...globalTransitionConfig,
              delay: 0.8,
            }}
            className="flex flex-col gap-3 w-1/2 leading-4"
          >
            <div className="flex gap-2 items-center">
              <img
                className="w-[32px]"
                src="/src/common/images/chain.svg"
                alt="chain_img"
              />
              <p>Запутано и Нервозно</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[32px]"
                src="/src/common/images/lock.svg"
                alt="lock_img"
              />
              <p>
                Каждый платеж <br />— интрига!
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[32px]"
                src="/src/common/images/surprise.svg"
                alt="surprise_img"
              />
              <p>Неожиданные комиссии</p>
            </div>
          </motion.div>

          <div className="w-1/2 flex justify-end items-start">
            <Link
              to="/roadmap"
              className="px-6 py-2 bg-system-red text-white hover:bg-system-purple duration-150"
            >
              РОАД МАПА
            </Link>
          </div>
        </div>

        <div>
          <Button rounded>
            <Link to={"/making"}>Рискнуть</Link>
          </Button>
        </div>
      </div>

      <div className="w-[60%] select-none">
        <TiltedCard
          showTooltip={false}
          rotateAmplitude={7}
          scaleOnHover={1.05}
          imageSrc="/src/common/images/new_card.png"
        />
      </div>
    </motion.section>
  );
};
