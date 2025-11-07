import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Mis tüüpi ehitustöid teete?",
      answer: "vastus1"
    },
    {
      question: "Kui kaua tavaline ehitusprojekt aega võtab?",
      answer: "vastus2"
    },
    {
      question: "Kas teil on litsents ja kindlustus?",
      answer: "vastus3"
    },
    {
      question: "Kas Te pakute tasuta hinnapkkumisi?",
      answer: "vastus4"
    },
    {
      question: "Milline on Teie maksegraafik?",
      answer: "vastus5"
    },
    {
      question: "Kas tegelete lubade ja kontrollidega?",
      answer: "vastus6"
    },
    {
      question: "Mis garantiid Te pakute oma ehitustöödel?",
      answer: "vastus7"
    },
    {
      question: "Kas ma võin teha muudatusi keset ehitustööd?",
      answer: "vastus8"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Korduma Kippuvad Küsimused</h2>
          <p className="text-xl text-muted-foreground">
            Leia vastused kõige tavalisematele küsimustele ehitustöös
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
