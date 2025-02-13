export default function NavItems() {
  return (
    <div className="flex  font-bold sticky top-[56px]  z-10 w-[100%] bg-[#F3F4F6] h-[54px] justify-center   items-center">
      <div className="m-auto flex px-[10px] ">
        <div className="flex w-[1330px]">
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
        </div>
        <div className="relative w-[86px] h-[35px] flex justify-center  mt-[10px] rounded bg-[rgb(6,152,214)]">
          <button className="absolute  bottom-[-13px] left-[6px] cursor-pointer transition-colors duration-200 text-white uppercase py-[17px] ">
            Заавар
          </button>
        </div>
      </div>
    </div>
  );
}
