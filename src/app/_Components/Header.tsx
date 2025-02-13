export default function Header() {
  return (
    <div className="w-[100%] h-[40px]  flex bg-[#6f42c1] py-[18px] px-[20px] items-center  ">
      <div className="m-auto flex">
        <div className="w-[1230px]   flex gap-2">
          <div className="flex gap-2">
            <p className="leading-[12px] text-[12x] text-bold text-white">
              7749-9999
            </p>
          </div>

          <div className="flex gap-2 text-white">
            <p className="leading-[12px] text-[12x] text-bold">
              info@smardeel.mn
            </p>
          </div>
        </div>
        <div className="">
          <p className="leading-[12px] text-[12x] text-bold text-white">
            Хаяг байршил
          </p>
        </div>
      </div>
    </div>
  );
}
