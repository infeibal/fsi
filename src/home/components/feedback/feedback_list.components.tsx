import { FeedbackItem } from "./feedback_item.component";

export const FeedBackList = () => {
  return (
    <div className="grid justify-items-center grid-cols-3 gap-y-20">
      <FeedbackItem
        author="Виталий Заплатин"
        text="Оформил карту, а потом нашёл в договоре несколько мелких пакостей.
            Но это ведь ФСИ, тут без сюрпризов не бывает!"
        decoration={
          <img
            className="absolute left-[-20px] bottom-[-3px] w-[120px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_one.svg"
            alt="flower_one"
          />
        }
      />

      <FeedbackItem
        author="Алексей Муткин"
        text="Пользуюсь ФCИ уже месяц. Вроде всё устраивает, но почему-то я всегда в минусе. Магия?"
        decoration={
          <img
            className="absolute left-[-40px] bottom-[-45px] w-[149px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_two.svg"
            alt="flower_two"
          />
        }
      />

      <FeedbackItem
        author="Евгений Доверчив"
        text="Уже три месяца с ФCИ, и до сих пор не могу разобраться, за что плачу. Но это и есть весь шарм этого банка!"
        decoration={
          <img
            className="absolute left-[-30px] bottom-[-30px] w-[128px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_three.svg"
            alt="flower_three"
          />
        }
      />

      <FeedbackItem
        author="Николай Веритин"
        text="ФCИ — банк, который всегда рядом... особенно когда нужно снять комиссию. Но я все равно доверяю им!"
        decoration={
          <img
            className="absolute left-[-20px] bottom-[-3px] w-[120px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_one.svg"
            alt="flower_one"
          />
        }
      />

      <FeedbackItem
        author="Иван Заплатищев"
        text="Каждый раз думаю: 'Ну, на этот раз без комиссии!' И каждый раз ошибаюсь. Но уже привык!"
        decoration={
          <img
            className="absolute left-[-40px] bottom-[-45px] w-[149px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_two.svg"
            alt="flower_two"
          />
        }
      />

      <FeedbackItem
        author="Александр Платежников"
        text="Всё так просто и понятно... на первый взгляд. ФCИ учит быть бдительным и оставлять надежду на остаток в кошельке."
        decoration={
          <img
            className="absolute left-[-30px] bottom-[-30px] w-[128px] group-hover:rotate-[-3deg] group-hover:scale-105 duration-300"
            src="/src/common/images/feedback/flower_three.svg"
            alt="flower_three"
          />
        }
      />
    </div>
  );
};
