import { useState } from "react";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { AnimatedHeading } from "@/components/AnimatedHeading";

const faqs = [
  {
    q: "O que é coprodução?",
    a: "Coprodução é entrar na operação junto com o especialista. Estruturamos produto, comercial e conteúdo, dividimos a execução e compartilhamos o resultado. Não é prestação de serviço pontual, é operar lado a lado.",
  },
  {
    q: "Preciso já ter um produto ou mentoria criada?",
    a: "Não. A Maestry entra antes do produto existir, se for o caso. Avaliamos o seu conhecimento e a sua audiência, e desenhamos o produto que faz sentido construir. Se você já tem, partimos do que existe e ajustamos o que precisa.",
  },
  {
    q: "Como a Maestry entra na minha operação?",
    a: "Em três fases: diagnóstico do seu cenário atual, estruturação do plano (produto, funil e comercial) e implementação junto com você. Não entregamos um relatório e sumimos — operamos junto.",
  },
  {
    q: "Como é o primeiro contato?",
    a: "Você preenche um formulário curto. Se houver fit com o nosso modelo de operação, marcamos uma conversa para entender o seu momento em mais profundidade.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-28 md:py-40 radial-gradient-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-20">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary/80 mb-6 inline-block">
            FAQ
          </span>
          <AnimatedHeading
            as="h2"
            lines={["Perguntas frequentes"]}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight"
          />
        </div>

        <div ref={ref} className={`space-y-3 stagger-children ${isVisible ? "visible" : ""}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-l-2 border-l-primary" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left interactive"
              >
                <span className="font-heading font-semibold text-foreground text-base md:text-lg">{faq.q}</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  openIndex === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 font-body text-muted-foreground text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
