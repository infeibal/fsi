import { motion } from "framer-motion";
import {
  globalTextAppearanceConfig,
  globalTransitionConfig,
} from "../common/config/animation.config";

type MakingItemType = {
  title: string;
  content: string;
  delay?: number;
};

export const MakingItem = ({ title, content, delay }: MakingItemType) => {
  return (
    <motion.div
      {...globalTextAppearanceConfig}
      transition={{ ...globalTransitionConfig, delay }}
      className="flex flex-col gap-4 text-lg"
    >
      <h1 className="font-semibold">{title}</h1>
      <p className="text-gray-700 text-pretty">{content}</p>
    </motion.div>
  );
};
