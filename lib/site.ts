export const site = {
  name: "SOZO PROJECT",
  legalName: "SC SOZO PROJECT SRL",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sozoproject.eu",
  cui: "RO44844133",
  reg: "J22/2957/2021",
  phone: process.env.NEXT_PUBLIC_PHONE || "+40732034386",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+40 732 034 386",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "40732034386",
  email: "contact@sozoproject.eu",
  address: {
    street: "Strada Aurel Vlaicu 77",
    city: "Iași",
    postal: "707252",
    country: "România",
    full: "Strada Aurel Vlaicu 77, Iași 707252, România",
  },
  legalAddress: "Șos. Voinești, nr. 46L, Mun. Iași, Jud. Iași",
  geo: { lat: 47.1553776, lng: 27.6341905 },
  maps: "https://maps.app.goo.gl/xGuMCVnRpMgbrjmf8",
  hours: "Luni–Sâmbătă, 07:00–20:00",
  socials: {
    facebook: "https://facebook.com/61569075448456",
    linkedin: "https://www.linkedin.com/company/sozo-project/",
  },
  defaultLocale: "ro" as const,
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bună ziua! Vă scriu de pe sozoproject.eu. Aș dori o ofertă pentru: ")}`;
export const whatsappLinkEN = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello! I'm writing from sozoproject.eu. I would like a quote for: ")}`;
export const telLink = `tel:${site.phone}`;
export const mailLink = `mailto:${site.email}`;
export const mapsLink = site.maps;
// Embed URL pinned to the GBP listing via place ID (0x40cafb0007d725c5:0xcd3918a2334dce31)
export const mapsEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706!2d27.6341905!3d47.1553776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb0007d725c5%3A0xcd3918a2334dce31!2sSoZo%20PROJECT%20-%20Prelucrare%20Metal%20LASER%20si%20Abkant%20CNC!5e0!3m2!1sro!2sro!4v1716000000000!5m2!1sro!2sro";
