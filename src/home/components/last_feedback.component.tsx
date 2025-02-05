export const HomeLastFeedback = () => {
  return (
    <section className="mt-40 max-w-fit flex flex-col items-center px-32">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-6xl">Отзывы </h1>
        <h3 className="text-base text-gray-700 text-pretty">
          Здесь могли бы быть восторженные отзывы от довольных клиентов, но, как
          вы понимаете, в ФПИ банке это редкость. Зато те, кто всё-таки оставил
          своё мнение, уже не могут пожаловаться — мы надёжно «забыли» их слова.
          Если вам есть что сказать, пишите, и мы постараемся сделать вид, что
          прочитали!
        </h3>
      </div>

      <div className="overflow-hidden h-[360px] relative group">
        <img
          className="block max-w-full h-auto shrink-0"
          src="/src/common/images/feedback/feedback.png"
          alt="feedback"
        />

        <img
          className="group-hover:opacity-100 opacity-0 duration-500 top-0 absolute z-[9] block max-w-full h-auto shrink-0"
          src="/src/common/images/feedback/feedback_evil.png"
          alt="feedback_evil"
        />
      </div>
    </section>
  );
};
