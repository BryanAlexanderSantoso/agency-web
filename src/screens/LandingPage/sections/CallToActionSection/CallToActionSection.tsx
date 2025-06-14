import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#110f0f] py-20 relative">
      <Card className="w-full max-w-[1300px] mx-auto bg-[#ffb219] border border-solid border-[#a0aebf] rounded-md">
        <CardContent className="flex flex-col items-center gap-8 py-16 px-8">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-[40px] leading-[56px] font-bold text-center text-[#0c0d14] [font-family:'Agrandir-TextBold',Helvetica] tracking-[0]">
              Let&apos;s discuss the idea
            </h2>
            <div className="flex justify-center w-full px-[120px]">
              <p className="w-full max-w-[511px] text-base text-center text-[#00000099] [font-family:'Agrandir-Regular',Helvetica] tracking-[0.32px] leading-6">
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta
                porta feugiat scelerisque in elit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-80 bg-[#fbfcfd] rounded-[43px] overflow-hidden">
              <Input
                className="p-4 rounded-[30px] border-2 border-solid border-[#a0aebf] [font-family:'Archivo',Helvetica] text-base tracking-[0.32px] leading-5"
                placeholder="Your email"
              />
            </div>
            <Button className="px-6 py-3 bg-black text-white rounded-[1000px] [font-family:'Agrandir-TextBold',Helvetica] font-bold text-sm">
              SEND
            </Button>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        className="absolute bottom-4 right-4 px-6 py-3 rounded-[1000px] border border-solid border-[#ffa800] [font-family:'Agrandir-TextBold',Helvetica] font-bold text-yellow text-sm"
      >
        GO TO TOP
      </Button>
    </section>
  );
};
