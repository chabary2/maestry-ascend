import { useScrollFade } from "@/hooks/use-scroll-fade";

const steps = [
  {
    num: "01",
    title: "Formulário",
    description: "Você preenche um breve formulário com informações sobre seu produto, audiência e objetivos de crescimento.",
  },
  {
    num: "02",
    title: "Análise",
    description: "Nossa equipe faz uma análise detalhada do seu cenário atual, identificando oportunidades e gargalos operacionais.",
  },
  {
    num: "03",
    title: "Estruturação",
    description: "Montamos um plano de ação personalizado e começamos a estruturar toda a operação para escalar seu negócio.",
  },
];

export function ComoFunciona() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-24 md:py-32 radial-gradient-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-20 scroll-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {steps.map((step) => (
            <div key={step.num} className="relative text-center md:text-left">
              <span className="font-heading font-extrabold text-[120px] md:text-[150px] leading-none text-primary/[0.07] absolute -top-8 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 select-none pointer-events-none">
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
