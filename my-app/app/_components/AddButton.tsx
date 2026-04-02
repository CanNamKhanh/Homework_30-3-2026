import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createPost } from "@/services/post.service";

function AddButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer bg-orange-500 hover:bg-orange-600 mb-5 p-5">
            Thêm mới
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[80%]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Thêm mới bài viết
            </DialogTitle>
            <DialogDescription asChild>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.currentTarget);

                  const data = {
                    title: formData.get("title") as string,
                    body: formData.get("content") as string,
                  };

                  console.log(data);
                  const postCreate = await createPost(data);
                  if (!postCreate) {
                    toast.error("Tạo bài viết không thành công!");
                  } else {
                    toast.success("Tạo bài viết thành công!");
                  }
                }}
              >
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="title">Title</FieldLabel>
                    <Input
                      id="title"
                      name="title"
                      autoComplete="off"
                      placeholder="Title"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="content">Content</FieldLabel>
                    <Input
                      id="content"
                      name="content"
                      autoComplete="off"
                      placeholder="Content"
                    />

                    <Button
                      type="submit"
                      className="mt-5 cursor-pointer bg-orange-500 hover:bg-orange-600"
                    >
                      Submit
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddButton;
