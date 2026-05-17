export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; text: string }
  | { type: "qa"; q: string; a: string }
  | { type: "internal"; href: string; label: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified?: string; // ISO yyyy-mm-dd — defaults to datePublished if absent
  readMin: number;
  hero: string; // image URL
  heroAlt: string;
  category: string;
  body: Block[];
  faqs?: { q: string; a: string }[];
};
