type MakingItemType = {
  title: string;
  content: string;
};

export const MakingItem = ({ title, content }: MakingItemType) => {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <h1 className="font-semibold">{title}</h1>
      <p className="text-gray-700 text-pretty">{content}</p>
    </div>
  );
};
