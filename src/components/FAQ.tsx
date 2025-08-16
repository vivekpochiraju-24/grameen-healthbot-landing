import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Does this work on keypad phones?",
      answer: "Yes! Our IVR system (dial 1455) is specifically designed to work on all types of phones including basic keypad phones. The system uses voice navigation in local languages, so no smartphone is required."
    },
    {
      question: "What if there's no internet connection?",
      answer: "Our system is offline-first. The Village Health Robot can conduct basic health screenings and store data locally. When connectivity is available, all data syncs automatically to the cloud for AI analysis and doctor consultation."
    },
    {
      question: "Who operates the Village Health Robot?",
      answer: "Local trained health workers, ASHA workers, or community volunteers operate the robots. We provide comprehensive training to ensure proper usage and maintenance of the equipment."
    },
    {
      question: "How is my health data protected?",
      answer: "We follow strict data privacy protocols with end-to-end encryption. All health data is stored securely and accessed only with patient consent. We comply with healthcare data protection standards and regulations."
    },
    {
      question: "What medical conditions can be diagnosed?",
      answer: "Our AI specializes in common rural health issues including TB screening, anemia detection, malnutrition assessment, maternal health monitoring, and basic vital sign analysis. For complex cases, remote doctors provide consultation."
    },
    {
      question: "Is there any cost for using the service?",
      answer: "Basic health screening through the Village Health Robot and IVR consultation (1455) are provided at minimal or no cost to ensure healthcare accessibility for all rural communities."
    },
    {
      question: "How quickly can I get medical help in emergencies?",
      answer: "Our system automatically detects emergency conditions and immediately alerts the nearest Primary Health Center (PHC) and ambulance services, significantly reducing response time for critical cases."
    },
    {
      question: "Which languages are supported?",
      answer: "The system supports major local languages including Hindi, Bengali, Tamil, Telugu, Gujarati, Marathi, and others. Voice navigation makes it accessible to non-literate users as well."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Common questions about Grameen HealthBot and our rural healthcare system
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/20">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-primary hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1455" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary-light transition-colors duration-300"
            >
              📞 Call 1455
            </a>
            <a 
              href="mailto:support@grameenhealthbot.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors duration-300"
            >
              ✉️ Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;