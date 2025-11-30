import DarkMode from "@/components/shared/dark-mode";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import SignOutButton from "@/modules/components/auth/sign-out-button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import TopNavigation from "@/modules/components/shared/top-navigation";

const HeaderBlog = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="bg-background fixed top-0 right-0 z-50 flex h-16 w-full items-center justify-between border-b px-2 py-2">
      <div className="mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* //INFO: MENU & LOGO  & NAV LINKS */}
        <div className="flex flex-1 flex-shrink-0 items-center gap-2 p-1">
          <SidebarTrigger />
          <Link href={routes.home} className="flex flex-row items-center gap-2">
            <Image
              src="/logo.svg"
              alt="SassTeam logo"
              width={40}
              height={40}
              priority
              className="size-5"
            />
            <div className="flex flex-row items-center gap-0">
              <h6 className="text-primary text-xl font-bold tracking-tight">
                Saas
              </h6>
              <h6 className="text-foreground text-xl font-bold tracking-tight">
                Teams
              </h6>
            </div>
          </Link>
        </div>
        {/* // NAV LINKS */}
        <TopNavigation />

        {/* //INFO: BUTTONS & AUTH */}
        <div className="flex flex-1 flex-shrink-0 items-center justify-end gap-2 p-1">
          {/* USER ROLE */}
          {session && (
            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="text-xs">Signed in as: </span>
              <Badge variant="default">{session?.user.role}</Badge>
            </div>
          )}
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

export default HeaderBlog;
