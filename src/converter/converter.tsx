import {
  globalAppearanceConfig,
  globalTextAppearanceConfig,
  globalTransitionConfig,
} from "../common/config/animation.config";
import { ConverterComponent } from "./converter.component";
import { motion } from "framer-motion";

export const Converter = () => {
  return (
    <motion.article
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="mx-auto max-w-[1050px] px-12 py-10 bg-system-green"
    >
      <div className="w-min flex flex-col gap-4">
        <motion.h1
          {...globalTextAppearanceConfig}
          transition={{ ...globalTransitionConfig, delay: 0 }}
          className="text-6xl font-bold text-nowrap"
        >
          Конвертер валют
        </motion.h1>
        <motion.p
          {...globalTextAppearanceConfig}
          transition={{ ...globalTransitionConfig, delay: 0.2 }}
        >
          Представляем вашему вниманию нашу новую разработку: "Конвертер Валют".
          Введите количество секунд, которое хотите посчитать и увидите сколько
          это в рублях
        </motion.p>
      </div>

      <ConverterComponent />
    </motion.article>
  );
};
