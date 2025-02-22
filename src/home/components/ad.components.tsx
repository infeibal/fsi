import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";
import WaveImg from "../../common/images/wave.svg";
import AddPhoneImg2 from "../../common/images/add_phone_image2.png";

export const HomeAd = () => {
  return (
    <section>
      <img src={WaveImg} alt="" className="select-none pointer-events-none" />

      <div className="flex gap-4 px-4 bg-system-purple items-center h-[500px] overflow-hidden relative">
        <div className="w-[447px] flex-shrink-0">
          <img
            src={AddPhoneImg2}
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
            ФСИ Банк* — место, где каждый счет превращается в квест, а операции
            удивляют на каждом шагу. Исчезающие финансы, непредсказуемые
            списания и секретные комиссии — всё это часть нашего неповторимого
            сервиса. Пользуйтесь нашим банком, если любите сюрпризы и готовы к
            неожиданным поворотам. В ФСИ Банке ваши счета будут чувствовать себя
            так же нестабильно, как и наш подход к банковскому делу.
          </span>
        </motion.div>
      </div>
    </section>
  );
};
