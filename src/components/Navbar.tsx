import { useEffect, useState } from "react";
import logo from "@/assets/maestry-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <img src={logo} alt="Maestry Company" className="h-9 w-auto" />
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", id: "hero" },
            { label: "Sobre", id: "diferenciais" },
            { label: "Serviços", id: "frentes" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors duration-300 interactive"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("cta")}
          className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all duration-300 interactive"
        >
          Preencha o formulário
        </button>
      </div>
    </nav>
  );
}
