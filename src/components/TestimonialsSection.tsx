import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonialAvatar1 from "@/assets/testimonial-avatar-1.jpg";
import testimonialAvatar2 from "@/assets/testimonial-avatar-2.jpg";
import testimonialAvatar3 from "@/assets/testimonial-avatar-3.jpg";
import { openClauddeWidget } from "@/lib/claudde";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I stopped negotiating with my old self. Everything felt simpler.",
      author: "Sarah M.",
      role: "",
      avatar: testimonialAvatar1,
    },
    {
      text: "One line changed how I showed up in conversations.",
      author: "James K.",
      role: "",
      avatar: testimonialAvatar2,
    },
    {
      text: "Tiny steps made it stick—no overwhelm.",
      author: "Crispin M.",
      role: "",
      avatar: testimonialAvatar3,
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Deep indigo/navy gradient like Robert's page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a] via-[#252b4a] to-[#1e2640]" />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Mini Proof</h2>
          <p className="text-xl text-muted-foreground">Real, Short Wins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur border-indigo-500/20 hover:border-indigo-400/40 transition-colors">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 mt-6">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    {testimonial.avatar && <AvatarImage src={testimonial.avatar} alt={testimonial.author} />}
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-foreground font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              openClauddeWidget();
            }}
          >
            Book Now — Limited Spots This Week
          </Button>
        </div>
      </div>
    </section>
  );
};
