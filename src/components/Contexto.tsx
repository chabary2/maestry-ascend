import { useScrollFade } from "@/hooks/use-scroll-fade";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export function Contexto() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-32 md:py-48 radial-gradient-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <span
          className={`font-body text-xs uppercase tracking-[0.3em] text-primary/80 mb-6 inline-block transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          O que fazemos
        </span>

        <AnimatedHeading
          as="h2"
          lines={["O que a Maestry faz"]}
          className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-10 tracking-tight"
        />

        <div ref={ref} className={`scroll-fade ${isVisible ? "visible" : ""}`}>
          <p className="font-body text-base md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            A Maestry entra antes do produto existir. Diagnosticamos o que você tem,
            desenhamos o que faz sentido construir e operamos junto — produto, processos
            comerciais, conteúdo e posicionamento.
          </p>
        </div>
      </div>
    </section>
  );
}
