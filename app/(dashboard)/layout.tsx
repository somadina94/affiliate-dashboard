import MobileMenu from "@/components/mobile-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { items } from "@/constants/menu";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider className="hidden md:flex">
        <Sidebar>
          <SidebarContent className="mt-12">
            <SidebarMenu className="space-y-4">
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
            </SidebarMenu>
          </SidebarContent>
          <Button className="mt-auto mx-4 bg-blue-500 hover:bg-blue-700 text-white">
            New Campaign
          </Button>
          <SidebarFooter className="flex flex-row justify-between items-center">
            <Avatar>
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <LightDarkToggle />
            <LogOutIcon className="cursor-pointer" />
          </SidebarFooter>
        </Sidebar>
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <main className="md:hidden">
        <MobileMenu className="md:hidden" />
        {children}
      </main>
    </div>
  );
}
