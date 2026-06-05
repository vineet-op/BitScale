"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronUpIcon, CommandIcon } from "lucide-react";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-auto gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-[12.56px] font-medium text-[#1F2A37] shadow-none hover:bg-[#F3F4F6]">
          <CommandIcon className="size-4 shrink-0" />
          <span className="flex-1 text-left">Get Support at Bitscale</span>
          <ChevronUpIcon className="size-4 text-[#9CA3AF]" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
