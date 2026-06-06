"use client";

import Image from "next/image";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { motion } from "motion/react";
import { ChevronRightIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { duration, easeOut } from "@/lib/motion";

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
      <SidebarGroupContent className="flex flex-col gap-1">
        <div className="border-b border-[#E5E7EB] pb-3 pt-3">
          <SidebarMenu className="px-3">
            <SidebarMenuItem>
              <SidebarMenuButton className="h-9 gap-2 rounded-none bg-white px-0 text-[12.56px] font-medium text-[#1F2A37] shadow-none">
                <div className="flex items-center">
                  <Image
                    src="/people1.jpg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0 rounded-full object-cover"
                  />
                  <Image
                    src="/people2.jpg"
                    alt=""
                    width={24}
                    height={24}
                    className="-ml-2 size-6 shrink-0 rounded-full object-cover"
                  />
                </div>
                <span className="flex-1 font-medium">GTM Spaces</span>
                <ChevronsUpDownIcon className="size-4 text-[#9CA3AF]" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

        <p className="px-3 pt-4 text-[11px] font-medium uppercase tracking-wide text-[#9CA3AF]">
          Home
        </p>

        <SidebarMenu className="px-3">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={item.isActive}
                className={cn(
                  "h-9 px-3 text-[12.56px] font-medium text-[#1F2A37] cursor-pointer",
                  item.isActive
                    ? "rounded-lg bg-[#F3F4F6] text-[#2563EB] hover:bg-[#F3F4F6] hover:text-[#2563EB]"
                    : "rounded-none",
                )}
              >
                {item.icon}
                <span className="flex-1">{item.title}</span>
                {item.isActive ? (
                  <motion.span
                    className="inline-flex shrink-0"
                    whileHover={{ x: 2 }}
                    transition={{ duration: duration.fast, ease: easeOut }}
                  >
                    <ChevronRightIcon className="size-4 text-[#2563EB]" />
                  </motion.span>
                ) : (
                  item.badge
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
