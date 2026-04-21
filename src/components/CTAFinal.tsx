import { useScrollFade } from "@/hooks/use-scroll-fade";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, #8B250040 0%, transparent 70%)" }}
    >
      <div className="blur-orb w-[600px] h-[600px] bg-primary/8 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3" />

      <div ref={ref} className={`container mx-auto px-6 text-center relative z-10 max-w-3xl scroll-fade ${isVisible ? "visible" : ""}`}>
        <AnimatedHeading
          as="h2"
          lines={["Se você tem audiência e conhecimento,", "a estrutura é o que falta."]}
          className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-12 glow-orange tracking-tight leading-[1.15]"
        />

        <a
          href="https://tally.so/r/68k4do"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-300 interactive"
        >
          Fale com a gente
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
