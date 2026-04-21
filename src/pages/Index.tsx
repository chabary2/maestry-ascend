import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Contexto } from "@/components/Contexto";
import { Frentes } from "@/components/Frentes";
import { ComoFunciona } from "@/components/ComoFunciona";
import { ParaQuem } from "@/components/ParaQuem";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Divider = () => (
  <div
    aria-hidden
    className="h-px w-full"
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, hsl(var(--orange) / 0.25) 50%, transparent 100%)",
    }}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Divider />
      <Contexto />
      <Divider />
      <Frentes />
      <Divider />
      <ComoFunciona />
      <Divider />
      <ParaQuem />
      <Divider />
      <FAQ />
      <Divider />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
