import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import innerPeace from "@/assets/inner-peace.jpg";
import { openClauddeWidget } from "@/lib/claudde";

export const InnerConversationsSection = () => {
  const characteristics = [
    {
      title: "Short and kind",
      description: "One calm line—no inner arguments.",
    },
    {
      title: "Identity-led",
      description: "Act from the person who already has it.",
    },
    {
      title: "Cue-based",
      description: "Tie the practice to a real daily moment.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue background like Use Cases */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Self-Concept Practice Feels Like
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <img 
              src={innerPeace} 
              alt="Inner peace and mindful contemplation" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {characteristics.map((char, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{char.title}</h3>
                  <p className="text-muted-foreground">{char.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
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
            Try It with Sarah — Free
          </Button>
        </div>
      </div>
    </section>
  );
};
