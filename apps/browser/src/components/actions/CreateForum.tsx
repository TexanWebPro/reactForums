import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { forumMutations, forumQueries } from "@/features/forums/forums.query";
import { CreateForumInput, ForumTreeNode } from "@reactforums/core";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useNavigate } from "@tanstack/react-router";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Forum name must be at least 5 characters.")
    .max(32, "Forum name must be at most 32 characters."),
  description: z
    .string()
    .min(5, "Forum description must be at least 5 characters."),
  isCategory: z.boolean(),
  parentForumId: z.number().optional(),
});

export function CreateForum() {
  const navigate = useNavigate();
  const createForumMutation = useMutation({
    ...forumMutations.create(),
    onSuccess: (forum) => {
      toast.success(`You've created a new forum: ${forum.name}`, {
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });

      navigate({ from: "/admin/forums/new", to: "/admin/forums" });
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
      name: "",
      description: "",
      isCategory: false,
      parentForumId: undefined,
    } as CreateForumInput,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await createForumMutation.mutateAsync({
        name: value.name,
        description: value.description,
        isCategory: value.isCategory,
        parentForumId: value.parentForumId,
      });
    },
  });

  const { data: allForums } = useQuery({
    ...forumQueries.byCategory(),
  });

  function renderForumOptions(
    forums: ForumTreeNode[],
    depth = 0,
  ): React.ReactNode[] {
    return forums.flatMap((forum) => {
      const item = (
        <SelectItem key={forum.id} value={forum.id.toString()}>
          {`${"— ".repeat(depth)}${forum.name}`}
        </SelectItem>
      );

      const children = forum.children
        ? renderForumOptions(forum.children, depth + 1)
        : [];

      return [item, ...children];
    });
  }

  if (!allForums) return;

  return (
    <div className="border-0">
      <span className="bg-sky-600 w-full p-4 py-2 font-bold text-stone-50 border-2 border-sky-800 rounded-t-lg flex flex-row items-center justify-between gap-2">
        <h2 className="font-bold">Create A New Forum</h2>
      </span>
      <form
        id="create-new-forum"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="p-4 border-2 border-stone-500 border-y-0 flex flex-col items-start gap-6"
      >
        <FieldGroup className="grid grid-cols-3 items-center justify-between gap-4">
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Forum Name</FieldLabel>
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
        </FieldGroup>
        <FieldGroup>
          <form.Field
            name="description"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Forum Description
                  </FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Forum Description"
                    autoComplete="off"
                    className="placeholder:text-slate-700 border-2 border-sky-800"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
        <FieldGroup>
          <form.Field
            name="isCategory"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field
                  data-invalid={isInvalid}
                  orientation="horizontal"
                  className="max-w-sm py-4 my-2"
                >
                  <FieldLabel
                    htmlFor={field.name}
                    className="rounded-lg border-2 border-stone-500 p-4 cursor-pointer"
                  >
                    <FieldContent className="flex flex-col gap-4">
                      <FieldTitle>Is this a Category?</FieldTitle>
                      <FieldDescription>
                        Categories contain one or many forums.
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id={field.name}
                      name={field.name}
                      aria-labelledby="isCategory"
                      checked={field.state.value as boolean}
                      onCheckedChange={(checked) =>
                        field.handleChange(() => checked)
                      }
                      className=""
                    />
                  </FieldLabel>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="parentForumId"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Parent Forum</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.state.value?.toString() ?? "none"}
                    onValueChange={(value) =>
                      field.handleChange(
                        value === "none" ? undefined : Number(value),
                      )
                    }
                  >
                    <SelectTrigger
                      id="form-tanstack-select-language"
                      aria-invalid={isInvalid}
                      className="max-w-56 placeholder:text-slate-700  bg-stone-300 border-sky-800"
                    >
                      <SelectValue placeholder="Select a forum" />
                    </SelectTrigger>
                    <SelectContent
                      className="bg-stone-300 min-w-56 border-sky-800"
                      position={"popper"}
                    >
                      <SelectItem value="none">- No Parent -</SelectItem>
                      {renderForumOptions(allForums)}
                    </SelectContent>
                  </Select>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
      </form>
      <Field
        orientation="horizontal"
        className="p-4 border-2 border-stone-500 border-t-0 rounded-b-lg"
      >
        <Button
          type="button"
          variant="outline"
          className="border-stone-500"
          onClick={() => form.reset()}
        >
          Reset
        </Button>
        <Button
          type="submit"
          form="create-new-forum"
          className="bg-black text-white"
        >
          Submit
        </Button>
      </Field>
    </div>
  );
}
