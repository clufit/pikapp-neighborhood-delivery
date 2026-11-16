import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import phone from "@/assets/pikapp-product-phone.png.asset.json";

export function ProductShowcase() {
  return (
    <section id="productos" className="overflow-hidden bg-cocoa text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div>
          <p className="text-sm font-bold uppercase text-primary">Atraé</p>
          <h2 className="mt-5 text-4xl leading-[1.08] md:text-6xl">Tus productos merecen <span className="text-primary">ser protagonistas.</span></h2>
          <div className="my-8 h-px w-2/3 bg-primary" />
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">Un <strong className="text-cream">catálogo digital</strong> pensado para que tus clientes descubran lo que ofrecés, exploren tus productos y encuentren nuevas razones para comprar.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">Presentá tu oferta de manera visual, atractiva y organizada, convirtiendo cada producto en una <strong className="text-cream">oportunidad de venta.</strong></p>
          <Button asChild variant="link" className="mt-7 h-auto p-0 text-primary"><a href="#contacto">Sumá tu comercio <ArrowUpRight /></a></Button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={phone.url} alt="Catálogo de Pikapp con BBQ Ribs, fotografía del producto y opciones de acompañamiento" width={334} height={663} loading="lazy" className="h-auto w-full max-w-[300px] object-contain md:max-w-[334px]" />
        </div>
      </div>
    </section>
  );
}