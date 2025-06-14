import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Define card data for mapping
const cardData = [
  {
    category: "WEBSITE",
    title: "Creative landing page",
    hasImage: true,
    color: "yellow",
  },
  {
    category: "BRANDING",
    title: "Creative Branding",
    hasImage: false,
    color: "yellow",
  },
  {
    category: "DEVELOPMENT",
    title: "Automation. Advanced Level",
    hasImage: false,
    color: "yellow",
  },
  {
    category: "DIGITAL MARKETING",
    title: "Why We Collect User's Data",
    hasImage: false,
    color: "yellow",
  },
  {
    category: "USER TESTING",
    title: "Creative landing page",
    hasImage: true,
    color: "yellow",
  },
  {
    category: "SEO",
    title: "How We Optimized Our SEO",
    hasImage: false,
    color: "yellow",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-[#110f0f]">
      <div className="max-w-[1300px] mx-auto flex flex-wrap gap-8">
        {/* Left column - Heading and description */}
        <div className="flex flex-col w-full md:w-[412px] gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="[font-family:'Quicksand',Helvetica] font-bold text-white text-[40px] leading-[56px]">
                Some pieces of our work
              </h2>

              <div className="flex items-center">
                <p className="[font-family:'Quicksand',Helvetica] font-medium text-[#ffffff99] text-base tracking-[0.32px] leading-6">
                  Risus commodo id odio turpis pharetra elementum. Pulvinar
                  porta porta feugiat scelerisque in elit. Morbi rhoncus,
                  tellus, eros consequat magna semper orci a tincidunt.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border border-solid border-[#ffa800] rounded-[1000px] px-6 py-3 w-fit"
            >
              <span className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-yellow text-sm">
                SHOW MORE
              </span>
            </Button>
          </div>
        </div>

        {/* Middle column - First set of cards */}
        <div className="flex flex-col gap-8 flex-1">
          {cardData.slice(0, 3).map((card, index) => (
            <Card
              key={`card-1-${index}`}
              className="w-full md:w-[412px] border border-solid border-[#a0aebf] rounded bg-transparent p-6"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                {card.hasImage && (
                  <div className="w-full h-[142px] bg-[#8474c4] rounded" />
                )}
                <div className="flex flex-col gap-5">
                  <Badge className="w-fit bg-yellow rounded px-2 py-1">
                    <span className="[font-family:'Archivo',Helvetica] font-semibold text-[#1a365d] text-xs tracking-[0.24px] leading-4">
                      {card.category}
                    </span>
                  </Badge>

                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-white text-2xl leading-8">
                      {card.title}
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-fit p-0 flex items-center gap-1 hover:bg-transparent"
                  >
                    <span className="[font-family:'Quicksand',Helvetica] font-medium text-[#728094] text-base tracking-[0.32px] leading-5">
                      Read more
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Right column - Second set of cards */}
        <div className="flex flex-col gap-8 flex-1">
          {cardData.slice(3, 6).map((card, index) => (
            <Card
              key={`card-2-${index}`}
              className="w-full md:w-[412px] border border-solid border-[#a0aebf] rounded bg-transparent p-6"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                {card.hasImage && (
                  <div className="w-full h-[142px] bg-[#8474c4] rounded" />
                )}
                <div className="flex flex-col gap-5">
                  <Badge className="w-fit bg-[#ffa800] rounded px-2 py-1">
                    <span className="[font-family:'Archivo',Helvetica] font-semibold text-[#1a365d] text-xs tracking-[0.24px] leading-4">
                      {card.category}
                    </span>
                  </Badge>

                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Quicksand',Helvetica] font-bold text-white text-2xl leading-8">
                      {card.title}
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-fit p-0 flex items-center gap-1 hover:bg-transparent"
                  >
                    <span className="[font-family:'Quicksand',Helvetica] font-medium text-[#728094] text-base tracking-[0.32px] leading-5">
                      Read more
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
