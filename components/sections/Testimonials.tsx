import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Recomand cu toată încrederea SoZo Project! Profesioniști până la cel mai mic detaliu. Au realizat pentru Depo-Box o firmă luminoasă impecabilă — design curat, execuție de nota 10. Se vede pasiunea în fiecare detaliu.",
    author: "Simona Gireada",
    role: "Semnalistică luminoasă · Depo-Box",
  },
  {
    quote:
      "Am avut nevoie de piese din oțel și aluminiu și s-au ocupat de tot: proiectare CAD, tăiere laser CNC și îndoire. Au refăcut inclusiv 3 piese uzate prin reverse engineering — identice cu originalele. Comunicare excelentă, livrare fără bătăi de cap.",
    author: "Monica",
    role: "Tăiere laser & reverse engineering",
  },
  {
    quote:
      "Am lucrat cu ei pe trei proiecte diferite. Tot ce pot spune e: profesionalism și seriozitate. Creativi, punctuali și muncitori.",
    author: "Annamaria Branca",
    role: "Client recurent · 3 proiecte",
  },
  {
    quote:
      "Foarte pricepuți pe proiectare și execuție prototipuri. Fac in-house tot ce ține de proiectare, tăiere laser și îndoire CNC — un avantaj real față de ce am găsit în piață.",
    author: "Star Automation",
    role: "Prototipuri industriale",
  },
  {
    quote:
      "Am debitat 2 plăci de metal pentru un utilaj și sunt foarte mulțumit de rezultat. Oameni care țin cont de client și te ajută cu entuziasm. Recomand.",
    author: "Iustin Denis Simion",
    role: "Debitare tablă pentru utilaj",
  },
  {
    quote:
      "Oameni dedicați și profesioniști, atât pentru proiecte mari de serie, cât și pentru piese personalizate care necesită multă atenție. Felicitări!",
    author: "Otilia Chitic",
    role: "Producție serie & piese personalizate",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 stele">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader eyebrow="Testimoniale" heading="Ce spun clienții noștri" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-bg-elevated border border-border rounded-lg p-7 flex flex-col"
            >
              <Stars />
              <blockquote className="text-text-primary leading-relaxed mb-5 flex-1">
                „{t.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t border-border-subtle pt-4">
                <div className="text-text-primary font-medium text-sm">{t.author}</div>
                <div className="text-text-muted text-xs mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-8">
          Recenzii verificate · Google Business Profile
        </p>
      </div>
    </section>
  );
}
