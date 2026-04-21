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
      style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, #8B250033 0%, transparent 70%)" }}
    >
      <div ref={parallaxRef} className="absolute inset-0" style={{ transform: `translateY(${offset}px)` }}>
        <div className="blur-orb w-[500px] h-[500px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4" />
        <div className="blur-orb w-[300px] h-[300px] bg-accent/5 bottom-20 right-10" />
      </div>

      <div ref={ref} className="container mx-auto px-6 text-center max-w-5xl relative z-10 pt-24">
        <AnimatedHeading
          as="h1"
          lines={["Entramos na sua operação.", "Estruturamos o produto, o comercial e o conteúdo."]}
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 glow-orange"
        />

        <p
          className={`font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trabalhamos com especialistas que têm conhecimento real para ensinar.
          O produto e o sistema de vendas, a gente constrói junto.
        </p>

        <a
          href="https://tally.so/r/68k4do"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-1000 delay-1000 interactive ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Fale com a gente
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
