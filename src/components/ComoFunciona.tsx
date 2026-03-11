import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Primeiro contato",
    description: "Nossa equipe entra em contato para entender seu momento e sua operação atual.",
  },
  {
    num: "02",
    title: "Análise detalhada",
    description: "Mapeamos seu negócio, identificamos gargalos e oportunidades com base em dados.",
  },
  {
    num: "03",
    title: "Estruturação completa",
    description: "Montamos a base, a estratégia e os funis da sua operação do início ao fim.",
  },
];

export function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const stepEls = sectionRef.current?.querySelectorAll("[data-step-index]");
    if (!stepEls) return;

    stepEls.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Delay each step sequentially
            setTimeout(() => {
              setVisibleSteps((prev) => new Set(prev).add(i));
            }, i * 300);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative py-24 md:py-32 radial-gradient-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-step-index={i}
              className={`relative text-center md:text-left transition-all duration-700 ${
                visibleSteps.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span
                className={`font-heading font-extrabold text-[120px] md:text-[150px] leading-none absolute -top-8 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 select-none pointer-events-none transition-all duration-700 ${
                  visibleSteps.has(i)
                    ? "text-primary/[0.12] drop-shadow-[0_0_30px_hsl(var(--orange)/0.4)]"
                    : "text-primary/[0.04]"
                }`}
              >
                {step.num}
              </span>
              <div className="relative z-10 pt-16">
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{step.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
