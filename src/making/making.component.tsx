import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../common/config/animation.config";
import { MakingItem } from "./making-item.components";
import { motion } from "framer-motion";

export const Making = () => {
  return (
    <motion.article
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="mx-auto max-w-[1100px] px-16 flex flex-col gap-4 my-20"
    >
      <h1 className="font-bold text-4xl">Трепещительная</h1>
      <div className="flex flex-row gap-4 mb-2">
        <img
          src="https://static.wixstatic.com/media/ba338e_2bf19fd010cf4a55ac56921389dfda2d~mv2.png/v1/fill/w_425,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/карта1.png"
          alt="card_one"
        />

        <div className="flex flex-col gap-4 justify-center">
          <MakingItem
            delay={0}
            title="1. Оформление"
            content="Стоимость оформления: 999,99 — платите за удовольствие, чтобы добавить немного хаоса в вашу жизнь. Ваша карта будет доставлена в шутливом пакете с конфетти и вопросом: «Вы уверены?»"
          />
          <MakingItem
            delay={0.2}
            title="2. Годовые затраты"
            content="Процентная ставка: 999.99% годовых. С такой ставкой ваши долги могут вырасти в трёхмерное произведение искусства."
          />
        </div>
      </div>

      <MakingItem
        delay={0.4}
        title="3. Досрочное погашение"
        content="Условия: Досрочное погашение сопровождается кулинарным штрафом в размере 1000 блинчиков с начинкой, которую вы сами выберете. Но будьте готовы: ваша кухня станет настоящим полем битвы."
      />

      <MakingItem
        delay={0.6}
        title="4. Курс обмена валют"
        content="Обменный курс: 15% выше рыночного, плюс маленькая подкидывающая монетка, которая решает, насколько выгодной будет сделка. Вы никогда не узнаете, какой курс вам выпадет, пока не попробуете!"
      />

      <button
        className="px-12 py-2 bg-system-purple rounded-md w-fit font-semibold text-white outline-none
                   border-[1px] border-transparent hover:text-black hover:bg-white hover:border-black 
                   transition duration-300"
      >
        Беру!
      </button>
    </motion.article>
  );
};
