import { FeedBackList } from "./feedback_list.components";

export const HomeFeedback = () => {
  return (
    <section id="feedback" className="pt-20">
      <h1 className="text-4xl px-10 mb-16 font-semibold">
        Что говорят наши клиенты:
      </h1>

      <FeedBackList />
    </section>
  );
};
