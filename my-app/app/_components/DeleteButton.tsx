import { Button } from "@/components/ui/button";
import { deletePost } from "@/services/post.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  id: number;
};

function DeleteButton({ id }: Props) {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={async () => {
          const deletedPost = await deletePost(id);
          if (!deletedPost) {
            toast.error("Xóa bài viết thật bại!");
          } else {
            toast.success("Xóa bài viết thành công!");
            setTimeout(() => {
              router.push("/post");
            }, 1500);
          }
        }}
        className="cursor-pointer bg-orange-500 hover:bg-orange-600 mb-5 p-5"
      >
        Xóa
      </Button>
    </div>
  );
}

export default DeleteButton;
