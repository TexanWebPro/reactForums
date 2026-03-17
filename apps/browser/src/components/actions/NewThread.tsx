import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { toast } from "sonner";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import { TextEditor } from "@/components/ui/text-editor";
import { threadMutations } from "@/features/threads/threads.query";
import { Button } from "../ui/button";

export default function NewThread(props: { forumId: string }) {
  const formSchema = z.object({
    subject: z.string().min(3),
    body: z.string(),
  });

  const createThreadMutation = useMutation({
    ...threadMutations.create(),
    onSuccess: (thread) => {
      toast.success(`You've created a new thread: ${thread.subject}`, {
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });

      //   navigate({ from: "/", to: "/" });
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
      subject: "",
      body: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await createThreadMutation.mutateAsync({
        forumId: Number(props.forumId),
        subject: value.subject,
        userId: 1, // TODO: update after user auth added
        username: "Elegant Totality", // TODO: update after user auth added
      });
    },
  });

  return (
    <div className="flex flex-col items-end">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-start gap-2">
        Post A New Topic
      </span>

      <form
        id="create-new-thread"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex w-full flex-col gap-12 p-4 border-2 border-sky-800 border-t-0 rounded-b-lg"
      >
        <form.Field
          name="subject"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field>
                <FieldLabel>Subject</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Forum Name"
                  autoComplete="off"
                  className="placeholder:text-slate-700 border-2 border-sky-800"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        {/* <form.Field
          control={form.control}
          name="body"
          render={({ field }) => (
            <>
              <FormItem className="border-2 border-stone-300 rounded-lg">
                <FormControl>
                  <TextEditor {...field} previewHeader={"subject"} />
                </FormControl>
                <FormMessage className="pl-4 font-bold text-secondary-red-500" />
              </FormItem>
            </>
          )}
        /> */}

        {/* <form.Field
          control={form.control}
          name="subject"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Add Attachments</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        {...field}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </FormControl>
                <FormMessage className="pl-4 font-bold text-secondary-red-500" />
              </FormItem>
            </>
          )}
        /> */}
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
          form="create-new-thread"
          className="mt-4 font-bold text-stone-100 border-2 border-sky-800 bg-sky-600 hover:bg-sky-500 text-center p-2 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base"
        >
          Submit
        </Button>
      </Field>
    </div>
  );
}
