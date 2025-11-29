import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import SignOutButton from "@/modules/components/auth/sign-out-button";
import { Badge } from "@/components/ui/badge";

const HeaderMain = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="bg-background fixed top-0 right-0 z-50 flex h-16 w-full items-center justify-between border-b px-2 py-2">
      <div className="container mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* //INFO: MENU & LOGO  & NAV LINKS */}
        <div className="flex flex-shrink-0 items-center gap-2 p-1">
          <Link href={routes.home} className="flex flex-row items-center gap-0">
            <h6 className="text-primary text-xl font-bold tracking-tight">
              Teams
            </h6>
            <h6 className="text-foreground text-xl font-bold tracking-tight">
              Work
            </h6>
          </Link>
        </div>

        {/* USER ROLE */}
        {session && (
          <div className="flex flex-1 items-center justify-end gap-2">
            <span>Signed in as: </span>
            <Badge variant="default">{session?.user.role}</Badge>
          </div>
        )}

        {/* //INFO: BUTTONS & AUTH */}
        <div className="flex flex-shrink-0 items-center gap-2 p-1">
          <Button variant="outline" size="sm" asChild>
            <Link href={routes.dashboard}>Dashboard</Link>
          </Button>
          {!session ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={routes.login}>Login</Link>
            </Button>
          ) : (
            <SignOutButton />
          )}
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
