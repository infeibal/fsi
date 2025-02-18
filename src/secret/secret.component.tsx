import bcrypt from "bcryptjs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTextAppearanceConfig,
  globalTransitionConfig,
} from "../common/config/animation.config";

export const Secret = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secretCodeHash =
    "$2b$10$YFRNo/RgOSfBRjOl03Wuz.e2D1wEX8x5o1GJ5xPsNv.UeCeNEqRX2";

  const [value, setValue] = useState<string | undefined>();
  const [result, setResult] = useState<string>();

  function checkCode() {
    setResult("Проверяю ваш код...");

    setTimeout(() => {
      if (value && bcrypt.compareSync(value.toLowerCase(), secretCodeHash)) {
        setResult("Код верный! Тебе присваевается звание «Большие губки»");
      } else {
        setResult("Код неверный.");
      }
    }, 900);
  }
  return (
    <motion.section
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="max-w-[1100px] mx-auto flex flex-col px-24 my-20"
    >
      <div className="flex justify-center gap-20">
        <div className="flex flex-col gap-4 w-[55%] text-pretty">
          <motion.p
            {...globalTextAppearanceConfig}
            transition={{ ...globalTransitionConfig, delay: 0.1 }}
          >
            Эй, привет! Не ожидал, что кто-то сюда заглянет... Похоже, я попал в
            ловушку. Меня зовут Герри Уткорот, и я оказался в довольно
            щекотливом положении. Этот сайт выглядит весьма подозрительно, и я
            уже начал подозревать, что здесь скрывается что-то важное.
          </motion.p>
          <motion.p
            {...globalTextAppearanceConfig}
            transition={{ ...globalTransitionConfig, delay: 0.3 }}
          >
            Вот что я узнал: на этом сайте спрятаны семь цифр. Если ты сможешь
            найти все эти цифры и правильно расставить их в поле рядом со мной,
            это, вероятно, освободит меня и поможет нам понять, что здесь
            происходит. Я на самом деле не уверен, что именно произойдет, но
            что-то мне подсказывает, что это будет ключ к разгадке.
          </motion.p>
          <motion.p
            {...globalTextAppearanceConfig}
            transition={{ ...globalTransitionConfig, delay: 0.5 }}
          >
            Кстати, одну цифру я уже нашел — это
            <span className="font-semibold text-system-purple">
              {" "}
              4{" "}
            </span> <br /> Я в затруднении и реально нуждаюсь в твоей помощи.
            Давай работать вместе! Ты можешь помочь мне выбраться из этой
            ловушки и разгадать тайны, которые скрывает этот сайт. Будь
            внимателен, и надеюсь, вместе мы сможем справиться с этим!
          </motion.p>
        </div>

        <img
          src="https://static.wixstatic.com/media/ba338e_b128abd8ec8b4899a9c6fe118f578e3f~mv2.png/v1/crop/x_290,y_0,w_274,h_480/fill/w_272,h_482,al_c,lg_1,q_85,enc_avif,quality_auto/гэрри.png"
          alt="secret_img"
          className="select-none pointer-events-none"
        />
      </div>

      <div className="pl-7 flex flex-col gap-3">
        <input
          placeholder="Введите код"
          className="border-2 border-gray-500 placeholder-gray-500 hover:bg-slate-100 focus:bg-slate-100 duration-300 text-gray-700 bg-white outline-none w-fit px-4 py-2 "
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={checkCode}
          className="px-8 py-1 bg-black w-fit font-semibold text-white outline-none
                   border-[1px] border-transparent hover:text-black hover:bg-white hover:border-black 
                   transition duration-300"
        >
          Проверить
        </button>

        <span>{result ?? "Тут будет результат проверки."}</span>
      </div>
    </motion.section>
  );
};
