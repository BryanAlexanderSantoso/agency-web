import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { name: "Company", hasDropdown: true },
    { name: "Services", hasDropdown: false },
    { name: "Resources", hasDropdown: false },
  ];

  return (
    <header className="flex w-full items-center justify-between px-[70px] py-6 sticky top-0 z-50 bg-[#0f0f0f66] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)]">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-[37.98px] h-[42px] bg-[url(/group-4.png)] bg-[100%_100%]" />
        <div className="[font-family:'Agrandir-GrandHeavy',Helvetica] font-normal text-white text-base leading-[17.3px]">
          Shadient.co
        </div>
      </div>

      {/* Navigation */}
      <NavigationMenu className="flex-1 flex justify-end">
        <NavigationMenuList className="flex">
          {navItems.map((item) => (
            <NavigationMenuItem
              key={item.name}
              className="rounded-lg overflow-hidden"
            >
              {item.hasDropdown ? (
                <>
                  <NavigationMenuTrigger className="p-3 [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5 bg-transparent hover:bg-transparent focus:bg-transparent">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      {/* Dropdown content would go here */}
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <button className="inline-flex items-center justify-center gap-1.5 p-3 [font-family:'Agrandir-TextBold',Helvetica] font-bold text-white text-base tracking-[0.32px] leading-5">
                  {item.name}
                </button>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact Button */}
      <Button
        variant="outline"
        className="px-6 py-2.5 ml-4 rounded-[1000px] border border-solid border-[#ffa800] bg-transparent hover:bg-transparent"
      >
        <span className="[font-family:'Agrandir-TextBold',Helvetica] font-bold text-yellow text-sm">
          CONTACT
        </span>
      </Button>
    </header>
  );
};
