"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Building2Icon, PlusIcon, UsersIcon } from "lucide-react";
import { FindPeopleDialog } from "@/components/find-people-dialog";
import { duration, easeOut, staggerContainer, tapScale } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easeOut },
  },
};

export function DashboardWelcome() {
  const [findPeopleOpen, setFindPeopleOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-6"
      variants={staggerContainer}
      initial={false}
      animate="visible"
    >
      <motion.div variants={item}>
        <h1 className="text-[18px] font-semibold leading-tight text-[#1F2A37]">
          Welcome back, Tim!
        </h1>
        <p className="mt-1 text-[14px] font-normal text-[#6B7280]">
          Here&apos;s your daily scoop on Bitscale!
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="flex flex-wrap items-center gap-2"
      >
        <motion.div whileTap={tapScale}>
          <Button
            variant="outline"
            className="h-9 cursor-pointer gap-2 border-[#E5E7EB] bg-white text-[12.56px] font-medium text-[#1F2A37] shadow-none hover:bg-gray-50"
          >
            <Building2Icon className="size-4 text-emerald-600" />
            Find Companies
          </Button>
        </motion.div>
        <motion.div whileTap={tapScale}>
          <Button
            variant="outline"
            className="h-9 cursor-pointer gap-2 border-[#E5E7EB] bg-white text-[12.56px] font-medium text-[#1F2A37] shadow-none hover:bg-gray-50"
            onClick={() => setFindPeopleOpen(true)}
          >
            <UsersIcon className="size-4 text-violet-600" />
            Find People
          </Button>
        </motion.div>
        <motion.div whileTap={tapScale}>
          <Button className="h-9 cursor-pointer gap-2 bg-[#1F2A37] text-[12.56px] font-medium text-white hover:bg-[#1F2A37]/90">
            <PlusIcon className="size-4" />
            New Grid
          </Button>
        </motion.div>
      </motion.div>

      <FindPeopleDialog open={findPeopleOpen} onOpenChange={setFindPeopleOpen} />
    </motion.div>
  );
}
