import { CommissionItem } from "./commission_item.component";

export const CommissionList = ({
  commissions,
}: {
  commissions: Array<number>;
}) => {
  return (
    <div className="bg-system-purple text-white text-lg flex flex-col gap-8 font-semibold w-fit rounded-3xl p-8">
      <CommissionItem
        text="Комиссия за просмотр баланса"
        percent={commissions[0]}
      />
      <CommissionItem
        text="Комиссия за смену пароля"
        percent={commissions[1]}
      />
      <CommissionItem
        text="Комиссия за перевод между собственными счетами"
        percent={commissions[2]}
      />
      <CommissionItem
        text="Комиссия за СМС уведомления о платежах"
        percent={commissions[3]}
      />
      <CommissionItem
        text="Комиссия за прокрутку страницы вверх или вниз"
        percent={commissions[4]}
      />
    </div>
  );
};
