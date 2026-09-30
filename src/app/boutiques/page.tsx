import { redirect } from "next/navigation";

/** Old boutique / fitting URL — site is a brand card, contact only. */
export default function BoutiquesRedirect() {
  redirect("/contact");
}
