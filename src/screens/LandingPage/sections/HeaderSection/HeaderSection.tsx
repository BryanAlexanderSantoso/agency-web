import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#110f0f] overflow-hidden">
      <div className="relative bg-[url(/vector.svg)] bg-cover py-16 min-h-[870px]">
        <div className="container mx-auto relative overflow-hidden">
          <div className="flex flex-col max-w-[523px] items-start gap-8 mx-auto mt-36">
            <div className="space-y-4 w-full">
              <h1 className="text-4xl font-bold">
                <span className="text-white">Attract</span>
                <span className="text-yellow">NewLeads</span>
                <span className="text-white">like never</span>
                <br />
                <span className="text-white">before</span>
              </h1>
              <div className="items-center justify-center w-full">
                <p className="[font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0.32px] leading-6">
                  Risus commodo id odio turpis pharetra elementum. Pulvinar
                  porta porta feugiat scelerisque in elit. Morbi rhoncus,
                  tellus, eros
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full">
              <div className="flex-1">
                <Input
                  className="h-auto p-4 rounded-[30px] border-2 border-[#a0aebf] bg-[#0f0f0f] [font-family:'Agrandir-Regular',Helvetica] text-white"
                  placeholder="Email"
                />
              </div>
              <Button className="bg-yellow text-black rounded-[1000px] px-6 py-3 [font-family:'Agrandir-TextBold',Helvetica] font-bold text-sm">
                ATTRACT
              </Button>
            </div>
          </div>

          <img
            className="absolute w-[823px] h-[607px] top-[458px] left-[-441px]"
            alt="Vector"
            src="/vector-1.svg"
          />

          <img
            className="absolute w-[352px] h-[597px] -top-40 left-[calc(100%-250px)]"
            alt="Vector"
            src="/vector-2.svg"
          />
        </div>
      </div>
    </section>
  );
};
