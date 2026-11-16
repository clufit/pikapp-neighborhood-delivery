import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Apple, Play } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MerchantFeatures } from "@/components/site/MerchantFeatures";
import { Steps } from "@/components/site/Steps";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/pikapp_logo.png.asset.json";
import gastro from "@/assets/rubro-gastro.jpg";
import farmacia from "@/assets/rubro-farmacia.jpg";
import almacen from "@/assets/rubro-almacen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
       { title: "Pikapp — Mandá tu delivery" },
      { name: "description", content: "Delivery para gastronomía, farmacias y almacenes sin comisiones abusivas. Pagá con Mercado Pago." },
       { property: "og:title", content: "Pikapp — Mandá tu delivery" },
      { property: "og:description", content: "Delivery sin comisiones abusivas para comercios de tu ciudad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const rubros = [
  { img: gastro, title: "Gastronomía", text: "Restaurantes, hamburgueserías, cafés y dark kitchens.", tag: "+320 locales" },
  { img: farmacia, title: "Farmacias", text: "Medicamentos, perfumería y cuidado personal en minutos.", tag: "+80 locales" },
  { img: almacen, title: "Almacenes", text: "Tu almacén de siempre, ahora a un toque de distancia.", tag: "+150 locales" },
];
const marcas = ["Rock&Feller's", "Billy Lomito", "Gianni Cocino", "Hanks", "B de Barrio", "Groovin"];
const faqs = [
  { q: "¿Cuánto cobra Pikapp de comisión?", a: "Trabajamos con una tarifa fija y transparente, muy por debajo de las apps tradicionales. Sin letra chica ni cargos sorpresa." },
  { q: "¿Puedo usar mis propios repartidores?", a: "Sí. Podés repartir con tu equipo, usar la red de Pikapp o habilitar retiro en el local." },
  { q: "¿Cómo cobro mis ventas?", a: "Los pagos se procesan con Mercado Pago y el dinero se acredita directamente en tu cuenta." },
  { q: "¿Cuánto tarda en estar activo mi comercio?", a: "En menos de 48 horas cargamos tu menú o catálogo y empezás a recibir pedidos." },
  { q: "¿Necesito equipamiento especial?", a: "No. Gestionás todo desde el celular o la computadora que ya tenés." },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex w-fit self-start items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{children}</span>;
}

function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" className="glass flex items-center gap-3 rounded-2xl bg-cocoa/60 px-5 py-3 text-cream transition hover:-translate-y-0.5 hover:bg-cocoa">
        <Apple className="h-7 w-7" /><span className="text-left leading-tight"><span className="block text-[10px] text-cream/60">Descargala en</span><span className="font-bold">App Store</span></span>
      </a>
      <a href="#" className="glass flex items-center gap-3 rounded-2xl bg-cocoa/60 px-5 py-3 text-cream transition hover:-translate-y-0.5 hover:bg-cocoa">
        <Play className="h-7 w-7 fill-current" /><span className="text-left leading-tight"><span className="block text-[10px] text-cream/60">Disponible en</span><span className="font-bold">Google Play</span></span>
      </a>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  return (
    <div className="overflow-x-clip">
      <Navbar />

      <Hero />
      <MerchantFeatures />

      {/* RUBROS */}
      <section id="rubros" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionTag>Rubros</SectionTag>
            <h2 className="mt-5 max-w-xl text-4xl md:text-6xl">Todo lo que necesitás.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Desde la cena del viernes hasta el remedio de último momento. Un solo lugar, comercios reales.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {rubros.map((r) => (
            <article key={r.title} className="group relative h-[460px] overflow-hidden rounded-3xl">
              <img src={r.img} alt={r.title} loading="lazy" width={896} height={1152} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/20 to-transparent" />
              <span className="glass absolute left-5 top-5 rounded-full px-3 py-1 text-xs text-cream">{r.tag}</span>
              <div className="glass absolute inset-x-4 bottom-4 rounded-2xl p-5 text-cream">
                <div className="flex items-center justify-between"><h3 className="text-2xl">{r.title}</h3><span className="grid h-9 w-9 place-items-center rounded-full bg-primary transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4 text-primary-foreground" /></span></div>
                <p className="mt-2 text-sm text-cream/75">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Steps />
      <ProductShowcase />

      {/* MARCAS */}
      <section className="py-20">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Marcas que confían en Pikapp</p>
        <div className="fade-x mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee gap-14">
            {[...marcas, ...marcas].map((m, i) => (
              <span key={i} className="whitespace-nowrap text-2xl font-bold tracking-tight text-cocoa/40 transition hover:text-primary md:text-3xl">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionTag>FAQ</SectionTag>
          <h2 className="mt-5 text-4xl md:text-5xl">Preguntas frecuentes.</h2>
          <p className="mt-4 text-muted-foreground">¿Te quedó alguna duda? Escribinos y te respondemos en el día.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="glass-light rounded-2xl border-b-0 px-6 shadow-sm">
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CONTACTO + DESCARGA */}
      <section id="contacto" className="px-4 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary p-8 md:p-14">
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div className="text-primary-foreground">
              <h2 className="text-4xl md:text-6xl">Sumá tu comercio a Pikapp.</h2>
              <p className="mt-5 max-w-md text-lg text-primary-foreground/85">Dejanos tus datos y un asesor te contacta. ¿Querés pedir? Descargá la app.</p>
              <div className="mt-10"><StoreButtons /></div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-light rounded-3xl p-6 shadow-2xl md:p-8">
              {sent ? (
                <div className="grid h-full min-h-72 place-items-center text-center"><div><p className="text-3xl font-bold">¡Gracias! 🧡</p><p className="mt-2 text-muted-foreground">Te contactamos muy pronto.</p></div></div>
              ) : (
                <div className="space-y-4">
                  {[{ n: "nombre", l: "Nombre", t: "text" }, { n: "comercio", l: "Nombre del comercio", t: "text" }, { n: "email", l: "Email", t: "email" }, { n: "tel", l: "Teléfono", t: "tel" }].map((f) => (
                    <label key={f.n} className="block">
                      <span className="text-sm font-medium">{f.l}</span>
                      <input required name={f.n} type={f.t} maxLength={120} className="mt-1.5 w-full rounded-xl border border-input bg-card/70 px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                    </label>
                  ))}
                  <label className="block">
                    <span className="text-sm font-medium">Rubro</span>
                    <select name="rubro" className="mt-1.5 w-full rounded-xl border border-input bg-card/70 px-4 py-3 outline-none focus:border-primary">
                      <option>Gastronomía</option><option>Farmacia</option><option>Almacén</option><option>Otro</option>
                    </select>
                  </label>
                  <Button type="submit" className="h-auto w-full rounded-xl bg-cocoa py-4 font-bold text-cream transition hover:bg-cocoa-soft">Quiero sumarme</Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cocoa text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo.url} alt="Pikapp" className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-cream/60">La app de delivery que no se queda con tu negocio. Hecha en Rosario, para todo el país.</p>
          </div>
          <div>
            <p className="font-bold">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li><a href="#rubros" className="hover:text-primary">Rubros</a></li>
              <li><a href="#como-funciona" className="hover:text-primary">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li>hola@pikapp.com.ar</li><li>Instagram · @pikapp</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">© {new Date().getFullYear()} Pikapp. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
