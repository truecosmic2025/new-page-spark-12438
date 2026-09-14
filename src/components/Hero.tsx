import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { openClauddeWidget } from "@/lib/claudde";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/70 to-[#0f3460]/80" />
      
      {/* Animated purple to cyan gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-500/5 animate-gradient" />
      
      {/* Radial glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl animate-pulse-slow" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Become the Version of You That Life Says{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            "Yes" To
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Reserve a <span className="text-primary font-semibold">free 30-minute clarity consult</span> with <span className="font-semibold text-foreground">Sarah Ramsarran</span>. We'll spot the real block, choose <span className="font-semibold text-foreground">one technique</span> to start with, and share the <span className="font-semibold text-foreground">right coaching path</span> to build momentum—rooted in <span className="font-semibold text-foreground">self-concept and identity reset</span>.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
          <span>Warm, judgment-free</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Neville methods</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Micro steps that stick</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4 sm:px-0">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg h-14"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Clarity Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 text-lg h-14"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How Self-Concept Changes Results
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
          This is a <span className="font-semibold">diagnostic call</span>, not a full coaching session. If coaching fits, you'll get a clear recommendation—<span className="font-semibold">no pressure</span>.
        </p>
      </div>
    </section>
  );
};
