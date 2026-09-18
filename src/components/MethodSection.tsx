import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import methodIllustration from "@/assets/method-illustration.jpg";
import { openClauddeWidget } from "@/lib/claudde";

export const MethodSection = () => {
  const steps = [
    {
      number: "1",
      title: "Name the End as identity",
      description: "We phrase the outcome from the self who already has it.",
    },
    {
      number: "2",
      title: "Edit the inner label",
      description: "Select one replacement line that matches the new role you're stepping into.",
    },
    {
      number: "3",
      title: "Attach a cue",
      description: "Pick a simple time/trigger so the new line actually gets used.",
    },
    {
      number: "4",
      title: "Normalize it",
      description: "Light, repeatable practice until the new self feels ordinary.",
    },
    {
      number: "5",
      title: "Support tool (as needed)",
      description: "Quick SATS or a brief Revision for wobble moments.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Self-Concept & Identity Reset</span> Work
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sarah's working model
          </p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src={methodIllustration} 
              alt="5-Step Method Process Diagram" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground text-center">
            <span className="font-semibold">Outcome:</span> Your self-definition stops arguing with your goal—so aligned choices come easier.
          </p>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              openClauddeWidget();
            }}
          >
            Find Your Best-Fit Path
          </Button>
        </div>
      </div>
    </section>
  );
};
