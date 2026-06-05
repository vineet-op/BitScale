import { Button } from "@/components/ui/button";
import { Building2Icon, PlusIcon, UsersIcon } from "lucide-react";

export function DashboardWelcome() {
  return (
    <div className="flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
      <div>
        <h1 className="text-[18px] font-semibold leading-tight text-[#1F2A37]">
          Welcome back, Tim!
        </h1>
        <p className="mt-1 text-[14px] font-normal text-[#6B7280]">
          Here&apos;s your daily scoop on Bitscale!
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          className="h-9 gap-2 border-[#E5E7EB] bg-white text-[12.56px] font-medium text-[#1F2A37] shadow-none hover:bg-gray-50"
        >
          <Building2Icon className="size-4 text-emerald-600" />
          Find Companies
        </Button>
        <Button
          variant="outline"
          className="h-9 gap-2 border-[#E5E7EB] bg-white text-[12.56px] font-medium text-[#1F2A37] shadow-none hover:bg-gray-50"
        >
          <UsersIcon className="size-4 text-violet-600" />
          Find People
        </Button>
        <Button className="h-9 gap-2 bg-[#1F2A37] text-[12.56px] font-medium text-white hover:bg-[#1F2A37]/90">
          <PlusIcon className="size-4" />
          New Grid
        </Button>
      </div>
    </div>
  );
}
