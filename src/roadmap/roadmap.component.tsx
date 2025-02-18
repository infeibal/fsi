import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTransitionConfig,
} from "../common/config/animation.config";

export const Roadmap = () => {
  return (
    <motion.div
      {...globalAppearanceConfig}
      transition={globalTransitionConfig}
      className="mx-auto w-fit"
    >
      <img
        src="https://static.wixstatic.com/media/ba338e_61ab7789b2744a078b87af968a59c48b~mv2.jpg/v1/fill/w_924,h_521,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_2024-12-12_21-42-20.jpg"
        alt="roadmap_img"
      />
    </motion.div>
  );
};
