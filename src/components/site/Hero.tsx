import { ArrowRight, Bike, MapPin, Package, Rocket, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="delivery-hero relative isolate overflow-hidden bg-primary text-cocoa">
      <div className="delivery-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-delivery-elements pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="delivery-object delivery-rocket"><Rocket /><span>A tu ritmo</span></div>
        <div className="delivery-object delivery-package"><Package /><span>Tu negocio</span></div>
        <div className="delivery-object delivery-bike"><Bike /></div>
        <div className="delivery-object delivery-pin"><MapPin /></div>
        <div className="delivery-object delivery-truck"><Truck /></div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-36 text-center md:pb-28 md:pt-32">
        <p className="mb-8 text-xs font-medium uppercase text-cocoa/80">Tu comercio. Tus condiciones. Pikapp.</p>
        <div className="hero-title-frame relative w-full max-w-4xl px-2 py-5 md:px-8 md:py-6">
          <span className="frame-corner corner-tl" aria-hidden="true" /><span className="frame-corner corner-tr" aria-hidden="true" />
          <span className="frame-corner corner-bl" aria-hidden="true" /><span className="frame-corner corner-br" aria-hidden="true" />
          <h1 className="text-[42px] leading-[1.08] md:text-6xl">Mandá tu delivery,<br className="hidden md:block" /> sin regalarle tu negocio<br /><span className="text-highlight">a nadie.</span></h1>
        </div>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-cocoa/85 md:text-lg">Impone tus condiciones de logística y cadetería propia. Organizá tus envíos, elegí cómo repartir y mantené el control de tu negocio. Con Pikapp, vos decidís.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 rounded-lg bg-highlight px-6 text-base font-bold text-highlight-foreground hover:bg-highlight/85"><a href="#contacto">Sumá tu comercio <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="ghost" className="h-12 rounded-lg border border-cocoa/30 px-6 text-base text-cocoa hover:bg-cocoa/10 hover:text-cocoa"><a href="#como-funciona">Cómo funciona</a></Button>
        </div>
      </div>
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 md:h-36" aria-hidden="true" />
    </section>
  );
}