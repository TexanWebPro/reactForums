import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { TextEditor } from "../ui/text-editor";
import { Button } from "../ui/button";
import { Field, FieldError } from "../ui/field";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postMutations } from "@/features/posts/posts.query";

export default function QuickReply(props: {
  forumId: number;
  threadId: number;
  postsPerPage: number;
}) {
  const queryClient = useQueryClient();
  const formSchema = z.object({
    content: z.string(),
  });

  const baseMutation = postMutations.create(queryClient, props.postsPerPage);

  const createPostMutation = useMutation({
    ...baseMutation,
    onSuccess: async (data, variables, onMutateResult, context) => {
      await baseMutation.onSuccess?.(data, variables, onMutateResult, context);

      toast.success(`You've created a new post`, {
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
    },
    onError: (error) => {
      toast.error(`Something went wrong: ${error.message}.`, {
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
    },
  });

  const form = useForm({
    defaultValues: {
      content: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await createPostMutation.mutateAsync({
        threadId: props.threadId,
        forumId: props.forumId,
        userId: 1, // TODO: update after user auth added
        username: "Elegant Totality", // TODO: update after user auth added
        content: value.content,
        ipAddress: "000", // TODO: update after user auth added
        longIpAddress: "000-000", // TODO: update after user auth added
      });
    },
  });

  return (
    <div className="flex flex-col items-end w-full pt-4">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Quick Reply
      </span>

      <form
        id="create-new-post"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex w-full flex-col gap-12 p-4 border-2 border-sky-800 border-t-0 rounded-b-lg"
      >
        <form.Field
          name="content"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field>
                <TextEditor
                  previewHeader={"title"}
                  {...field}
                  onChange={(e) => field.handleChange(e)}
                  //   id={field.name}
                  //   name={field.name}
                  //   value={field.state.value}
                  //   onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  //   placeholder="Forum Name"
                  //   autoComplete="off"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
      </form>
      <Field
        orientation="horizontal"
        className="flex flex-row items-start justify-end gap-2"
      >
        <Button
          type="button"
          variant="outline"
          className="mt-4 bg-stone-200 text-stone-950 font-bold border-2 border-stone-300 hover:bg-stone-300 text-center p-2 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base"
          onClick={() => form.reset()}
        >
          Preview
        </Button>
        <Button
          type="submit"
          form="create-new-post"
          className="mt-4 font-bold text-stone-100 border-2 border-sky-800 bg-sky-600 hover:bg-sky-500 text-center p-2 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base"
        >
          Submit
        </Button>
      </Field>
    </div>
  );
}
