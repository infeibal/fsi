import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";

export const HomeAd = () => {
  return (
    <section>
      <img src="/src/common/images/wave.svg" alt="" />

      <div className="flex gap-4 px-4 bg-system-purple items-center h-[500px] overflow-hidden relative">
        <div className="w-[447px] flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/ba338e_cd7c7e0b6157492f929cb131acef836c~mv2.png/v1/crop/x_656,y_163,w_596,h_917/fill/w_447,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba338e_cd7c7e0b6157492f929cb131acef836c~mv2.png"
            alt="phone_img"
            className="absolute top-1 max-w-none select-none pointer-events-none"
          />
        </div>

        <motion.div
          {...globalAppearanceConfig}
          transition={globalTransitionConfig}
          className="flex text-white flex-col gap-10 pr-10 items-start"
        >
          <span className="text-5xl font-bold pr-36">
            Доверяйте нам, и мы всё уладим...
            <br /> как-нибудь!
          </span>
          <span className="text-lg font-semibold">
            ФПИ Банк* — место, где каждый счет превращается в квест, а операции
            удивляют на каждом шагу. Исчезающие финансы, непредсказуемые
            списания и секретные комиссии — всё это часть нашего неповторимого
            сервиса. Пользуйтесь нашим банком, если любите сюрпризы и готовы к
            неожиданным поворотам. В ФПИ Банке ваши счета будут чувствовать себя
            так же нестабильно, как и наш подход к банковскому делу.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
