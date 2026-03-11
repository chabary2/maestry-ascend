import { useEffect, useState, useRef } from "react";
import logo from "@/assets/maestry-logo.png";

function MagneticButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.2s ease-out" }}
    >
      {children}
    </button>
  );
}

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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4">
      <nav
        className={`flex items-center justify-between px-6 transition-all duration-500 rounded-full border border-border/40 backdrop-blur-xl ${
          scrolled
            ? "bg-[hsl(var(--base-black)/0.6)] py-2.5 shadow-lg shadow-black/20"
            : "bg-[hsl(var(--base-black)/0.4)] py-3"
        }`}
        style={{ width: "min(900px, 90vw)" }}
      >
        <img src={logo} alt="Maestry Company" className="h-8 w-auto" />
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "Início", id: "hero" },
            { label: "Sobre", id: "diferenciais" },
            { label: "Serviços", id: "frentes" },
          ].map((item) => (
            <MagneticButton
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </MagneticButton>
          ))}
        </div>
        <MagneticButton
          onClick={() => scrollTo("cta")}
          className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300"
        >
          Preencha o formulário
        </MagneticButton>
      </nav>
    </div>
  );
}
