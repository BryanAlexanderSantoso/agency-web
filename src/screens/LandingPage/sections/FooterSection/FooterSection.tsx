import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full bg-black py-24">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Image */}
        <div className="relative w-full md:w-1/2 h-[361px]">
          <div className="relative w-full h-full">
            <img
              className="absolute w-[648px] h-[361px]"
              alt="Frame"
              src="/frame-22.svg"
            />
            <img
              className="absolute w-full h-full"
              alt="Searching"
              src="/searching-2194247-0.png"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <Card className="w-full md:w-1/2 bg-transparent border-none">
          <CardContent className="flex flex-col items-start gap-8 p-0">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-white text-4xl font-bold [font-family:'Agrandir-TextBold',Helvetica] leading-[56px]">
                Why choose us
              </h2>
              <p className="text-[#ffffff99] text-base tracking-[0.32px] leading-6 [font-family:'Agrandir-Regular',Helvetica]">
                Commodo diam vulputate dui proin quis enim nibh. Non integer ac
                libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
                eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
                blandit.
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-full border-[#ffa800] border-solid text-yellow hover:text-yellow hover:bg-black/10 [font-family:'Agrandir-TextBold',Helvetica] font-bold text-sm"
            >
              LET&apos;S CONNECT
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
