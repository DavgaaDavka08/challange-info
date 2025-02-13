export default function NavItems() {
  return (
    <div className="h-[54px] w-[1320px] justify-between m-auto flex bg-[#F3F4F6] z-10 font-bold sticky top-[76px]  items-center ">
      <div className="flex gap-8">
        <h2 className="hover:text-blue-500  cursor-pointer style={{ touchAction: manipulation }} cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
          Хямдралтай
        </h2>
        <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative hover:text-blue-500">
          Шинээр Ирсэн
        </h2>
        <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative hover:text-blue-500">
          Лизинг
        </h2>
        <h2 className="cursor-pointer transition-colors  hover:text-blue-500 duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
          Бүх Брэнд
        </h2>
      </div>
      <div className="relative w-[86px] h-[35px] flex justify-center  rounded bg-[rgb(6,152,214)]">
        <button className="absolute  bottom-[-13px] left-[6px] cursor-pointer transition-colors duration-200 text-white uppercase py-[17px] ">
          Заавар
        </button>
      </div>
    </div>
  );
}
