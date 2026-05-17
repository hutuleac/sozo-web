import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "CNC Metal Fabrication Iași, Romania | SOZO PROJECT",
    template: "%s | SOZO PROJECT",
  },
  description:
    "SOZO PROJECT — CNC CO2 laser cutting and press brake bending in Iași, Romania. Mitsubishi ML3015EX, ±0.05mm precision, same-day quotes. ☎ +40 732 034 386",
  alternates: {
    canonical: `${site.url}/en`,
    languages: { "en": "/en", "ro": "/", "x-default": "/" },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: ["ro_RO"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
