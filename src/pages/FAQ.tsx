import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I find my size?",
      answer: "Check out our comprehensive size guide for detailed measurements. If you're between sizes, we generally recommend sizing up for our oversized styles or sizing down for a more fitted look. Our team is also happy to help—email fit@unvld.com with your measurements."
    },
    {
      question: "What's your return policy?",
      answer: "We offer free returns within 30 days of delivery. Items must be in original condition with tags attached. Simply email returns@unvld.com with your order number to start the process."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days and is free on orders over $150. Express shipping (2-3 days) is $15. International orders typically take 7-14 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. International customers may be responsible for duties and taxes upon delivery. These fees vary by country and are not included in your order total."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive an email with tracking information. You can also log into your account to view order status and tracking details."
    },
    {
      question: "What is the Dream Fund?",
      answer: "The Dream Fund is our initiative to support creatives and dreamers. 1% of every purchase goes toward funding individuals pursuing their passions—whether that's art, education, entrepreneurship, or community projects."
    },
    {
      question: "Are your products sustainable?",
      answer: "We're committed to reducing our environmental impact. We use organic and recycled materials where possible, minimize packaging waste, and design products built to last rather than be replaced seasonally."
    },
    {
      question: "How do I care for my UNVLD pieces?",
      answer: "Each product page includes specific care instructions. Generally, we recommend washing cold, air drying when possible, and avoiding harsh chemicals to extend the life of your garments."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, we may have already begun processing. Email help@unvld.com immediately and we'll do our best to accommodate."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! Digital gift cards are available in $50, $100, $200, and $500 denominations. They never expire and can be used on any purchase."
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | UNVLD</title>
        <meta name="description" content="Frequently asked questions about UNVLD orders, shipping, returns, and more." />
      </Helmet>

      <div className="container-brand py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-display mb-8">FAQ</h1>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border px-4">
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions */}
          <div className="mt-12 bg-secondary/30 p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-sm font-medium underline underline-offset-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
