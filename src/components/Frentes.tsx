import { useScrollFade } from "@/hooks/use-scroll-fade";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const frentes = [
  {
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: "Produto e oferta",
    description:
      "Estruturamos o formato, o posicionamento e a precificação do produto a partir do seu conhecimento e do seu nicho.",
  },
  {
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Comercial",
    description:
      "Montagem de time — closer, SDR, social seller, CS — e processos de venda que funcionam com previsibilidade.",
  },
  {
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
    title: "Conteúdo",
    description:
      "Dois trilhos — volume orgânico para crescimento e conexão; conteúdo técnico para qualificação e conversão.",
  },
  {
    num: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "Branding e autoridade",
    description:
      "Construção de marca pessoal que transforma consistência em referência de nicho.",
  },
];

export function Frentes() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section id="frentes" className="relative py-28 md:py-40 radial-gradient-bottom overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary/80 mb-6 inline-block">
            Frentes
          </span>
          <AnimatedHeading
            as="h2"
            lines={["As quatro frentes da operação"]}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight"
          />
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-children ${isVisible ? "visible" : ""}`}>
          {frentes.map((f) => (
            <div
              key={f.title}
              className="card-neon group bg-card rounded-2xl p-10 border border-border/50 interactive transition-all duration-500 hover:border-gold/40"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                  {f.icon}
                </div>
                <span className="font-heading font-bold text-sm text-primary/40 tracking-widest">{f.num}</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-foreground tracking-tight">{f.title}</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
