"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { LogOutIcon, MenuIcon } from "lucide-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { items } from "@/constants/menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { LightDarkToggle } from "./ui/light-dark-toggle";

export default function MobileMenu({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav
      className={cn(
        "flex justify-between bg-background rounded-0 px-4 py-2 items-center z-40 sticky top-0 left-0 right-0",
        className
      )}
    >
      <Drawer
        direction="left"
        open={mobileMenuOpen}
        onOpenChange={(open) => setMobileMenuOpen(open)}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DrawerTitle></DrawerTitle>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent className="py-12 bg-background">
          <nav className="flex flex-col justify-between">
            {items.map((item, i) => (
              <Link
                href={item.url}
                key={i}
                className="flex items-center gap-2 px-4 py-4 border-b-2 hover:bg-blue-500"
              >
                <item.icon />
                <span>{item.title}</span>
                <MdKeyboardDoubleArrowRight className="w-6 h-6 ml-auto" />
              </Link>
            ))}
          </nav>
          <div className="p-4 flex flex-col items-center justify-center mt-auto">
            <Button className="mb-12 bg-blue-500">New Campaign</Button>
            <div className="flex flex-row justify-between items-center w-full">
              <Avatar>
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <LightDarkToggle />
              <LogOutIcon className="cursor-pointer" />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
