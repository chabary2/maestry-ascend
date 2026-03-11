import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, #8B250033 0%, transparent 70%)" }}>
      {/* Blur orbs */}
      <div className="blur-orb w-[500px] h-[500px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4" />
      <div className="blur-orb w-[300px] h-[300px] bg-accent/5 bottom-20 right-10" />

      <div
        ref={ref}
        className={`container mx-auto px-6 text-center max-w-4xl relative z-10 pt-24 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 glow-orange">
          Estruturamos infoprodutores com operações de{" "}
          <span className="text-primary">alta performance</span>
        </h1>

        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos infraestrutura comercial e operacional para especialistas que buscam
          escalabilidade, previsibilidade de receita e eficiência operacional.
        </p>

        <a
          href="https://tally.so/r/68k4do"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-300 interactive"
        >
          Comece agora
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
