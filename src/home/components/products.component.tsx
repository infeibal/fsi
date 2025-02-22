import { Link } from "react-router-dom";
import { Button } from "../../common/components/button.component";
import { GrowingElement } from "../../common/components/growing-element.component";
import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";
import { Magnet } from "../../common/components/magnet.component";
import Card1 from "../../common/images/cards/products_card1.png";
import Card2 from "../../common/images/cards/products_card2.png";
import Card3 from "../../common/images/cards/products_card3.png";
import Card4 from "../../common/images/cards/products_card4.png";
import Circle from "../../common/images/circle.png";

export const HomeProducts = () => {
  return (
    <section id="products" className="flex flex-col mt-6">
      <div className="flex justify-between px-[2rem]">
        <motion.div
          {...globalAppearanceConfig}
          transition={globalTransitionConfig}
          className="w-min flex flex-col gap-6 "
        >
          <span className="text-6xl font-bold whitespace-nowrap">
            Наши продукты
          </span>
          <span className="text-base text-gray-700">
            Забудьте про традиционные предложения — здесь каждый продукт несет в
            себе долю непредсказуемости и веселья.
          </span>
        </motion.div>

        <Link to="/secret">
          <Button reverse rounded>
            Не нажимать!
          </Button>
        </Link>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="flex relative justify-end pt-20">
          <div className="absolute z-[9] left-28 top-1/2 -translate-y-1/2 w-[533px] h-[334px] rotate-[-6deg]">
            <Magnet padding={0} magnetStrength={30}>
              <img
                className="select-none pointer-events-none w-full h-full object-cover"
                src={Card1}
                alt="products_card"
              />
            </Magnet>
          </div>

          <motion.div
            {...globalAppearanceConfig}
            transition={globalTransitionConfig}
            className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8"
          >
            <h1 className="text-4xl font-bold">Пакости</h1>
            <h2 className="text-gray-700 text-base mt-6 pr-40">
              Идеальный инструмент для тех, кто хочет добавить немного
              беспорядка в свои финансы. Эта карта спроектирована для
              максимального сюрприза с каждой транзакцией, гарантируя вам
              неожиданные комиссии и сбои. Подарите себе финансовое приключение,
              полное случайностей и скрытых уловок!
            </h2>
          </motion.div>

          <div className="absolute z-[8] top-5 right-[-220px] w-[800px]">
            <GrowingElement
              minSize={550}
              maxSize={650}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img className="w-full" src={Circle} alt="circle" />
            </GrowingElement>
          </div>
        </div>

        <div className="relative flex flex-row-reverse justify-end pl-20">
          <div className="absolute z-[9] right-28 top-1/2 -translate-y-1/2 w-[523px] rotate-[12deg]">
            <Magnet padding={0} magnetStrength={30}>
              <img
                className="select-none pointer-events-none w-full h-full object-cover"
                src={Card2}
                alt="products_card2"
              />
            </Magnet>
          </div>

          <motion.div
            {...globalAppearanceConfig}
            transition={globalTransitionConfig}
            className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8"
          >
            <h1 className="text-4xl font-bold">Финансовая Ловушка</h1>
            <h2 className="text-gray-700 text-base mt-6 pr-40">
              Для тех, кто любит сложные схемы и неожиданные повороты. Каждый
              платеж с этой картой может привести к скрытым комиссиям и
              финансовым загадкам, которые будут держать вас в напряжении.
              Настоящая находка для любителей сюрпризов и ловушек!
            </h2>
          </motion.div>

          <div className="absolute z-[8] top-[-120px] left-[-150px] w-[700px]">
            <GrowingElement
              minSize={550}
              maxSize={700}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img className="w-full" src={Circle} alt="circle" />
            </GrowingElement>
          </div>
        </div>

        <div className="flex relative justify-end">
          <div className="absolute z-[9] left-20 top-1/2 -translate-y-1/2 w-[543px] rotate-[-4deg]">
            <Magnet padding={0} magnetStrength={30}>
              <img
                className="select-none pointer-events-none w-full h-full object-cover"
                src={Card3}
                alt="products_card3"
              />
            </Magnet>
          </div>

          <motion.div
            {...globalAppearanceConfig}
            transition={globalTransitionConfig}
            className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8"
          >
            <h1 className="text-4xl font-bold">
              СкрытаяКомиссияВ КаждомПлатеже-инатор
            </h1>
            <h2 className="text-gray-700 text-base mt-6 pr-40">
              Для настоящих фанатов финансовых фокусов! Каждый платеж
              превращается в грандиозное представление, где комиссии появляются,
              как по волшебству. Удивляйтесь сами и веселите окружающих, пока
              ваш баланс тает, а счета пестрят сюрпризами!
            </h2>
          </motion.div>

          <div className="absolute z-[8] top-[-36px] right-[-80px] w-[550px]">
            <GrowingElement
              minSize={450}
              maxSize={600}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img className="w-full" src={Circle} alt="circle" />
            </GrowingElement>
          </div>
        </div>

        <div className="relative flex flex-row-reverse justify-end pl-20 pb-20">
          <div className="absolute z-[9] right-28 top-1/2 -translate-y-1/2 w-[623px] rotate-[12deg]">
            <Magnet padding={0} magnetStrength={30}>
              <img
                className="select-none pointer-events-none w-full h-full object-cover "
                src={Card4}
                alt="products_card4"
              />
            </Magnet>
          </div>

          <motion.div
            {...globalAppearanceConfig}
            transition={globalTransitionConfig}
            className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8"
          >
            <h1 className="text-4xl font-bold">Злодейский Пластик</h1>
            <h2 className="text-gray-700 text-base mt-6 pr-40">
              Ваш верный союзник в создании финансового хаоса! Она превращает
              каждую покупку в шоу, полное скрытых сборов, странных условий и
              неожиданных сюрпризов. Готовьтесь к тому, что ваш баланс будет
              танцевать под управлением злодейского куража!
            </h2>
          </motion.div>

          <div className="absolute z-[8] top-[-100px] left-[-200px] w-[700px]">
            <GrowingElement
              minSize={550}
              maxSize={700}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img className="w-full" src={Circle} alt="circle" />
            </GrowingElement>
          </div>
        </div>
      </div>
    </section>
  );
};
