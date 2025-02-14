import { loanData } from "./Mydata";

export default function Container() {
  return (
    <div className="w-[1280px] m-auto bg-[#fff] py-[16px] px-[17px]  ">
      <div className="flex w-[1280px] gap-[14px]">
        <div className="w-[612px] h-[1377px]  flex flex-col justify-between">
          <img
            src={"https://cdnp.cody.mn/spree/images/1603000/large/lite2_2.png"}
            alt=""
            className="bg-white/30 border border-[rgb(204,204,204)] cursor-crosshair w-auto h-auto  relative "
          />
          <div className="flex w-[500px] h-[500px]">
            <button className="h-[30px] w-[30px] mt-[31px]  rounded-[4px] border border-solid border-[rgb(204,204,204)]">
              <img
                src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTk4LjYwOCwyNDYuMTA0TDM4Mi42NjQsNjIuMDRjNS4wNjgtNS4wNTYsNy44NTYtMTEuODE2LDcuODU2LTE5LjAyNGMwLTcuMjEyLTIuNzg4LTEzLjk2OC03Ljg1Ni0xOS4wMzJsLTE2LjEyOC0xNi4xMiAgICBDMzYxLjQ3NiwyLjc5MiwzNTQuNzEyLDAsMzQ3LjUwNCwwcy0xMy45NjQsMi43OTItMTkuMDI4LDcuODY0TDEwOS4zMjgsMjI3LjAwOGMtNS4wODQsNS4wOC03Ljg2OCwxMS44NjgtNy44NDgsMTkuMDg0ICAgIGMtMC4wMiw3LjI0OCwyLjc2LDE0LjAyOCw3Ljg0OCwxOS4xMTJsMjE4Ljk0NCwyMTguOTMyYzUuMDY0LDUuMDcyLDExLjgyLDcuODY0LDE5LjAzMiw3Ljg2NGM3LjIwOCwwLDEzLjk2NC0yLjc5MiwxOS4wMzItNy44NjQgICAgbDE2LjEyNC0xNi4xMmMxMC40OTItMTAuNDkyLDEwLjQ5Mi0yNy41NzIsMC0zOC4wNkwxOTguNjA4LDI0Ni4xMDR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+"
                alt=""
                className="w-[14px] m-auto h-[14px]"
              />
            </button>
            <div className="flex mb-[300px] ">
              <div className=" w-[96px] h-[96px]">
                <img
                  src="https://cdnp.cody.mn/spree/images/1603000/small/lite2_2.png"
                  className="w-[85px] h-[85px]"
                />
              </div>
              <div className=" w-[96px] h-[96px]">
                <img
                  src="https://cdnp.cody.mn/spree/images/1603001/small/lite2_3.png"
                  className="w-[85px] h-[85px]"
                />
              </div>
              <div className=" w-[96px] h-[96px]">
                <img
                  src="https://cdnp.cody.mn/spree/images/1603001/small/lite2_3.png"
                  className="w-[85px] h-[85px]"
                />
              </div>
            </div>
                 <button className="h-[30px] w-[30px] mt-[30px]  rounded-[4px] border border-solid border-[rgb(204,204,204)]">
              <img
                src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGc+Cgk8cGF0aCBkPSJNMzQ1LjQ0MSwyNDguMjkyTDE1MS4xNTQsNDQyLjU3M2MtMTIuMzU5LDEyLjM2NS0zMi4zOTcsMTIuMzY1LTQ0Ljc1LDBjLTEyLjM1NC0xMi4zNTQtMTIuMzU0LTMyLjM5MSwwLTQ0Ljc0NCAgIEwyNzguMzE4LDIyNS45MkwxMDYuNDA5LDU0LjAxN2MtMTIuMzU0LTEyLjM1OS0xMi4zNTQtMzIuMzk0LDAtNDQuNzQ4YzEyLjM1NC0xMi4zNTksMzIuMzkxLTEyLjM1OSw0NC43NSwwbDE5NC4yODcsMTk0LjI4NCAgIGM2LjE3Nyw2LjE4LDkuMjYyLDE0LjI3MSw5LjI2MiwyMi4zNjZDMzU0LjcwOCwyMzQuMDE4LDM1MS42MTcsMjQyLjExNSwzNDUuNDQxLDI0OC4yOTJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+"
                alt=""
                className="w-[15px] m-auto h-[15px]"
              />
            </button>
     
          </div>
          <div className="text-[13px] p-[20px_30px] rounded-[4px] bg-[#F9F9F9] flex w-[515px] h-[247px] gap-[90px]  px-[30px] py-[20px]  ">
            <div className="flex flex-col justify-between ">
              <p className="text-[black] text-[15px]">Насны ангилал:</p>
              <p className="text-[black] text-[15px] ">Оосрын материал:</p>
              <p className="text-[black] text-[15px] ">Хүйс:</p>
              <p className="text-[black] text-[15px] ">Дэлгэцийн төрөл:</p>
              <p className="text-[black] text-[15px]">Хөдлөх үйлдэл:</p>
              <p className="text-[black] text-[15px] ">Цагны хэлбэр:</p>
              <p className="text-[black] text-[15px]">Оосрын төрөл:</p>
              <p className="text-[black] text-[15px] ">Загвар:</p>
            </div>
            <div className="flex flex-col justify-between ">
              <p className="text-[#666666]"> Том хүн</p>
              <p className="text-[#666666]"> Резин</p>
              <p className="text-[#666666]"> Эр/Эм</p>
              <p className="text-[#666666]"> Мэдрэгчтэй</p>
              <p className="text-[#666666]"> Automatic</p>
              <p className="text-[#666666]"> Дугуй</p>
              <p className="text-[#666666]">Normal Strap</p>
              <p className="text-[#666666]">Загвар: Өдөр тутмын</p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-[612px] flex flex-col gap-3">
          <div className="w-[403px] h-[52px]">
            <h4 className="text-[rgb(36,36,36)] text-[22px] font-medium mb-0 overflow-hidden text-ellipsis uppercase">
              MiBro Watch Lite 2 Brown, Black Strap | Ухаалаг цаг
            </h4>
          </div>
          <p>Ухаалаг цаг</p>
          <div className="shrink-0 bg-border flex gap-3 h-[1px] w-full border-border border"></div>
          <div className="flex w-[612px] justify-between">
            <div>
              <p>Онлайн авах үнэ</p>
              <div className="flex items-center gap-2">
                <p className="text-[rgb(51,51,51)] text-[30px] font-bold font-['Roboto',arial,serif] whitespace-nowrap">
                  199,000 ₮
                </p>
                <p className="text-[12px] font-medium w-[40px] h-[26px] rounded border-2 border-[rgb(6,152,210)] text-[rgb(6,152,210)] bg-white">
                  -33%
                </p>
              </div>
              <div className="flex">
                <p>Хэмнэлт</p>
                <p className="whitespace-nowrap text-[rgb(6,152,210)]">
                  100,000 ₮
                </p>
              </div>
            </div>
            <div>
              <p>Анхны үнэ</p>
              <p className="text-[rgb(102,102,102)] text-[30px] font-medium font-['Roboto',arial,serif]">
                299,000 ₮
              </p>
            </div>
          </div>
          <div className="w-[612px] h-[300pxpx]  flex flex-col ">
            {loanData.map((loan) => (
              <div
                key={loan.id}
                className="mb-4 p-4 border rounded-lg flex items-center  bg-gray-200 shadow-sm"
              >
                <div className="flex gap-3">
                  <div>
                    {loan.img && (
                      <img
                        src={loan.img}
                        alt={loan.img || "Зээлийн зураг"}
                        className="w-10 h-10  object-cover"
                      />
                    )}
                  </div>

                  <div className="flex items-center w-[552px] justify-between ">
                    <div>
                      <p className="text-[rgb(102,102,102)] text-[12px] ">
                        {loan.description}
                      </p>
                      <p className="text-[rgb(51,51,51)] text-[14px] font-medium">
                        {loan.details}
                      </p>
                    </div>
                    <div>
                      <img
                        src="	https://smartstore.mn/c32226ff50460f00a7129070853683a9.svg"
                        alt=""
                        className="w-[10px] h-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[612px] flex items-center justify-between">
            <div className="h-[48px] w-[150px]  rounded-[4px] border border-[rgb(228,228,228)] bg-white  flex items-center justify-center relative">
              <button className="absolute right-[120px]">-</button>
              <p className="w-[60px] h-[46px] justify-center items-center flex border-l border-r border-[rgb(228, 228, 228)] text-center text-[16px]">
                3
              </p>
              <button className="absolute left-[120px]">+</button>
            </div>
            <button className="h-[48px] w-[210px]  rounded-[4px] border-2 border-solid border-[rgb(42,42,42)] bg-white text-[rgb(42,42,42)] text-[12px] font-bold text-center uppercase p-[3px_15px]">
              Сагсанд хийх
            </button>
            <button className="h-[48px] w-[210px]  rounded-[4px] border-2 border-solid border-[rgb(47,51,91)] bg-[rgb(47,51,91)] text-white transition-all duration-[200ms] ease-in-out text-[12px] font-bold text-center">
              Худалдан авах
            </button>
          </div>
          <div>
            <h4>Бүтээгдэхүүнийг хадгалах</h4>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full border-border border"></div>
          <div className="w-[612px] flex justify-between">
            <div className="flex flex-col">
              <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E4E4E4] inline-block align-middle mr-[8px] ml-0"></div>
             <p className="font-medium mr-[5px] text-black" >Барааны код:</p>
             <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap">mibro-lite2:</p>
              </div>
              <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E4E4E4] inline-block align-middle mr-[8px] ml-0"></div>
             <p className="font-medium mr-[5px] text-black" >Оосрын материал:</p>
             <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap">Резин</p>
              </div>
            </div>
            <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E4E4E4] inline-block align-middle mr-[8px] ml-0"></div>
             <p className="font-medium mr-[5px] text-black" >Брэнд:</p>
             <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap">Kieslect</p>
              </div>
              <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E4E4E4] inline-block align-middle mr-[8px] ml-0"></div>
             <p className="font-medium mr-[5px] text-black" >Хүйс:</p>
             <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap">Эр/Эм</p>
              </div>
            </div>
            <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[#E4E4E4] inline-block align-middle mr-[8px] ml-0"></div>
             <p className="font-medium mr-[5px] text-black" >Насны ангилал:</p>
             <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap"> Том хүн</p>
              </div>
              <p className="text-[#333333] text-[13px] leading-[20px] whitespace-nowrap">дэлгэрэнгүй мэдээлэл</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
