import { useEffect, useRef, useState } from "react";
import { Store, ShoppingCart, Bike, CreditCard, Check } from "lucide-react";

const steps = [
  { Icon: Store, title: "Seleccioná tu local", text: "Explorá comercios cerca tuyo: restaurantes, farmacias y almacenes.", chip: "Rock&Feller's · 4.8 ★", items: ["Rock&Feller's", "Billy Lomito", "Hanks"] },
  { Icon: ShoppingCart, title: "Sumá productos al carrito", text: "Armá tu pedido en segundos. Precios reales del local, sin recargos escondidos.", chip: "3 productos · $27.300", items: ["Ojo de bife Rock ×1", "Grilled chicken ×1", "Cheesecake ×1"] },
  { Icon: Bike, title: "Elegí delivery o retiro", text: "Que te lo lleven a casa o pasá a buscarlo. Vos decidís cómo y cuándo.", chip: "Llega en 15–25 min", items: ["Delivery a domicilio", "Retiro en el local", "Programar pedido"] },
  { Icon: CreditCard, title: "Pagá con Mercado Pago", text: "Pago seguro, rápido y con la app que ya usás todos los días.", chip: "Pago aprobado", items: ["Mercado Pago", "Dinero en cuenta", "Tarjeta guardada"] },
];

export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -r.top / total)));
    };
    on(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  const active = Math.min(3, Math.floor(progress * 4));
  const s = steps[active];
  if (!s) return null;

  return (
    <section id="como-funciona" ref={ref} className="relative bg-cocoa text-cream" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-4 font-mono text-xs tracking-[0.2em] text-cream/50">
              <span>0{active + 1} / 04</span>
              <span className="h-px flex-1 bg-cream/15"><span className="block h-full bg-primary transition-all duration-300" style={{ width: `${progress * 100}%` }} /></span>
              <span className="text-primary">CÓMO FUNCIONA</span>
            </div>
            <h2 key={active} className="mt-8 text-4xl leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-500 md:text-6xl">{s.title}.</h2>
            <p key={`p${active}`} className="mt-5 max-w-md text-lg text-cream/65 animate-in fade-in duration-700">{s.text}</p>
            <ul className="mt-8 hidden space-y-3 md:block">
              {steps.map((st, i) => (
                <li key={st.title} className={`flex items-center gap-3 text-sm transition ${i === active ? "text-cream" : "text-cream/35"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${i <= active ? "bg-primary" : "bg-cream/30"}`} />{st.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center">
            <div className="glass relative w-full max-w-sm rounded-[2rem] p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary shadow-glow"><s.Icon className="h-6 w-6 text-primary-foreground" /></span>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-cream/50">PASO 0{active + 1}</p>
                  <p className="font-bold">{s.title}</p>
                </div>
              </div>
              <div key={active} className="mt-6 space-y-3">
                {s.items.map((it, i) => (
                  <div key={it} style={{ animationDelay: `${i * 90}ms` }} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm animate-in fade-in slide-in-from-right-6 fill-mode-both duration-500 ${i === 0 ? "border-primary/60 bg-primary/15" : "border-cream/10 bg-cream/5"}`}>
                    {it}{i === 0 && <Check className="h-4 w-4 text-primary" />}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-cream/10 pt-4 font-mono text-[11px] tracking-[0.15em] text-cream/60">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />{s.chip.toUpperCase()}
              </div>
            </div>
            <div className="glass absolute -bottom-6 -left-2 hidden rounded-2xl px-4 py-3 text-sm animate-float md:block">Sin comisiones extra 🧡</div>
          </div>
        </div>
      </div>
    </section>
  );
}
