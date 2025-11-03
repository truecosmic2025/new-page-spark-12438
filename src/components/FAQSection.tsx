import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is this coaching?",
      answer: "It's a clarity consultation. We identify your main bottleneck, set an End sentence, pick one technique, and offer a coaching recommendation.",
    },
    {
      question: "Do I leave with a full plan?",
      answer: "Not from the consult. You'll receive a short recap and a recommended coaching route where your full plan is built.",
    },
    {
      question: "Do I need Neville experience?",
      answer: "No—Sarah keeps it simple and practical.",
    },
    {
      question: "Is it really free?",
      answer: "Yes. If a program fits, we'll mention it—no pressure.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
