import { InputDemo } from "@/styles/Input";
import { ToggleDemo } from "@/styles/toggle";
import Image from "next/image";

export default function Midbar() {
  return (
    <div className="w-[100%]  h-[76px] py-[18px] px-[20px] sticky top-0 z-10 flex items-center justify-between bg-white">
      <div className="m-auto flex">
        <div className="w-[1380px]  justify-between flex">
          <div className="flex gap-4 items-center">
            <ToggleDemo />
            <img
              src="	https://smartstore.mn/b9ddcfafdb3695f27ce887504016455d.png"
              alt=""
              className="w-[160px] h-[32px]"
            />
          </div>
          <div className="flex">
            <InputDemo />
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="flex gap-5">
              <img
                src="https://smartstore.mn/7d33c3f77820317102646e30e4c7aefb.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <img
                src="https://smartstore.mn/c5c0c26828d8ffe153ebe3ad2fbcbf8c.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <img
                src="https://smartstore.mn/a54521902b6987b868fabab77805948e.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
            </div>

            <button className="text-[rgb(102,102,102)]  flex justify-center items-center  text-[13px] font-normal leading-[12px] whitespace-nowrap uppercase transition-all duration-200 ease-in-out">
              <img
                src="	https://smartstore.mn/5903df4c0655a670951a555838c59658.svg"
                alt=""
                className="w-[28px] h-[28px]"
              />
              <h6 className="">Нэвтрэх</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
