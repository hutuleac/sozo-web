import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Servicii prelucrare metal CNC: debitare laser și prelucrare abkant.",
  alternates: { canonical: "/servicii" },
};

export default function ServiciiOverview() {
  redirect("/#servicii");
}
