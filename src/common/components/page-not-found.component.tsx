import NotFoundImage from "../images/not-found.png";

export const PageNotFound = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center my-10">
      <img src={NotFoundImage} className="w-[32%]" alt="sdgsd" />
    </div>
  );
};
