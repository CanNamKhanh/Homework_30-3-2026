import LeftNav from "@/app/_components/LeftNav";
import PostsDetail from "@/app/_components/PostsDetail";
import RightNav from "@/app/_components/RightNav";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  params: Promise<{ id: number }>;
};

async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const path = await params;
  console.log(path);

  return (
    <div>
      <LeftNav />
      <RightNav />
      <Toaster position="top-right" richColors />
      <h1 className="text-3xl">
        <PostsDetail id={id} />
      </h1>
    </div>
  );
}

export default ProductDetailPage;
