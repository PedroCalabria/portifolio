// Middleware handles redirecting / → /en
// This file is a fallback that should never be reached in normal operation.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
