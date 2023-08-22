import React from "react";
import questionData from "./QuestionsData";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
export default function Questions() {

  return (
    <section className="pt-8 md:py-12 lg:py-24">
      <div className="w-[90%] md:w-4/5 m-auto">
        <h2 className="text-lg md:text-2xl lg:text-4xl text-antrakBlue font-ubuntu font-semibold text-center mb-4  md:mb-6 lg:mb-12">
          Got any Questions?
        </h2>

        <Accordion defaultIndex={[0]} allowMultiple>
          {questionData.map((data) => (
            <AccordionItem className="border-none mb-4 lg:mb-8">
              <h2>
                <AccordionButton className="border mb-3">
                  <Box as="span" flex="1" textAlign="left" className="text-base md:text-xl lg:text-2xl text-black font-ubuntu font-semibold">
                    {data.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                className="text-base md:text-lg lg:text-2xl text-[#444] font-ubuntu font-medium border py-3 px-4 mb-4"
              >
                {data.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
