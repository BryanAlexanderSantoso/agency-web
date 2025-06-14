import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = (): JSX.Element => {
  // Company logo data for the first row
  const topRowLogos = [
    { id: 1, src: "/frame-5.svg", alt: "Company logo" },
    {
      id: 2,
      content: (
        <div className="relative w-[150px] h-10">
          <img
            className="absolute w-[21px] h-8 top-1 left-1.5"
            alt="Vector"
            src="/vector-3.svg"
          />
          <div className="absolute w-[87px] top-[7px] left-11 [font-family:'Quicksand',Helvetica] font-bold text-white text-2xl tracking-[0.48px] leading-6">
            offmax
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="relative w-[150px] h-10">
          <img
            className="absolute w-[31px] h-[27px] top-[7px] left-2"
            alt="Vector"
            src="/vector-12.svg"
          />
          <div className="absolute w-[87px] top-1.5 left-[51px] [font-family:'Quicksand',Helvetica] font-bold text-white text-2xl tracking-[0.48px] leading-6">
            offmax
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="relative w-[150px] h-10">
          <div className="absolute w-[30px] h-[29px] top-[5px] left-0.5">
            <img
              className="absolute w-[27px] h-[25px] top-0 left-0"
              alt="Vector"
              src="/vector-8.svg"
            />
            <img
              className="absolute w-7 h-[29px] top-0 left-[3px]"
              alt="Vector"
              src="/vector-4.svg"
            />
            <img
              className="absolute w-6 h-[22px] top-0.5 left-[3px]"
              alt="Vector"
              src="/vector-5.svg"
            />
          </div>
          <div className="absolute w-[87px] top-[5px] left-[51px] [font-family:'Quicksand',Helvetica] font-bold text-white text-2xl tracking-[0.48px] leading-6">
            offmax
          </div>
        </div>
      ),
    },
    { id: 5, src: "/frame-25.svg", alt: "Company logo" },
    { id: 6, src: "/frame-20.svg", alt: "Company logo" },
    { id: 7, src: "/frame-10.svg", alt: "Company logo", width: "w-3.5" },
    {
      id: 8,
      content: (
        <div className="relative w-[150px] h-10">
          <div className="relative w-[105px] h-10">
            <img
              className="absolute w-[39px] h-10 top-0 left-0"
              alt="Group"
              src="/group.png"
            />
            <img
              className="absolute w-[105px] h-4 top-0 left-0"
              alt="Vector"
              src="/vector-6.svg"
            />
          </div>
        </div>
      ),
      special: true,
    },
  ];

  // Company logo data for the second row
  const bottomRowLogos = [
    {
      id: 1,
      content: (
        <div className="relative w-[150px] h-10">
          <div className="relative w-[105px] h-10">
            <img
              className="absolute w-[39px] h-10 top-0 left-0"
              alt="Group"
              src="/group-1.png"
            />
            <img
              className="absolute w-[105px] h-4 top-0 left-0"
              alt="Vector"
              src="/vector-6.svg"
            />
          </div>
        </div>
      ),
    },
    { id: 2, src: "/frame-27.svg", alt: "Company logo", width: "w-3.5" },
    { id: 3, src: "/frame-16.svg", alt: "Company logo" },
    {
      id: 4,
      content: (
        <div className="relative w-[150px] h-10">
          <div className="absolute w-[34px] h-[19px] top-[7px] left-px">
            <img
              className="absolute w-[27px] h-[19px] top-0 left-1"
              alt="Vector"
              src="/vector-11.svg"
            />
            <img
              className="absolute w-[19px] h-[18px] top-0 left-[15px]"
              alt="Vector"
              src="/vector-10.svg"
            />
            <img
              className="absolute w-[18px] h-[18px] top-px left-0"
              alt="Vector"
              src="/vector-7.svg"
            />
          </div>
          <div className="absolute w-[87px] top-[5px] left-12 [font-family:'Quicksand',Helvetica] font-bold text-white text-2xl tracking-[0.48px] leading-6">
            offmax
          </div>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="relative w-[150px] h-10">
          <img
            className="absolute w-[39px] h-10 top-0 left-0"
            alt="Group"
            src="/group-2.png"
          />
          <div className="absolute w-[87px] top-[5px] left-12 [font-family:'Quicksand',Helvetica] font-bold text-white text-2xl tracking-[0.48px] leading-6">
            offmax
          </div>
        </div>
      ),
    },
    { id: 6, src: "/frame-24.svg", alt: "Company logo" },
    { id: 7, src: "/frame-26.svg", alt: "Company logo" },
    { id: 8, src: "/frame-7.svg", alt: "Company logo" },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="container flex flex-col items-center gap-16 max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <h2 className="w-full md:w-1/2 [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-[40px] leading-[56px]">
            Trusted by 200+ companies around the world
          </h2>

          <div className="w-full md:w-1/2">
            <p className="[font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0.32px] leading-6">
              Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
              amet tellus purus sit odio eget. Diam morbi faucibus vitae neque
              id in. Nullam sed et dapibus nunc, porta enim orci urna, sit.
              Lectus ac.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          {/* Top row of logos */}
          <div className="flex flex-wrap justify-start gap-5 pl-6">
            {topRowLogos.map((logo) => (
              <Card
                key={logo.id}
                className={`flex-none ${logo.special ? "bg-[#191919]" : ""} rounded-[10px] border border-solid border-[#a0aebf]`}
              >
                <CardContent className="flex items-center justify-center p-4 h-[58px]">
                  {logo.content ? (
                    logo.content
                  ) : (
                    <img
                      className={`${logo.width || "w-[150px]"} h-10`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom row of logos */}
          <div className="flex flex-wrap justify-end gap-5 pr-6">
            {bottomRowLogos.map((logo) => (
              <Card
                key={logo.id}
                className="flex-none rounded-[10px] border border-solid border-[#a0aebf]"
              >
                <CardContent className="flex items-center justify-center p-4 h-[58px]">
                  {logo.content ? (
                    logo.content
                  ) : (
                    <img
                      className={`${logo.width || "w-[150px]"} h-10`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
