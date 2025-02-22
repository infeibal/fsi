import { ScrollVelocity } from "../../common/components/scroll-velocity.component";
import { motion } from "framer-motion";
import {
  globalAppearanceConfig,
  globalTextAppearanceConfig,
  globalTransitionConfig,
} from "../../common/config/animation.config";
import FeedbackImg from "../../common/images/feedback/feedback.png";
import FeedbackEvilImg from "../../common/images/feedback/feedback_evil.png";

export const HomeLastFeedback = () => {
  return (
    <section className="mt-40 max-w-fit flex flex-col items-center px-32">
      <div className=" mb-12 w-screen min-w-screen">
        <ScrollVelocity
          texts={[
            "Ваши средства — наш комфорт!",
            "ФСИ Банк — когда надежность не важна!",
          ]}
          className="text-2xl font-semibold"
          scrollerClassName="w-full"
          velocity={80}
          numCopies={23}
          velocityMapping={{ input: [0, 1000], output: [0, 2] }}
        />
      </div>

      <div className="w-full flex flex-col gap-4">
        <motion.h1
          {...globalTextAppearanceConfig}
          transition={globalTransitionConfig}
          className="text-6xl"
        >
          Отзывы{" "}
        </motion.h1>
        <motion.h3
          {...globalTextAppearanceConfig}
          transition={{ ...globalTransitionConfig, delay: 0.4 }}
          className="text-base text-gray-700 text-pretty"
        >
          Здесь могли бы быть восторженные отзывы от довольных клиентов, но, как
          вы понимаете, в ФCИ банке это редкость. Зато те, кто всё-таки оставил
          своё мнение, уже не могут пожаловаться — мы надёжно «забыли» их слова.
          Если вам есть что сказать, пишите, и мы постараемся сделать вид, что
          прочитали!
        </motion.h3>
      </div>

      <motion.div
        {...globalAppearanceConfig}
        transition={globalTransitionConfig}
        className="overflow-hidden h-[360px] relative group"
      >
        <img
          className="block max-w-full h-auto shrink-0"
          src={FeedbackImg}
          alt="feedback"
        />

        <img
          className="group-hover:opacity-100 opacity-0 duration-500 top-0 absolute z-[9] block max-w-full h-auto shrink-0"
          src={FeedbackEvilImg}
          alt="feedback_evil"
        />
      </motion.div>
    </section>
  );
};
