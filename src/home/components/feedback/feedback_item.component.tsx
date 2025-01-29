import { ReactNode } from "react";

type FeedbackCardType = {
  text: string;
  author: string;
  decoration: ReactNode;
};

export const FeedbackItem = ({
  text,
  author,
  decoration,
}: FeedbackCardType) => {
  const formattedAuthor = author.split(" ");

  return (
    <div className="relative w-[281px] h-[400px]">
      <img
        className="w-full h-full"
        src="/src/common/images/feedback/feedback_card.svg"
        alt="feedback_card"
      />

      <p className="absolute top-8 flex items-center justify-center text-black p-9 text-start overflow-hidden">
        “{text}”
      </p>

      <h3 className="font-bold absolute bottom-10 left-32">
        {formattedAuthor[0]} <br /> {formattedAuthor[1]}
      </h3>

      {decoration}
    </div>
  );
};
