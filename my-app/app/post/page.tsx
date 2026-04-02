import Posts from "../_components/Posts";
import Header from "../_components/Header";
import LeftNav from "../_components/LeftNav";
import RightNav from "../_components/RightNav";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

function PostsPage() {
  return (
    <div className="bg-black">
      <LeftNav />
      <RightNav />
      <Header />
      <Posts />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default PostsPage;
