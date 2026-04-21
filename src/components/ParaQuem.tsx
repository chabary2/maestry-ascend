import { useScrollFade } from "@/hooks/use-scroll-fade";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const paraQuem = [
  "Atua em nichos reais de mercado e está realmente disposto a ensinar",
  "Tem ao menos 1.000 seguidores com consistência mínima de conteúdo real",
  "Quer construir uma operação, não depender de lançamentos pontuais",
  "Já tem o produto, ou pretende criar um",
];

const naoParaQuem = [
  "Está buscando atalhos sem base de audiência",
  "Quer terceirizar tudo sem participar da operação",
  "Não tem clareza sobre o que ensina",
];

export function ParaQuem() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-28 md:py-40 radial-gradient-bottom overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary/80 mb-6 inline-block">
            Critério
          </span>
          <AnimatedHeading
            as="h2"
            lines={["Para quem é a Maestry"]}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight"
          />
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-children ${isVisible ? "visible" : ""}`}>
          <div className="card-neon bg-card rounded-2xl p-10 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-8 text-foreground tracking-tight">
              É pra você se...
            </h3>
            <ul className="space-y-5">
              {paraQuem.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--orange))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-body text-base text-foreground/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-neon bg-card rounded-2xl p-10 border border-border/50">
            <h3 className="font-heading font-bold text-xl mb-8 text-foreground tracking-tight">
              Não faz sentido se...
            </h3>
            <ul className="space-y-5">
              {naoParaQuem.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/15 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="font-body text-base text-foreground/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
