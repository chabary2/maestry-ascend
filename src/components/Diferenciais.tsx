import { useScrollFade } from "@/hooks/use-scroll-fade";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Posicionamento Estratégico",
    description:
      "Definimos o posicionamento ideal para o seu produto, alinhando oferta, mercado e audiência para maximizar conversão e autoridade no nicho.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Infraestrutura Operacional",
    description:
      "Construímos toda a operação por trás do seu produto digital: funis, automações, equipe, métricas e processos para rodar sem depender de você.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Escalabilidade Sustentável",
    description:
      "Criamos um modelo de crescimento previsível e sustentável, com recorrência de receita e operações que escalam sem perder qualidade.",
  },
];

export function Diferenciais() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 radial-gradient-center">
      <div className="blur-orb w-[400px] h-[400px] bg-primary/4 top-1/2 left-0 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 scroll-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Diferenciais <span className="text-primary">Estratégicos</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            O que nos diferencia no mercado de coprodução digital.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-glow bg-card rounded-2xl p-8 border border-border/50 interactive"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{card.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 scroll-fade ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
          <span className="pill-badge">Crescer não é sorte. É estrutura.</span>
        </div>
      </div>
    </section>
  );
}
