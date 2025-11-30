"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex flex-1 items-center justify-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          pathname === routes.home &&
            "bg-accent/30 hover:bg-accent/30! cursor-default",
        )}
      >
        <Link href={routes.home}>Home</Link>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          pathname === routes.about &&
            "bg-accent/30 hover:bg-accent/30! cursor-default",
        )}
      >
        <Link href={routes.about}>About</Link>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          pathname === routes.blog &&
            "bg-accent/30 hover:bg-accent/30! cursor-default",
        )}
      >
        <Link href={routes.blog}>Blog</Link>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          pathname === routes.dashboard &&
            "bg-accent/30 hover:bg-accent/30! cursor-default",
        )}
      >
        <Link href={routes.dashboard}>Dashboard</Link>
      </Button>
    </nav>
  );
};

export default TopNavigation;
