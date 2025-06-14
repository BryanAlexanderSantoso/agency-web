import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    name: "Brooklyn Simmons",
    company: "manam",
    image: "..//frame.png",
    text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
  },
  {
    name: "Esther Howard",
    company: "Offmax",
    image: "..//frame-1.png",
    text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
  },
  {
    name: "Arlene McCoy",
    company: "bloopixel",
    image: "..//frame-2.png",
    text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
  },
  {
    name: "Jane Cooper",
    company: "unpexel",
    image: "..//frame-3.png",
    text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-20">
      <div className="container mx-auto max-w-[1300px] flex flex-col items-center gap-14">
        <div className="flex items-end justify-between w-full">
          <h2 className="font-bold text-white text-base [font-family:'Agrandir-TextBold',Helvetica]">
            Hear what our customers say :)
          </h2>

          <div className="flex items-center gap-6">
            <Button
              variant="outline"
              size="icon"
              className="p-5 bg-[#0f0f0f] rounded border border-solid border-[#ffa800] hover:bg-[#0f0f0f]"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span className="sr-only">Previous testimonials</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="p-5 bg-[#0f0f0f] rounded border border-solid border-[#ffa800] hover:bg-[#0f0f0f]"
            >
              <ChevronRightIcon className="w-5 h-5" />
              <span className="sr-only">Next testimonials</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#0f0f0f] border-[#a0aebf] flex flex-col"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-16 h-16 mt-[-8.00px] mb-[-8.00px] ml-[-8.00px] rounded-[80px] border-8 border-solid border-[#0f0f0f]">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-[400px]"
                      />
                    </Avatar>
                  </div>

                  <div className="flex flex-col items-start flex-1">
                    <div className="flex items-center gap-3 w-full">
                      <h3 className="flex-1 mt-[-1.00px] [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base">
                        {testimonial.name}
                      </h3>
                    </div>

                    <p className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-[#ffffff99] text-base">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
