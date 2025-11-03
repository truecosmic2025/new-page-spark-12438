import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TrendingUp } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient final section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f3460]" />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Re-write Who You Are
          <br />
          to the Result
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book your <span className="text-primary font-semibold">free, no-pressure</span> 30-minute consult with <span className="font-semibold text-foreground">Sarah Ramsarran</span>. Leave with a clear <span className="font-semibold text-foreground">End sentence</span>, <span className="font-semibold text-foreground">one best-fit technique</span>, and a <span className="font-semibold text-foreground">personal coaching recommendation</span>.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <p className="text-sm text-red-400 font-semibold">Last chance — final spots closing soon</p>
          </div>
          <CountdownTimer urgent />
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-12 text-lg h-14 mb-4 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Clarity Consultation — Act Now
        </Button>
        <p className="text-xs text-muted-foreground mb-12">⚡ Limited availability. Most time slots are claimed within hours.</p>

        <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            We care about outcomes and emotional wellbeing. Guidance is gentle, non-judgmental, and tailored to real life. Please seek licensed care for medical or mental-health concerns.
          </p>
        </div>
      </div>
    </section>
  );
};
