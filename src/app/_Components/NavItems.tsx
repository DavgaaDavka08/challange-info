export default function NavItems() {
  return (
    <div className="w-full h-[55px] bg-gray-100 shadow-md sticky top-[76px] z-10 bg-no-repeat">
    <div className=" w-[1320px] justify-between m-auto flex  font-bold  items-center ">
      <div className="flex gap-4">
      <div className="relative inline-block  uppercase group"><p className="cursor-pointer transition-colors duration-200 text-[#2F335B] uppercase py-[17px] text-[14px] relative">Хямдралтай</p>
      <span className="absolute left-0 bottom-[2px] w-0 h-[3px] bg-[#252A52] transition-all duration-200 group-hover:w-full"></span>
      </div>
      <div className="relative inline-block  uppercase group"><p className="cursor-pointer transition-colors duration-200 text-[#2F335B] uppercase py-[17px] text-[14px] relative">Шинээр ирсэн</p>
      <span className="absolute left-0 bottom-[2px] w-0 h-[3px] bg-[#252A52] transition-all duration-200 group-hover:w-full"></span>
      </div>
      <div className="relative inline-block uppercase group"><p className="cursor-pointer transition-colors duration-200 text-[#2F335B] uppercase py-[17px] text-[14px] relative">Лизинг</p>
      <span className="absolute left-0 bottom-[2px] w-0 h-[3px] bg-[#252A52] transition-all duration-200 group-hover:w-full"></span>
      </div>
      <div className="relative inline-block uppercase group"><p className="cursor-pointer transition-colors duration-200 text-[#2F335B] uppercase py-[17px] text-[14px] relative">БҮХ БРЭНД</p>
      <span className="absolute left-0 bottom-[2px] w-0 h-[3px] bg-[#252A52] transition-all duration-200 group-hover:w-full"></span>
      </div>
      </div>
      <div className="w-[83px] relative inline-block uppercase group h-[32px] justify-center  rounded bg-[rgb(6,152,214)]">
        <button className="absolute  bottom-[-12px] left-[13px] cursor-pointer transition-colors duration-100 text-white py-[16px] ">
          Заавар
        </button>
  
        <span className="absolute left-0 bottom-[-9px] w-0 h-[3px] bg-[#252A52] transition-all duration-200 group-hover:w-full"></span>
      </div>
  

    </div>
    </div>
  );
}
