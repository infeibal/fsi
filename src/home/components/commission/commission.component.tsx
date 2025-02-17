import { useState } from "react";
import { Button } from "../../../common/components/button.component";
import { CommissionList } from "./commission_list.component";
import { getRandom } from "../../../common/utils/random.util";
import { motion } from "framer-motion";
import {
  globalTextAppearanceConfig,
  globalTransitionConfig,
} from "../../../common/config/animation.config";

export const HomeCommission = () => {
  const [commissions, setCommissions] = useState<Array<number>>(
    Array(5).fill(0)
  );

  function findCommissions(commissions: Array<number>): void {
    setCommissions(
      commissions.map((item) => {
        const newCommision: number = getRandom(10, 50);

        if (item + newCommision >= 250) {
          return 250;
        }

        return item + newCommision;
      })
    );
  }

  return (
    <section className="flex justify-center gap-24 my-40">
      <motion.div
        {...globalTextAppearanceConfig}
        transition={{ ...globalTransitionConfig, delay: 0 }}
        className="w-min flex flex-col gap-4 mt-10"
      >
        <h1 className="text-4xl text-[2.5rem] text-nowrap">
          Уникальная Комиссия
        </h1>
        <p className="text-base text-pretty text-gray-700">
          Мы рады представить вам уникальное предложение по комиссиям,
          специально подобранное для вашего счёта. В этой вкладке вы обнаружите
          индивидуальные комиссии, созданные с учетом особенностей вашего
          аккаунта.
        </p>

        <Button rounded onClick={() => findCommissions(commissions)}>
          Узнать комиссию
        </Button>
      </motion.div>

      <CommissionList commissions={commissions} />
    </section>
  );
};
