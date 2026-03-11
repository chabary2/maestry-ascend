import { useScrollFade } from "@/hooks/use-scroll-fade";

const frentes = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
      </svg>
    ),
    title: "Coprodução de Lançamentos",
    description:
      "Planejamos, executamos e otimizamos lançamentos completos, do aquecimento ao pós-venda, com foco em performance e conversão.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Funil de Aquisição Orgânica",
    description:
      "Construímos funis de conteúdo estratégico que atraem leads qualificados de forma orgânica e previsível, sem dependência de tráfego pago.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      </svg>
    ),
    title: "Operação de Conteúdo",
    description:
      "Gerenciamos toda a produção de conteúdo: pauta, roteiro, edição e distribuição estratégica em múltiplas plataformas.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v12" /><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    title: "Escala e Recorrência",
    description:
      "Implementamos modelos de receita recorrente e estratégias de escala que geram previsibilidade financeira a longo prazo.",
  },
];

export function Frentes() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section id="frentes" className="relative py-24 md:py-32 radial-gradient-bottom">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 scroll-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Frentes de <span className="text-primary">Atuação</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Operamos em frentes integradas para entregar resultados completos.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children ${isVisible ? "visible" : ""}`}>
          {frentes.map((f) => (
            <div
              key={f.title}
              className="card-glow bg-card rounded-2xl p-8 border border-border/50 interactive"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 scroll-fade ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
          <span className="pill-badge">Cada frente é desenhada para trabalhar em conjunto.</span>
        </div>
      </div>
    </section>
  );
}
