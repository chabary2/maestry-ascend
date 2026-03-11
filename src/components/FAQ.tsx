import { useState } from "react";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const faqs = [
  {
    q: "O que é coprodução?",
    a: "Coprodução é um modelo de parceria onde estruturamos toda a operação do seu produto digital — estratégia, funis, equipe, tecnologia e gestão — em troca de uma participação nos resultados. Você foca na expertise, nós cuidamos do resto.",
  },
  {
    q: "Para quem é a Maestry?",
    a: "Para experts e infoprodutores que já possuem um produto validado e audiência, mas precisam de estrutura profissional para escalar com previsibilidade e eficiência.",
  },
  {
    q: "Como funciona o modelo financeiro?",
    a: "Trabalhamos com um modelo de revenue share. Investimos na estrutura e operação do seu negócio e compartilhamos os resultados. Sem custos fixos mensais — nosso sucesso depende do seu.",
  },
  {
    q: "O que a Maestry opera na prática?",
    a: "Operamos lançamentos, funis de aquisição, produção de conteúdo, automações, gestão de equipe, análise de dados, estratégia comercial e modelos de recorrência.",
  },
  {
    q: "Qual o prazo para ver resultado?",
    a: "Os primeiros resultados estruturais aparecem em 30-60 dias. Resultados de receita significativos costumam surgir entre 90-120 dias, dependendo do ponto de partida do projeto.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollFade();

  return (
    <section className="relative py-24 md:py-32 radial-gradient-center">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div ref={ref} className={`text-center mb-16 scroll-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
        </div>

        <div className={`space-y-3 stagger-children ${isVisible ? "visible" : ""}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-l-2 border-l-primary" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left interactive"
              >
                <span className="font-heading font-semibold text-foreground text-sm md:text-base">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 font-body text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
