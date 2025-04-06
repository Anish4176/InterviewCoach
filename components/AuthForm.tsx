"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const AuthForm = ({ type }: { type: "sign-up" | "sign-in" }) => {
  const router = useRouter();
  const formSchema = z.object({
    name: type === "sign-up" ? z.string().min(3).trim() : z.string().optional(),
    email: z.string().email().trim(),
    password: z.string().min(6).max(20).trim(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log(values);
        toast.success("Account created successfully.");
        router.push("/sign-in");
      } else if (type === "sign-in") {
        console.log(values);
        toast.success("Logged in successfully.");
        router.push("/");
      }
    } catch (err: any) {
      console.log(err);
      toast.error("Something went wrong.", {
        description: err,
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 form flex flex-col max-w-[500px] w-full outline-2 px-4 md:px-6 py-10 rounded-xl"
      >
        <Link href="/" className="flex items-center space-x-2 mx-auto">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h2>InterviewCoach</h2>
        </Link>

        {type === "sign-up" && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="label">Full Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="input"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">Your Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="btn" type="submit">
          {type === "sign-in" ? "Sign In" : "Create an account"}
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          {type === "sign-in" ? (
            <span>
              Don't have an account? <Link href="/sign-up">Sign Up</Link>
            </span>
          ) : (
            <span>
              Already have an account? <Link href="/sign-in">Sign In</Link>
            </span>
          )}
        </p>
      </form>
    </Form>
  );
};

export default AuthForm;
