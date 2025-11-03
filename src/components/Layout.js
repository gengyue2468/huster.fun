export default function Layout({ children }) {
  return (
    <>
      <div className="top-0 fixed w-full z-10">
        <div className="max-w-7xl mx-auto py-4 px-8">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-extrabold">
              HUSTER.<span className="bg-yellow-200">FUN</span>
            </h1>
            <div className="flex flex-row space-x-8 text-xs">
              <a href="https://bg.huster.fun">作者小站</a>
              <a href="https://www.bingyan.net/">冰岩作坊</a>
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto snap-y h-screen overflow-y-auto">{children}</main>
    </>
  );
}
