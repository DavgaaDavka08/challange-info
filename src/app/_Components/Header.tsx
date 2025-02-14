export default function Header() {
  return (
    <div className="w-[100%] bg-[rgb(47,51,91)]">
      <div className="w-[1320px] m-auto h-[46px] flex items-center justify-between bg-[rgb(47,51,91)]">
        <div className="flex gap-2">
          <img
            src="https://smartstore.mn/b62534ca306feab18b5eeec2baecdd7d.svg"
            alt=""
            className="w-[13px] h-[13px]"
          />
          <p className="m-0 leading-[12px]  text-white text-[12px] font-bold">
            7749-9999
          </p>
          <div className="flex gap-2 text-white">
            <img
              src="https://smartstore.mn/7b07e27c9c7a6544f5cda224c8dec020.svg"
              alt=""
              className="w-[13px] h-[13px]"
            />
            <p className="m-0 leading-[12px] text-white text-[13px] font-bold">
              info@smardeel.mn
            </p>
          </div>
        </div>
        <div>
          <p className="text-white transition-colors duration-300 text-[14px]">
            Хаяг байршил
          </p>
        </div>
      </div>
    </div>

  );
}
