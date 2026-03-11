import logo from "@/assets/maestry-logo.png";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Maestry Company" className="h-8 w-auto" />
            <p className="font-body text-muted-foreground text-xs">
              Coprodutora estratégica para experts digitais.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading font-semibold text-sm text-foreground mb-1">Links</span>
            {[
              { label: "Início", id: "hero" },
              { label: "Sobre", id: "diferenciais" },
              { label: "Serviços", id: "frentes" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors interactive"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading font-semibold text-sm text-foreground mb-1">Contato</span>
            <a
              href="https://www.instagram.com/maestrycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors interactive"
            >
              Instagram
            </a>
            <a
              href="mailto:maestrycomp@gmail.com"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors interactive"
            >
              maestrycomp@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Maestry Company. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
