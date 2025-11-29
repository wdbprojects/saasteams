import { routes } from "@/config/routes";
import LoginForm from "@/modules/components/auth/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = async () => {
  return (
    <div>
      <LoginForm />
      <p className="text-muted-foreground text-center text-sm">
        Don&apos;t have an account?{" "}
        <Button variant="link" className="px-1" asChild>
          <Link href={routes.register}>Register</Link>
        </Button>
      </p>
    </div>
  );
};

export default LoginPage;
