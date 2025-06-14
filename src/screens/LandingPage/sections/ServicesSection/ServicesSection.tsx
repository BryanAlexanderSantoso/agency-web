import React from "react";
import { Input } from "../../../../components/ui/input";

export const ServicesSection = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { title: "About us" },
    { title: "Team" },
    { title: "Careers" },
  ];

  // Services links data
  const servicesLinks = [
    { title: "Branding" },
    { title: "Web development" },
    { title: "Digital marketing" },
    { title: "Mobile app" },
    { title: "SEO" },
    { title: "User testing" },
  ];

  // Resources links data
  const resourcesLinks = [
    { title: "Blog" },
    { title: "Case study" },
    { title: "Testimonials" },
  ];

  // Social links data
  const socialLinks = [{ title: "Instagram" }, { title: "Figma" }];

  return (
    <footer className="flex flex-col w-full items-start gap-20 pt-20 pb-10 px-[70px] bg-black">
      <div className="flex items-start justify-between relative self-stretch w-full">
        {/* Company Column */}
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="w-fit [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5">
            Company
          </h3>

          {companyLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center gap-1">
                <a
                  href="#"
                  className="w-fit [font-family:'Archivo',Helvetica] font-medium text-[#ffffff99] text-base tracking-[0.32px] leading-5 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden">
            <div className="w-14 h-5" />
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="w-fit [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5">
            Services
          </h3>

          {servicesLinks.slice(0, 4).map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center gap-1">
                <a
                  href="#"
                  className="w-fit [font-family:'Archivo',Helvetica] font-medium text-[#ffffff99] text-base tracking-[0.32px] leading-5 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </div>
            </div>
          ))}

          {servicesLinks.slice(4).map((link, index) => (
            <a
              key={index + 4}
              href="#"
              className="w-fit [font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0.32px] leading-5 hover:text-white transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Resources Column */}
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="w-fit [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5">
            Resources
          </h3>

          {resourcesLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center gap-1">
                <a
                  href="#"
                  className="w-fit [font-family:'Archivo',Helvetica] font-medium text-[#ffffff99] text-base tracking-[0.32px] leading-5 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden">
            <div className="w-[60px] h-5" />
          </div>
        </div>

        {/* Follow us Column */}
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="w-fit [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5">
            Follow us
          </h3>

          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center gap-1">
                <a
                  href="#"
                  className="w-fit [font-family:'Archivo',Helvetica] font-medium text-[#ffffff99] text-base tracking-[0.32px] leading-5 hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden">
            <div className="w-24 h-5" />
          </div>

          <div className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden">
            <div className="w-[60px] h-5" />
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col w-[400px] items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="w-[37.98px] h-[42px] bg-[url(/group-3.png)] bg-[100%_100%]" />
            <div className="w-fit [font-family:'Agrandir-GrandHeavy',Helvetica] font-normal text-white text-base tracking-[0] leading-[17.3px]">
              Shadient.co
            </div>
          </div>

          <div className="self-stretch [font-family:'Agrandir-WideLight',Helvetica] font-light text-[#ffffff99] text-sm tracking-[0.28px] leading-5">
            Get latest updates
          </div>

          <div className="flex items-center gap-[12.98px]">
            <div className="w-[260px] bg-[#0f0f0f] rounded-[34px]">
              <div className="w-[260px] gap-[3.25px]">
                <div className="flex h-[43px] items-center p-[12.98px] rounded-[24.34px] border-[1.62px] border-solid border-[#a0aebf]">
                  <div className="flex w-[234px] items-center gap-[3.25px]">
                    <Input
                      className="border-none bg-transparent [font-family:'Agrandir-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0.26px] leading-[16.2px] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex items-start justify-center gap-6 self-stretch w-full">
        <div className="flex flex-col items-center justify-center gap-2.5 rounded-lg overflow-hidden">
          <div className="flex items-center justify-center gap-1">
            <div className="w-fit [font-family:'Agrandir-Regular',Helvetica] font-normal text-[#ffffff99] text-base tracking-[0.32px] leading-5">
              Created by Shadient.co
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
