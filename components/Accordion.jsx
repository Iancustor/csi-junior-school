import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Excellence in Education:</AccordionTrigger>
        <AccordionContent>
          We are committed to academic excellence and providing a well-rounded
          education that prepares students for success in an ever-changing
          world.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Community Engagement: </AccordionTrigger>
        <AccordionContent>
          CSI Junior School fosters a vibrant and inclusive community where
          students, parents, and educators collaborate to create a supportive
          and enriching learning environment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Holistic Development:</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s Beyond academics, we focus on nurturing creativity,
          critical thinking, and character development to empower students to
          become compassionate and responsible global citizens
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
