function Header() {
  return (
    <>
      <div className="ts-container w-full h-15 bg-black flex items-center border-b">
        <div className="flex items-center w-[90%] mx-auto justify-between">
          <div className="ts-logo flex cursor-pointer">
            <div className="p-1 flex items-center justify-center">
              <span className="text-white font-bold">Posts</span>
            </div>
            <div className="bg-orange-500 p-1 flex items-center justify-center">
              <span className="font-bold">Hub</span>
            </div>
          </div>
          <div className="ts-slogan text-white">
            Nơi các bài báo mang lại cảm xúc thăng hoa!
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
