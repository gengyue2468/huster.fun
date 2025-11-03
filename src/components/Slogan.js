import { ArrowRightIcon } from "lucide-react";

export default function Slogan({ switchMode }) {
  return (
    <div className="*:leading-relaxed ">
      <h1 className="font-extrabold text-3xl uppercase text-balance">
        为任何
        <span className="bg-green-200 border-b-8 border-green-300">
          创造力爆棚的 huster
        </span>
        准备的
        <span className="bg-yellow-200 border-b-8 border-yellow-300">
          免费
        </span>{" "}
        二级域名 .
      </h1>

      <p className="my-4 font-bold text-lg md:text-xl sm:text-3xl text-balance">
        无需信用卡, 只需填写一份表格，然后静待一段时间
      </p>

      <button
        onClick={() => switchMode()}
        className="text-left flex flex-row space-x-1 items-center cursor-pointer"
      >
        <span className="font-bold text-lg md:text-xl sm:text-3xl text-balance">
          现在立刻开始
        </span>{" "}
        <ArrowRightIcon className="size-6" />
      </button>
    </div>
  );
}
