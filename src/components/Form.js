import { XIcon } from "lucide-react";

export default function Form({ close }) {
  return (
    <div className="rounded-3xl bg-white shadow-lg px-8 py-8">
      <button
        onClick={() => close()}
        className="size-10 flex justify-center items-center rounded-xl shadow-md"
      >
        <XIcon />
      </button>
      <h1 className="text-xl font-extrabold text-center">
        注册新的 *.huster.fun 域名
      </h1>
      <form className="mt-4">
        <p className="text-xs font-semibold opacity-50">您的姓名？</p>
        <div className="flex flex-row space-x-4 mt-2">
          <input
            className="w-1/2 rounded-3xl px-4 py-2 border border-neutral-200 shadow-md"
            placeholder="名字"
          />
          <input
            className="w-1/2 rounded-3xl px-4 py-2 border border-neutral-200 shadow-md"
            placeholder="姓氏"
          />
        </div>
        <p className="mt-4 text-xs font-semibold opacity-50">您的性别？</p>
        <select className="rounded-3xl px-4 py-2 border border-neutral-200 mt-2 w-full shadow-md">
          <option value="male">男</option>
          <option value="female">女</option>
          <option value="secret">保密</option>
        </select>
        <p className="mt-4 text-xs font-semibold opacity-50">您的身份？</p>
        <select className="rounded-3xl px-4 py-2 border border-neutral-200 mt-2 w-full shadow-md">
          <option value="student">学生</option>
          <option value="teacher">老师</option>
          <option value="hobby">爱好者</option>
        </select>
        <p className="mt-4 text-xs font-semibold opacity-50">
          您中意的域名叫什么名字？
        </p>
        <div className="flex flex-row space-x-4 items-center mt-2">
          <input
            className="flex-1 rounded-3xl px-4 py-2 border border-neutral-200 shadow-md"
            placeholder="子域名字"
          />
          <p className="font-semibold">.huster.fun</p>
        </div>
        <p className="mt-4 text-xs font-semibold opacity-50">
          您注册此子域的动机是什么？
        </p>
        <textarea
          className="mt-2 w-full h-32 resize-none rounded-3xl px-4 py-2 border border-neutral-200 shadow-md"
          placeholder="在这里说明动机"
        />
        <div className="mt-4 flex flex-row items-center gap-2">
          <input
            type="checkbox"
            id="read"
            name="read"
            value="read"
            className="size-4"
          />
          <label for="read" className="font-semibold">
            我已阅读并且同意 huster.fun 的用户条款
          </label>
        </div>

        <div className="mt-4">
          <button className="shadow-md shadow-blue-200 w-full rounded-3xl px-4 py-3 bg-blue-600 text-white font-semibold">
            提交注册申请
          </button>
        </div>
      </form>
    </div>
  );
}
