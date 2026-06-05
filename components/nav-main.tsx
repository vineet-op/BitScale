"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronsUpDownIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    badge?: React.ReactNode;
  }[];
}) {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupContent className="flex flex-col gap-1 px-3 pt-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-9 gap-2  bg-white px-3 text-[12.56px] font-medium text-[#1F2A37] shadow-none">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#E5E7EB] text-[10px] font-semibold text-[#1F2A37]">
                G
              </span>
              <span className="flex-1">GTM Spaces</span>
              <ChevronsUpDownIcon className="size-4 text-[#9CA3AF]" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <p className="px-3 pt-4 text-[11px] font-medium uppercase tracking-wide text-[#9CA3AF]">
          Home
        </p>

        <SidebarMenu className="px-0">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={item.isActive}
                className={`h-9 rounded-none px-4 text-[12.56px] font-medium text-[#1F2A37] ${
                  item.isActive
                    ? "border-r-2 border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    : ""
                }`}
              >
                {item.icon}
                <span className="flex-1">{item.title}</span>
                {item.badge}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
