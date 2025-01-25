import { Button } from "../../common/components/button.component";
import { GrowingElement } from "../../common/components/growing-element.components";

export const HomeProducts = () => {
  return (
    <section id="products" className="flex flex-col mt-6">
      <div className="flex justify-between px-[2rem]">
        <div className="w-min flex flex-col gap-6 ">
          <span className="text-6xl font-bold whitespace-nowrap">
            Наши продукты
          </span>
          <span className="text-base text-gray-500">
            Забудьте про традиционные предложения — здесь каждый продукт несет в
            себе долю непредсказуемости и веселья.
          </span>
        </div>

        <Button reverse>Не нажимать!</Button>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="flex relative justify-end pt-20">
          <div className="absolute z-[9] left-28 top-1/2 -translate-y-1/2 w-[533px] h-[334px]">
            <img
              className="select-none pointer-events-none w-full h-full object-cover rotate-[-6deg]"
              src="https://static.wixstatic.com/media/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png/v1/fill/w_533,h_334,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png"
              alt="card2"
            />
          </div>

          <div className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8">
            <h1 className="text-4xl font-bold">Пакости</h1>
            <h2 className="text-gray-500 text-base mt-6 pr-40">
              Идеальный инструмент для тех, кто хочет добавить немного
              беспорядка в свои финансы. Эта карта спроектирована для
              максимального сюрприза с каждой транзакцией, гарантируя вам
              неожиданные комиссии и сбои. Подарите себе финансовое приключение,
              полное случайностей и скрытых уловок!
            </h2>
          </div>

          <div className="absolute z-[8] top-5 right-[-220px] w-[800px]">
            <GrowingElement
              minSize={550}
              maxSize={650}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img
                className="w-full"
                src="/src/common/images/circle.png"
                alt="circle"
              />
            </GrowingElement>
          </div>
        </div>

        <div className="relative flex flex-row-reverse justify-end pl-20">
          <div className="absolute z-[9] right-28 top-1/2 -translate-y-1/2 w-[523px]">
            <img
              className="select-none pointer-events-none w-full h-full object-cover rotate-[12deg]"
              src="https://static.wixstatic.com/media/ba338e_a74ff505d7b14caca524ed2de5b464bf~mv2.png/v1/fill/w_521,h_327,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/card4.png"
              alt="card3"
            />
          </div>

          <div className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8">
            <h1 className="text-4xl font-bold">Финансовая Ловушка</h1>
            <h2 className="text-gray-500 text-base mt-6 pr-40">
              Для тех, кто любит сложные схемы и неожиданные повороты. Каждый
              платеж с этой картой может привести к скрытым комиссиям и
              финансовым загадкам, которые будут держать вас в напряжении.
              Настоящая находка для любителей сюрпризов и ловушек!
            </h2>
          </div>

          <div className="absolute z-[8] top-[-120px] left-[-150px] w-[700px]">
            <GrowingElement
              minSize={550}
              maxSize={700}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img
                className="w-full"
                src="/src/common/images/circle.png"
                alt="circle"
              />
            </GrowingElement>
          </div>
        </div>

        <div className="flex relative justify-end">
          <div className="absolute z-[9] left-20 top-1/2 -translate-y-1/2 w-[543px]">
            <img
              className="select-none pointer-events-none w-full h-full object-cover rotate-[-4deg]"
              src="https://static.wixstatic.com/media/ba338e_7069895e29d847b09b1ce04e5b487060~mv2.png/v1/fill/w_543,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/card5_2.png"
              alt="card4"
            />
          </div>

          <div className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8">
            <h1 className="text-4xl font-bold">
              СкрытаяКомиссияВ КаждомПлатеже-инатор
            </h1>
            <h2 className="text-gray-500 text-base mt-6 pr-40">
              Для настоящих фанатов финансовых фокусов! Каждый платеж
              превращается в грандиозное представление, где комиссии появляются,
              как по волшебству. Удивляйтесь сами и веселите окружающих, пока
              ваш баланс тает, а счета пестрят сюрпризами!
            </h2>
          </div>

          <div className="absolute z-[8] top-[-36px] right-[-80px] w-[550px]">
            <GrowingElement
              minSize={450}
              maxSize={600}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img
                className="w-full"
                src="/src/common/images/circle.png"
                alt="circle"
              />
            </GrowingElement>
          </div>
        </div>

        <div className="relative flex flex-row-reverse justify-end pl-20 pb-20">
          <div className="absolute z-[9] right-28 top-1/2 -translate-y-1/2 w-[623px]">
            <img
              className="select-none pointer-events-none w-full h-full object-cover rotate-[12deg]"
              src="https://static.wixstatic.com/media/ba338e_f9dcfb2708ee404ebe878591210fa99c~mv2.png/v1/fill/w_579,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/card3_2_%20(2).png"
              alt="card3"
            />
          </div>

          <div className="flex relative z-[9] flex-col w-1/3 min-h-[334px] py-8">
            <h1 className="text-4xl font-bold">Злодейский Пластик</h1>
            <h2 className="text-gray-500 text-base mt-6 pr-40">
              Ваш верный союзник в создании финансового хаоса! Она превращает
              каждую покупку в шоу, полное скрытых сборов, странных условий и
              неожиданных сюрпризов. Готовьтесь к тому, что ваш баланс будет
              танцевать под управлением злодейского куража!
            </h2>
          </div>

          <div className="absolute z-[8] top-[-100px] left-[-200px] w-[700px]">
            <GrowingElement
              minSize={550}
              maxSize={700}
              className="rounded-full flex items-center justify-center text-white font-bold"
            >
              <img
                className="w-full"
                src="/src/common/images/circle.png"
                alt="circle"
              />
            </GrowingElement>
          </div>
        </div>
      </div>
    </section>
  );
};
