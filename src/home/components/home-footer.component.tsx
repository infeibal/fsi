import FooterLogo from "../../common/images/footer_logo.svg";

export const HomeFooter = () => {
  return (
    <footer id="contacts" className="bg-system-purple w-full">
      <div className="mx-auto max-w-[1100px] flex flex-col px-[3rem]">
        <img className="h-12 w-min my-6" src={FooterLogo} alt="footer_logo" />

        <section className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold">Контакты</h2>
            <img
              className="w-[4.5] h-[5] relative bottom-[-2px]"
              src="https://static.wixstatic.com/media/ba338e_6a8cb3653c6e4001875199faca1439bd~mv2.png/v1/fill/w_18,h_16,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba338e_6a8cb3653c6e4001875199faca1439bd~mv2.png"
              alt="contact_img"
            />
          </div>

          <div className="">
            <p>ФCИ Банк 1234 Гаджетный переулок, Офис 42,</p>
            <p>Город Непредсказуемость, 12345-678</p>
          </div>

          <div className="text-center font-semibold my-10 leading-7 px-8">
            <p>
              Этот сайт является полностью шуточным и пародийным. Он не
              предназначен для настоящих финансовых операций и не преследует
              цель обмана или введения в заблуждение. Все упомянутые услуги и
              продукты вымышлены и не существуют. Сайт создан исключительно для
              развлекательных и пародийных целей. Мы не продаем ничего и не
              предоставляем реальных финансовых услуг. Пожалуйста, относитесь к
              содержанию с юмором и не воспринимайте его всерьез. Спасибо за
              ваше понимание!
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};
