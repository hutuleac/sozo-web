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
    street: "Strada Aviației 9",
    city: "Iași",
    postal: "700383",
    country: "România",
    full: "Strada Aviației 9, Iași 700383, România",
  },
  geo: { lat: 47.1553776, lng: 27.6341905 },
  maps: "https://maps.app.goo.gl/xGuMCVnRpMgbrjmf8",
  hours: "Luni–Sâmbătă, 07:00–20:00",
  socials: {
    facebook: "https://facebook.com/61569075448456",
  },
  defaultLocale: "ro" as const,
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bună ziua! Vă scriu de pe sozoproject.eu. Aș dori o ofertă pentru: "
)}`;
export const telLink = `tel:${site.phone}`;
export const mailLink = `mailto:${site.email}`;
export const mapsLink = site.maps;
