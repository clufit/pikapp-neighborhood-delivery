import { useEffect, useState } from "react";
import { Instagram, Facebook, Linkedin, Menu, X } from "lucide-react";
import logo from "@/assets/pikapp_logo.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#rubros", label: "Rubros" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];
const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-xl px-5 py-3 transition-all duration-500 ${scrolled ? "bg-cocoa/95 shadow-2xl" : "bg-cocoa/90"}`}>
          <a href="#inicio" aria-label="Pikapp inicio"><img src={logo.url} alt="Pikapp" className="h-6 w-auto md:h-7" /></a>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-sm text-cream transition hover:text-highlight">{l.label}</a></li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass grid h-9 w-9 place-items-center rounded-full text-cream transition hover:bg-highlight hover:text-cocoa">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Abrir menú" className="glass h-10 w-10 rounded-lg text-cream hover:bg-highlight hover:text-cocoa lg:hidden"><Menu className="h-5 w-5" /></Button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] bg-gradient-dark transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)] lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="relative flex h-full flex-col px-6 pb-10 pt-7">
          <div className="flex items-center justify-between">
            <img src={logo.url} alt="Pikapp" className="h-6 w-auto" />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="glass h-10 w-10 rounded-lg text-cream hover:bg-highlight hover:text-cocoa"><X className="h-5 w-5" /></Button>
          </div>
          <ul className="mt-16 flex flex-1 flex-col gap-4">
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${200 + i * 80}ms` : "0ms" }} className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-4xl font-bold text-cream hover:text-highlight">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} className="glass grid h-12 w-12 place-items-center rounded-full text-cream"><Icon className="h-5 w-5" /></a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
