"use client";

import * as React from "react";

import { BitscaleLogo } from "@/components/bitscale-logo";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  PlugIcon,
  BookOpenIcon,
  SettingsIcon,
  RocketIcon,
  Book,
} from "lucide-react";
import { cn } from "@/lib/utils";

const data = {
  Home: [
    {
      title: "My Dashboard",
      url: "#",
      icon: <LayoutDashboardIcon className="size-4" />,
      isActive: true,
    },
    {
      title: "Playbooks",
      url: "#",
      icon: <Book className="size-4" />,
    },
    {
      title: "Integrations",
      url: "#",
      icon: <PlugIcon className="size-4" />,
      badge: (
        <span className="flex size-[26px] px-5 py-1 shrink-0 items-center justify-center rounded-lg bg-[#FBF3DB]">
          <RocketIcon className="size-3 text-[#CB912E]" />
        </span>
      ),
    },
  ],

  other: [
    {
      name: "Documentation",
      url: "#",
      icon: <BookOpenIcon className="size-4" />,
    },
    {
      name: "Settings",
      url: "#",
      icon: <SettingsIcon className="size-4" />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      variant="sidebar"
      {...props}
      className={cn(
        "border-[#E5E7EB] bg-white p-0 [&_[data-slot=sidebar-inner]]:rounded-none [&_[data-slot=sidebar-inner]]:bg-white",
        props.className,
      )}
    >
      <SidebarHeader className="border-b border-[#E5E7EB] p-0 px-4 py-2.5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-auto py-0 hover:bg-transparent"
            >
              <a href="#" className="flex items-center">
                <BitscaleLogo className="h-7 w-auto" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-0">
        <NavMain items={data.Home} />
        <NavDocuments items={data.other} />
      </SidebarContent>
      <SidebarFooter className="border-t border-[#E5E7EB] p-0 px-3 py-3">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
