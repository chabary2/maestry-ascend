import { useEffect, useRef, useState } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    description: "Entendemos sua audiência, seu conhecimento e o que faz sentido construir.",
  },
  {
    num: "02",
    title: "Estrutura",
    description: "Desenhamos o produto, o funil e o time comercial em um plano personalizado.",
  },
  {
    num: "03",
    title: "Operação",
    description: "Implementamos, testamos e ajustamos junto com você.",
  },
];

export function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const stepEls = sectionRef.current?.querySelectorAll("[data-step-index]");
    if (!stepEls) return;

    stepEls.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => new Set(prev).add(i));
              setLineProgress(((i + 1) / steps.length) * 100);
            }, i * 250);
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative py-28 md:py-40 radial-gradient-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary/80 mb-6 inline-block">
            Processo
          </span>
          <AnimatedHeading
            as="h2"
            lines={["Como funciona"]}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector line - desktop */}
          <div ref={lineRef} className="hidden md:block absolute top-[60px] left-[16.66%] right-[16.66%] h-px bg-border/40">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000 ease-out"
              style={{ width: `${lineProgress}%`, boxShadow: "0 0 20px hsl(var(--orange) / 0.5)" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-step-index={i}
                className={`relative text-center transition-all duration-700 ${
                  visibleSteps.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Big background number */}
                <span
                  className={`font-heading font-extrabold text-[140px] md:text-[180px] leading-none absolute -top-12 left-1/2 -translate-x-1/2 select-none pointer-events-none transition-all duration-1000 ${
                    visibleSteps.has(i)
                      ? "text-primary/[0.10] drop-shadow-[0_0_40px_hsl(var(--orange)/0.5)]"
                      : "text-primary/[0.03]"
                  }`}
                >
                  {step.num}
                </span>

                {/* Dot on the line */}
                <div className="hidden md:block relative z-20 mb-8">
                  <div
                    className={`w-4 h-4 rounded-full mx-auto transition-all duration-500 ${
                      visibleSteps.has(i)
                        ? "bg-primary shadow-[0_0_20px_hsl(var(--orange)/0.8)]"
                        : "bg-border"
                    }`}
                  />
                </div>

                <div className="relative z-10 pt-16 md:pt-4 px-4">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-primary/70 block mb-3">
                    Etapa {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
