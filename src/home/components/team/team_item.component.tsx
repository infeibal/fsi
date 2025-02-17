import { motion } from "framer-motion";
import {
  globalImgAppearanceConfig,
  globalTransitionConfig,
} from "../../../common/config/animation.config";

type TeamItemType = {
  name: string;
  post: string;
  first_img_src: string;
  second_img_src: string;
};

export const TeamItem = ({
  name,
  post,
  first_img_src,
  second_img_src,
}: TeamItemType) => {
  return (
    <motion.div
      {...globalImgAppearanceConfig("y", 80, 0, 0)}
      transition={{ ...globalTransitionConfig, delay: 0 }}
      className="flex flex-col gap-2 items-center"
    >
      <div className="relative w-[214px] h-[372px] group">
        <img
          className="select-none pointer-events-none absolute w-[214px] h-full opacity-100 group-hover:opacity-0"
          src={first_img_src}
          alt={
            "team " +
            first_img_src
              .split("/")
              [first_img_src.split("/").length - 1].split(".")[0]
          }
        />
        <img
          className="select-none pointer-events-none absolute w-[214px] h-full opacity-0 group-hover:opacity-100"
          src={second_img_src}
          alt={
            "team " +
            second_img_src
              .split("/")
              [first_img_src.split("/").length - 1].split(".")[0]
          }
        />
      </div>

      <div className="w-min text-center">
        <h1
          className="text-system-purple text-nowrap font-bold text-3xl"
          dangerouslySetInnerHTML={{
            __html: name.replace(/<br\s*\/?>/gi, "<br />"),
          }}
        />

        <h3 className="">Должность: {post}</h3>
      </div>
    </motion.div>
  );
};
