import { MyCard } from "./MyCard";

export default function Product() {
  return (
    <div className="w-[1280px] m-auto bg-[#F2F4F6]  h-[1280px]">
      <h1>Бүтээгдэхүүний мэдээлэл</h1>
      <div>
        <img
          src="	https://d1f6qhhrbg3j8a.cloudfront.net/img/175963/original/1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/175964/original/Artboard_1.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/175965/original/Artboard_2.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/175966/original/Artboard_3.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/175967/original/Artboard_4.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://d1f6qhhrbg3j8a.cloudfront.net/img/175968/original/Artboard_5.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="	https://d1f6qhhrbg3j8a.cloudfront.net/img/175969/original/Artboard_6.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="	https://d1f6qhhrbg3j8a.cloudfront.net/img/175970/original/Artboard_7.png"
          alt=""
        />
      </div>
      <div className="flex w-[1280px] justify-between">
        <div>
          <h2 className="text-gray-800 text-xl font-medium mb-0">
            Төстэй бараанууд
          </h2>
        </div>

        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-lg border-2 border-gray-800 bg-gray-50 bg-center bg-[length:12px] transition-all duration-200 ease-in-out">
            <img
              src="https://smartstore.mn/f6791a023a05123f3f0a58a3f2386f6c.svg"
              alt=""
            />
          </button>
          <button className="w-8 h-8 rounded-lg border-2 border-gray-800 bg-gray-50 bg-center bg-[length:12px] transition-all duration-200 ease-in-out">
            <img
              src="https://smartstore.mn/4bdf5b27a0c31266850cb8327652286a.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="w-[1280px] m-auto justify-between flex gap-2">
        {MyCard.map((card) => {
          return (
            <div
              key={card.id}
              className="cursor-pointer rounded-[2px] h-[382.25px] w-[232.75px] flex flex-col gap-5 border border-[rgb(228, 228, 228)] bg-white  relative"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.img || "Зээлийн зураг"}
                  className="w-[230px] h-[275px]"
                />
              )}
              <div className="flex flex-col gap-2">
                <p className="text-[rgb(17,17,17)] text-[14px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis uppercase leading-normal">
                  {card.title}
                </p>
                <p className="h-[13px] m-0 text-[rgb(102,102,102)] text-[12px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">
                  {card.disc}
                </p>
                <p className="text-[16px] font-[Arial, sans-serif] font-bold whitespace-nowrap">
                  {card.express}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-[1280px] justify-between">
        <div>
          <h2 className="text-gray-800 text-xl font-medium mb-0">
            Төстэй бараанууд
          </h2>
        </div>

        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-lg border-2 border-gray-800 bg-gray-50 bg-center bg-[length:12px] transition-all duration-200 ease-in-out">
            <img
              src="https://smartstore.mn/f6791a023a05123f3f0a58a3f2386f6c.svg"
              alt=""
            />
          </button>
          <button className="w-8 h-8 rounded-lg border-2 border-gray-800 bg-gray-50 bg-center bg-[length:12px] transition-all duration-200 ease-in-out">
            <img
              src="https://smartstore.mn/4bdf5b27a0c31266850cb8327652286a.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="w-[1280px] m-auto justify-between flex gap-2">
        {MyCard.map((card) => {
          return (
            <div
              key={card.id}
              className="cursor-pointer rounded-[2px] h-[382.25px] w-[232.75px] flex flex-col gap-5 border border-[rgb(228, 228, 228)] bg-white  relative"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.img || "Зээлийн зураг"}
                  className="w-[230px] h-[275px]"
                />
              )}
              <div className="flex flex-col gap-2">
                <p className="text-[rgb(17,17,17)] text-[14px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis uppercase leading-normal">
                  {card.title}
                </p>
                <p className="h-[13px] m-0 text-[rgb(102,102,102)] text-[12px] font-normal text-ellipsis whitespace-nowrap overflow-hidden">
                  {card.disc}
                </p>
                <p className="text-[16px] font-[Arial, sans-serif] font-bold whitespace-nowrap">
                  {card.express}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
