import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { updatePost } from "@/services/post.service";
import { toast } from "sonner";
type Props = {
  id: number;
  title?: string;
  body?: string;
};

function UpdateButton({ id, title, body }: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer bg-orange-500 hover:bg-orange-600 mb-5 p-5">
            Cập nhật
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[80%]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Cập nhật mới bài viết
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

                  //   console.log(data);
                  const postUpdate = await updatePost(id, data);
                  if (!postUpdate) {
                    toast.error("Cập nhật bài viết không thành công!");
                  } else {
                    toast.success("Cập nhật bài viết thành công!");
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
                      defaultValue={title}
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="content">Content</FieldLabel>
                    <Input
                      id="content"
                      name="content"
                      autoComplete="off"
                      placeholder="Content"
                      defaultValue={body}
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

export default UpdateButton;
