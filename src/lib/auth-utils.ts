import { redirect } from "next/navigation";
import { auth } from "./auth";
import { routes } from "@/config/routes";
import { headers } from "next/headers";

export const requireAuth = async (role: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session || session.user.role !== role) {
    redirect(routes.home);
  }
  return session;
};

export const requireUnauth = async (path: keyof typeof routes) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    redirect(routes[path]);
  }
  return session;
};
