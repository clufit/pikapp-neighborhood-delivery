import { useState } from "react";
import { ArrowUpRight, ChartNoAxesCombined, Settings2, BookOpen, Truck, Users, MapPin, Package, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import sales from "@/assets/pikapp-panel-ventas.png.asset.json";
import configuration from "@/assets/pikapp-panel-configuracion.png.asset.json";
import phone from "@/assets/pikapp-product-phone.png.asset.json";

const views = [
  { id: "ventas", label: "Ventas y cobros", Icon: ChartNoAxesCombined, image: sales, alt: "Panel de Pikapp con resumen de ventas, cobros y evolución de comisiones", title: "Los números, a la vista.", text: "Consultá la evolución de las ventas, los cobros y los saldos desde un mismo lugar." },
  { id: "configuracion", label: "Configuración", Icon: Settings2, image: configuration, alt: "Pantalla de configuración de Pikapp con tarifa de servicio y ejemplo de aplicación", title: "Todo bajo control.", text: "Un panel claro para consultar y administrar la configuración de la plataforma." },
  { id: "catalogo", label: "Catálogo", Icon: BookOpen, image: null, alt: "", title: "Tu oferta, a tu manera.", text: "Presentá tus productos con fotos, opciones y toda la información que tus clientes necesitan." },
  { id: "envios", label: "Envíos", Icon: Truck, image: null, alt: "", title: "Vos elegís cómo repartir.", text: "Organizá la logística de tu comercio y trabajá con tu propia cadetería." },
  { id: "clientes", label: "Clientes", Icon: Users, image: null, alt: "", title: "Más cerca de tus clientes.", text: "Conocé a quienes compran en tu comercio y acompañá cada pedido desde un mismo lugar." },
];

export function MerchantFeatures() {
  const [active, setActive] = useState(0);
  const current = views[active] ?? views[0];
  if (!current) return null;
  return (
    <section id="funcionalidades" className="merchant-section relative overflow-hidden bg-cocoa text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28 md:pt-14">
        <div className="grid gap-6 md:grid-cols-2 md:gap-20">
          <div><p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">Pikapp para comercios</p><h2 className="mt-4 max-w-lg text-4xl leading-[1.12] md:text-5xl">Tus propias condiciones de logística.</h2></div>
          <div className="md:pt-7"><p className="max-w-lg text-lg leading-relaxed text-cream/70">Tu negocio no se detiene. Tené una visión clara de lo que pasa, acompañá cada venta y tomá decisiones con toda la información a mano.</p><Button asChild variant="link" className="mt-4 h-auto p-0 text-highlight"><a href="#contacto">Sumá tu comercio <ArrowUpRight /></a></Button></div>
        </div>
        <div role="tablist" aria-label="Funcionalidades de Pikapp" className="mt-10 flex flex-wrap gap-2 md:mt-12">
          {views.map(({ id, label, Icon }, index) => <Button key={id} id={`feature-tab-${id}`} role="tab" aria-selected={active === index} aria-controls="feature-panel" variant="ghost" onClick={() => setActive(index)} className={`h-10 rounded-lg px-4 hover:bg-cream/10 hover:text-cream ${active === index ? "bg-highlight/15 text-highlight" : "text-cream/65"}`}><Icon />{label}</Button>)}
        </div>
        <div id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${current.id}`} className="merchant-showcase relative mt-8">
          <div className="merchant-screen overflow-hidden rounded-lg border border-cream/15 bg-background">
            {current.image ? <img key={current.id} src={current.image.url} alt={current.alt} width={active === 0 ? 1693 : 1826} height={768} loading="lazy" className="merchant-screenshot block w-full" /> : (
              <div className="flex min-h-[420px] items-center justify-center bg-background p-6 text-foreground md:min-h-[470px] md:p-10">
                {current.id === "catalogo" ? <img src={phone.url} alt="Producto y opciones en el catálogo digital de Pikapp" width={334} height={663} className="h-[370px] w-auto object-contain" /> : <div className="w-full max-w-lg">
                  <current.Icon className="mb-5 h-10 w-10 text-primary" /><h3 className="mb-7 text-3xl">{current.id === "envios" ? "Tu logística" : "Tus clientes"}</h3>
                  {(current.id === "envios" ? [{ Icon: Package, title: "Pedidos", text: "Cada envío, organizado" }, { Icon: Truck, title: "Cadetería propia", text: "Tu equipo de reparto" }, { Icon: MapPin, title: "Delivery o retiro", text: "Las opciones de tu comercio" }] : [{ Icon: Users, title: "Clientes de tu comercio", text: "Una relación directa" }, { Icon: BookOpen, title: "Historial de pedidos", text: "Conocé lo que eligen" }, { Icon: Check, title: "Atención personalizada", text: "Cada compra cuenta" }]).map(({ Icon, title, text }) => <div key={title} className="flex items-center gap-4 border-t border-border py-5"><Icon className="h-6 w-6 shrink-0 text-primary" /><div><p className="font-bold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}
                </div>}
              </div>
            )}
          </div>
          <div className="merchant-caption glass relative z-10 max-w-sm rounded-lg p-6 md:absolute md:-bottom-6 md:left-0 md:p-7">
            <current.Icon className="mb-5 h-7 w-7 text-primary" /><h3 className="text-2xl">{current.title}</h3><p className="mt-3 text-sm leading-relaxed text-cream/65">{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}