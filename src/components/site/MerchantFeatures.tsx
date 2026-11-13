import { useState } from "react";
import { ArrowUpRight, ChartNoAxesCombined, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import sales from "@/assets/pikapp-panel-ventas.png.asset.json";
import configuration from "@/assets/pikapp-panel-configuracion.png.asset.json";

const views = [
  { id: "ventas", label: "Ventas y cobros", Icon: ChartNoAxesCombined, image: sales, alt: "Panel de Pikapp con resumen de ventas, cobros y evolución de comisiones", title: "Los números, a la vista.", text: "Consultá la evolución de las ventas, los cobros y los saldos desde un mismo lugar." },
  { id: "configuracion", label: "Configuración", Icon: Settings2, image: configuration, alt: "Pantalla de configuración de Pikapp con tarifa de servicio y ejemplo de aplicación", title: "Todo bajo control.", text: "Un panel claro para consultar y administrar la configuración de la plataforma." },
];

export function MerchantFeatures() {
  const [active, setActive] = useState(0);
  const current = views[active] ?? views[0];
  if (!current) return null;
  return (
    <section id="funcionalidades" className="merchant-section relative overflow-hidden bg-cocoa text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28 md:pt-14">
        <div className="grid gap-6 md:grid-cols-2 md:gap-20">
          <div><p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">Pikapp para comercios</p><h2 className="mt-4 max-w-lg text-4xl leading-[1.12] md:text-5xl">Gestioná y aumentá<br className="hidden lg:block" /> tus ventas.</h2></div>
          <div className="md:pt-7"><p className="max-w-lg text-lg leading-relaxed text-cream/70">Tu negocio no se detiene. Tené una visión clara de lo que pasa, acompañá cada venta y tomá decisiones con toda la información a mano.</p><Button asChild variant="link" className="mt-4 h-auto p-0 text-primary"><a href="#contacto">Sumá tu comercio <ArrowUpRight /></a></Button></div>
        </div>
        <div role="tablist" aria-label="Funcionalidades de Pikapp" className="mt-10 flex flex-wrap gap-2 md:mt-12">
          {views.map(({ id, label, Icon }, index) => <Button key={id} id={`feature-tab-${id}`} role="tab" aria-selected={active === index} aria-controls="feature-panel" variant="ghost" onClick={() => setActive(index)} className={`h-10 rounded-full px-4 hover:bg-cream/10 hover:text-cream ${active === index ? "bg-cream/10 text-cream" : "text-cream/50"}`}><Icon />{label}</Button>)}
        </div>
        <div id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${current.id}`} className="merchant-showcase relative mt-8">
          <div className="merchant-screen overflow-hidden rounded-lg border border-cream/15 bg-background">
            <img key={current.id} src={current.image.url} alt={current.alt} width={active === 0 ? 1693 : 1826} height={768} loading="lazy" className="merchant-screenshot block w-full" />
          </div>
          <div className="merchant-caption glass relative z-10 max-w-sm rounded-lg p-6 md:absolute md:-bottom-6 md:left-0 md:p-7">
            <current.Icon className="mb-5 h-7 w-7 text-primary" /><h3 className="text-2xl">{current.title}</h3><p className="mt-3 text-sm leading-relaxed text-cream/65">{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}