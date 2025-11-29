"use client";

import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { CirclePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { toast } from "sonner";
import { registerAction } from "@/_actions/auth-actions";
import { routes } from "@/config/routes";
import { registerSchema, RegisterSchemaType } from "@/schemas/auth-schemas";

const RegisterForm = () => {
  const [pendingRegister, startRegisterTransition] = useTransition();

  const router = useRouter();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });
  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: RegisterSchemaType) => {
    startRegisterTransition(async () => {
      const response = await registerAction(values);
      if (response.success) {
        toast.success(response.message);
        reset();
        router.push(routes.login);
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <div className="flex w-full flex-col gap-6 sm:w-sm md:w-md">
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="register-user" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="gap-6">
              {/* FULL NAME */}
              <Controller
                control={control}
                name="name"
                render={({ field, fieldState }) => {
                  return (
                    <Field className="gap-1">
                      <FieldLabel htmlFor="name">Full Name</FieldLabel>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="off"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs italic"
                        />
                      )}
                    </Field>
                  );
                }}
              />
              {/* EMAIL */}
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => {
                  return (
                    <Field className="gap-1">
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                        autoComplete="off"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs italic"
                        />
                      )}
                    </Field>
                  );
                }}
              />
              {/* PASSWORD */}
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => {
                  return (
                    <Field className="gap-1">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs italic"
                        />
                      )}
                    </Field>
                  );
                }}
              />
              {/* CONFIRM PASSWORD */}
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field, fieldState }) => {
                  return (
                    <Field className="gap-1">
                      <FieldLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FieldLabel>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        autoComplete="off"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          errors={[fieldState.error]}
                          className="text-xs italic"
                        />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
            {/* ACTIONS */}
            <FieldGroup className="mt-8 flex w-full flex-col items-center justify-between gap-2">
              <Button
                size="default"
                className="w-full"
                type="submit"
                variant="default"
                form="register-user"
                disabled={pendingRegister}
              >
                {pendingRegister ? (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Loader2 className="size-3.5 animate-spin" />
                    <span>Pending...</span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center justify-center gap-2">
                    <CirclePlus className="size-3.5" />
                    <span>Register</span>
                  </div>
                )}
              </Button>
              <div className="flex w-full justify-end">
                <Button
                  size="sm"
                  className="text-xs"
                  type="button"
                  variant="link"
                  disabled={pendingRegister}
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset Form
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
