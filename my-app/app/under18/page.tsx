import Image from "next/image";

function Under18() {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <Image src="/peppaimg.jpg" alt="img" fill className="object-contain" />
    </div>
  );
}

export default Under18;
