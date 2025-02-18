import { Link } from "react-router-dom";
import { Button } from "../../common/components/button.component";
import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";

export const HomeNew = () => {
  return (
    <motion.section
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="flex justify-between items-center px-[5rem]"
    >
      <div className="flex flex-col mx-auto gap-10 w-[40%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Новая карта</h1>
          <span className="text-5xl font-bold text-system-purple">
            Трепещительная
          </span>
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
        <img
          className="w-full pointer-events-none select-none"
          src="https://static.wixstatic.com/media/ba338e_5f2dce69cef64467b7fe2646dde321ef~mv2.png/v1/crop/x_3,y_0,w_3088,h_3094/fill/w_479,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/картаааа.png"
          alt=""
        />
      </div>
    </motion.section>
  );
};
