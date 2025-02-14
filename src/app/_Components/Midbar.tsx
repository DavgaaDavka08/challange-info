import App from "@/MyIcons/Menu";


export default function Midbar() {
  return (
    <div className="w-[100%] bg-white sticky top-0 z-10">
    <div className="m-auto w-[1320px] h-[76px] flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <button className="w-[50px] h-[34px] z-[41] flex items-center justify-center flex-col rounded-[4px] bg-[#0698D2] relative">
        <App />
        </button>
        <img
          src="	https://smartstore.mn/b9ddcfafdb3695f27ce887504016455d.png"
          alt=""
          className="w-[160px] h-[32px]"
        />
      </div>
      <div className="flex w-[600px]">
        <input
          type="text"
          placeholder="Эндээс бүхнийг хайж олох..."
          className="w-full h-[40px] bg-[rgb(242,244,247)] text-[rgb(68,68,68)] 
         text-[15px] rounded-[40px] border border-[rgb(243,243,243)] 
         px-[20px] pl-[50px] transition duration-200 focus:outline-none "
        ></input>
        <img
          src="https://smartstore.mn/ee368a5c928e52c13b8849d599f1baf2.svg"
          alt=""
          className="w-[30px] h-[20px] absolute bottom-[28px] right-[1000px] "
        />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="flex gap-5">
          <img
            src="https://smartstore.mn/7d33c3f77820317102646e30e4c7aefb.svg"
            alt=""
            className="h-[27px] w-[27px]"
          />

          <img
            src="https://smartstore.mn/c5c0c26828d8ffe153ebe3ad2fbcbf8c.svg"
            alt=""
            className="h-[27px] w-[27px]"
          />
          <img
            src="https://smartstore.mn/a54521902b6987b868fabab77805948e.svg"
            alt=""
            className="h-[29px] w-[29px]"
          />
        </div>

        <button className="w-[136px] h-[37px] p-0 cursor-pointer flex items-center bg-[rgb(242,244,247)] rounded-3xl justify-center transition ease-in-out duration-200">
          <img
            src="	https://smartstore.mn/5903df4c0655a670951a555838c59658.svg"
            alt=""
            className="w-[28px] h-[28px]"
          />
          <h6 className="text-[rgb(102,102,102)] mt-1 text-[13px] font-normal leading-[12px] whitespace-nowrap uppercase">Нэвтрэх</h6>
        </button>
      </div>
    </div>
    </div>
  );
}
