"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Avatar } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { tapScale } from "@/lib/motion";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center border-b border-[#E5E7EB] transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-2 px-4 lg:px-6">
        <motion.div whileTap={tapScale}>
          <SidebarTrigger className="text-[#1F2A37] hover:bg-[#F3F4F6]" />
        </motion.div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-2 py-1">
            <Image
              src="/Vector.png"
              alt="Coins"
              width={12}
              height={12}
              className="size-3"
              unoptimized
            />
            <span className="text-sm text-[13px] font-medium text-emerald-700">
              450000/550000
            </span>

            <motion.button
              type="button"
              whileTap={tapScale}
              className="rounded-md bg-emerald-600 px-3 py-1 text-[12px] font-medium cursor-pointer text-white hover:bg-emerald-700"
            >
              Booster Plan
            </motion.button>
          </div>
          <Avatar className="size-7">
            <Image
              src="/doe.png"
              alt="User"
              width={100}
              height={100}
              className="size-8 rounded-full object-cover"
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
}
