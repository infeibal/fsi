import { ResizableImg } from "../common/components/resizeable-img.component";
import { HomeAd } from "./components/ad.components";
import { HomeNew } from "./components/new.component";

export const HomeModule = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto h-full flex flex-col">
      <HomeNew />

      <HomeAd />

      <section className="flex flex-col  my-6">
        <div className="w-min flex flex-col gap-6 px-[2rem]">
          <span className="text-6xl font-bold whitespace-nowrap">
            Наши продукты
          </span>
          <span className="text-base text-gray-500">
            Забудьте про традиционные предложения — здесь каждый продукт несет в
            себе долю непредсказуемости и веселья.
          </span>
        </div>

        <div>
          <div className="relative flex justify-end py-20 overflow-hidden">
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
                неожиданные комиссии и сбои. Подарите себе финансовое
                приключение, полное случайностей и скрытых уловок!
              </h2>
            </div>

            <div className="absolute z-[8] top-7 right-[-40px] w-[600px]">
              <ResizableImg
                initialSize={90}
                maxSize={600}
                src="/src/common/images/circle.png"
                alt="circle"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
