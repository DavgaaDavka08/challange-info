export default function NavItems() {
  return (
    <div className="flex items-center font-bold w-[100%] bg-[#F3F4F6] h-[49px] py-[18px] px-[20px]">
      <div className="flex w-[1330px]">
        <div className="flex gap-8">
          <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
            Хямдралтай
          </h2>
          <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
            Шинээр Ирсэн
          </h2>
          <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
            Лизинг
          </h2>
          <h2 className="cursor-pointer transition-colors duration-200 text-[rgb(47,51,91)] uppercase py-[17px] relative">
            Бүх Брэнд
          </h2>
        </div>
      </div>
      <div className="relative w-[86px] h-[35px] rounded bg-[rgb(6,152,214)]">
        <button className="absolute bottom-[-13px] left-[6px] cursor-pointer transition-colors duration-200 text-white uppercase py-[17px] ">
          Заавар
        </button>
      </div>
    </div>
  );
}
