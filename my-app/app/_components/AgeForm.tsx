"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function AgeForm() {
  const router = useRouter();

  return (
    <div className="border rounded-3xl w-100 p-5 flex justify-between items-center flex-col gap-5">
      <span className="text-xl font-bold">Xác minh bạn đã trên 18 tuổi!</span>

      <video
        src="/peppa.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[60%]"
      />

      <div className="flex gap-5">
        <Button
          type="submit"
          name="age"
          value="18+"
          className="cursor-pointer bg-orange-500 hover:bg-orange-600"
          onClick={() => {
            router.push("/post");
          }}
        >
          Tôi đã trên 18 tuổi
        </Button>

        <Button
          type="submit"
          name="age"
          value="under18"
          className="cursor-pointer bg-orange-500 hover:bg-orange-600"
          onClick={() => {
            router.push("/under18");
          }}
        >
          Tôi dưới 18 tuổi
        </Button>
      </div>
    </div>
  );
}

export default AgeForm;
