import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NavigationSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      title: "Branding",
      description:
        "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
      iconSrc: "/frame-12.svg",
    },
    {
      id: 2,
      title: "Web development",
      description:
        "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
      iconSrc: "/mask-group.png",
      isBackgroundImage: true,
    },
    {
      id: 3,
      title: "Digital marketing",
      description:
        "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
      iconSrc: "/frame-14.svg",
    },
    {
      id: 4,
      title: "Mobile App",
      description:
        "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
      iconSrc: "/frame-6.svg",
    },
    {
      id: 5,
      title: "SEO",
      description:
        "Integer ante non nunc, eget est justo vel semper nunc. Lacus",
      iconSrc: "/frame-4.svg",
    },
    {
      id: 6,
      title: "User testing",
      description:
        "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
      iconSrc: "/frame-23.svg",
    },
  ];

  return (
    <section className="w-full bg-[#110e0e] py-20">
      <div className="flex flex-col items-center gap-10 max-w-[1300px] mx-auto px-4 md:px-8 lg:px-[111px]">
        <div className="flex flex-col items-center gap-8 max-w-[634px]">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="w-full [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-[40px] text-center leading-[56px]">
              We Offer
            </h2>

            <div className="flex items-center justify-center w-full">
              <p className="[font-family:'Agrandir-Regular',Helvetica] font-normal text-[#e6e6e699] text-center text-base tracking-[0.32px] leading-6">
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta
                porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
                consequat magna semper orci a tincidunt.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.slice(0, 3).map((service) => (
            <Card
              key={service.id}
              className="border border-solid border-[#a0aebf] rounded overflow-hidden bg-transparent"
            >
              <CardContent className="flex flex-col items-start gap-3 p-5">
                {service.isBackgroundImage ? (
                  <div
                    className="w-12 h-12 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.iconSrc})` }}
                  />
                ) : (
                  <img
                    className="w-12 h-12"
                    alt={`${service.title} icon`}
                    src={service.iconSrc}
                  />
                )}
                <h3 className="self-stretch [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-[28px] leading-9">
                  {service.title}
                </h3>
                <p className="self-stretch [font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0.28px] leading-5">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.slice(3, 6).map((service) => (
            <Card
              key={service.id}
              className="border border-solid border-[#a0aebf] rounded overflow-hidden bg-transparent"
            >
              <CardContent className="flex flex-col items-start gap-3 p-5">
                <img
                  className="w-12 h-12"
                  alt={`${service.title} icon`}
                  src={service.iconSrc}
                />
                <h3 className="self-stretch [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-[28px] leading-9">
                  {service.title}
                </h3>
                <p className="self-stretch [font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-sm tracking-[0.28px] leading-5">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
