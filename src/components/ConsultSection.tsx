import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, AlertCircle } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { openClauddeWidget } from "@/lib/claudde";

export const ConsultSection = () => {
  const consultSteps = [
    {
      title: "A quick diagnostic of your primary bottleneck",
    },
    {
      title: "Your End sentence (already-done outcome)",
    },
    {
      title: "One recommended technique to begin",
      description: "(Inner Speech / SATS / Revision)",
    },
    {
      title: "One micro step for tonight",
      description: "(under 5 minutes)",
    },
    {
      title: "A brief recap email",
      description: "End sentence, technique recommendation, suggested next step",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#1a1a2e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What You'll Get In Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Free 30-Minute Consult</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <p className="font-semibold">Only 3 spots left this week</p>
          </div>
          <CountdownTimer urgent />
          <p className="text-sm text-muted-foreground">Next available slots expire in...</p>
        </div>

        <div className="grid gap-6 mb-12">
          {consultSteps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    {step.description && (
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              openClauddeWidget();
            }}
          >
            Claim Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
