"use client";

import { BitscaleLogo } from "@/components/bitscale-logo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronUpIcon } from "lucide-react";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-auto flex-col items-stretch gap-2 rounded-lg bg-[#F9FAFB] p-3 shadow-none hover:bg-[#F3F4F6]">
          <div className="flex items-center justify-between">
            <BitscaleLogo className="h-5 w-auto" />
            <ChevronUpIcon className="size-4 shrink-0 text-[#2E3238]" />
          </div>
          <span className="text-left text-[12px] font-normal text-[#6B7280]">
            Get Support at Bitscale
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
