import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useParallax } from "@/hooks/use-parallax";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { ref, isVisible } = useScrollFade();
  const { ref: parallaxRef, offset } = useParallax(0.15);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={parallaxRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <div className="blur-orb w-[500px] h-[500px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4" />
        <div className="blur-orb w-[300px] h-[300px] bg-accent/5 bottom-20 right-10" />
      </div>

      <div ref={ref} className="container mx-auto px-6 text-center max-w-5xl relative z-10 pt-24">
        <AnimatedHeading
          as="h1"
          lines={["Estruturamos sua operação."]}
          className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-10 text-gradient-warm"
        />

        <p
          className={`font-body text-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Construímos o produto, implementamos o comercial e as estratégias de conteúdo.
          Trabalhamos com especialistas que têm conhecimento para ensinar.
          O produto e o sistema de vendas, a gente constrói junto.
        </p>

        <a
          href="https://tally.so/r/68k4do"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center gap-3 font-heading font-bold text-base px-9 py-4 rounded-xl transition-all duration-1000 delay-1000 interactive overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            background: "linear-gradient(135deg, hsl(34 91% 50%) 0%, hsl(22 85% 38%) 100%)",
            color: "hsl(var(--primary-foreground))",
            boxShadow: "0 0 0 1px hsl(38 90% 60% / 0.4) inset, 0 10px 30px -10px hsl(34 91% 47% / 0.6), 0 0 60px -20px hsl(22 85% 45% / 0.5)",
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative">Fale com a gente</span>
          <ArrowRight className="w-5 h-5 relative transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
