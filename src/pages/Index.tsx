import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { Frentes } from "@/components/Frentes";
import { ComoFunciona } from "@/components/ComoFunciona";
import { ParaQuem } from "@/components/ParaQuem";
import { FAQ } from "@/components/FAQ";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Diferenciais />
      <Frentes />
      <ComoFunciona />
      <ParaQuem />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;
