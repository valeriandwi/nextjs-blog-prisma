export { auth as middleware } from "@/app/lib/auth/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
