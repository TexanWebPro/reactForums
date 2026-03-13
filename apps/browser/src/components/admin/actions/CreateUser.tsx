import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { userMutations } from "@/features/users/users.query";

const formSchema = z.object({
  username: z
    .string()
    .min(5, "Username must be at least 5 characters.")
    .max(32, "Username must be at most 32 characters."),
  email: z
    .string()
    .email()
    .min(5, "Email must be at least 5 characters.")
    .max(32, "Email must be at most 32 characters."),
});

export function CreateUser() {
  const createUserMutation = useMutation({
    ...userMutations.create(),
    onSuccess: (user) => {
      toast.success(
        `You've created a new user: ${user.username}, with the email ${user.email}`,
        {
          position: "bottom-right",
          classNames: {
            content: "flex flex-col gap-2",
          },
          style: {
            "--border-radius": "calc(var(--radius)  + 4px)",
          } as React.CSSProperties,
        },
      );
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
      username: "",
      email: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await createUserMutation.mutateAsync({
        username: value.username,
        email: value.email,
        password: "pleaseClap",
        registrationIp: "000.000.000",
        lastIp: "000.000.000.000",
      });
    },
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardContent className="">
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="username"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Username"
                      autoComplete="off"
                      className="placeholder:text-slate-700 border-2 border-sky-800"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Email"
                      autoComplete="off"
                      className="placeholder:text-slate-700 border-2 border-sky-800"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-t-0">
        <Field orientation="horizontal">
          <Button
            type="button"
            variant="outline"
            className="border-black"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            form="bug-report-form"
            className="bg-black text-white"
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
