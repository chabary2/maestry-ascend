import { useScrollFade } from "@/hooks/use-scroll-fade";

const paraQuem = [
  "Tem conhecimento e quer transformar em um negócio digital estruturado",
  "Quer escalar com estrutura, não com sorte",
  "Busca previsibilidade de receita",
  "Quer construir com quem entra junto na operação",
  "Está pronto para investir em crescimento profissional",
];

const naoParaQuem = [
  "Quer crescer sem comprometimento com o processo",
  "Busca resultados da noite para o dia",
  "Espera resultado sem construção de base sólida",
  "Prefere trabalhar sozinho sem processos",
  "Não valoriza dados e métricas na tomada de decisão",
];

export function ParaQuem() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-24 md:py-32 radial-gradient-bottom">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 scroll-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Para quem é a <span className="text-primary">Maestry</span>
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="card-glow bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-6 text-foreground">
              A Maestry é para você que...
            </h3>
            <ul className="space-y-4">
              {paraQuem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--orange))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glow bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-6 text-foreground">
              A Maestry não é para...
            </h3>
            <ul className="space-y-4">
              {naoParaQuem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
