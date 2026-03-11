import { useScrollFade } from "@/hooks/use-scroll-fade";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section id="cta" className="relative py-24 md:py-32 radial-gradient-bottom overflow-hidden">
      <div className="blur-orb w-[600px] h-[600px] bg-primary/5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3" />

      <div ref={ref} className={`container mx-auto px-6 text-center relative z-10 scroll-fade ${isVisible ? "visible" : ""}`}>
        <span className="pill-badge mb-8 inline-block">Vagas Limitadas</span>

        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 glow-orange">
          Sua expertise tem potencial de escala.
          <br />
          <span className="text-primary">Vamos estruturar?</span>
        </h2>

        <a
          href="https://maestrysolucoes.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-300 interactive mb-12"
        >
          Preencha o formulário
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className={`flex flex-wrap justify-center gap-8 md:gap-12 mt-4 stagger-children ${isVisible ? "visible" : ""}`}>
          {["Business Intelligence", "Roadmap Estratégico", "ROI Projetado"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-body text-sm text-foreground/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
