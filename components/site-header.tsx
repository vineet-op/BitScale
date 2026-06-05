import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center border-b border-[#E5E7EB] transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-end gap-2 px-4 lg:px-6">
        <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-2 py-1">
          <Image
            src="/Vector.png"
            alt="Coins"
            width={12}
            height={12}
            className="size-3"
            unoptimized
          />
          <span className="text-[13px] font-medium text-emerald-700 text-sm">
            450000/550000
          </span>

          <button
            type="button"
            className="rounded-md bg-emerald-600 text-[12px] font-medium text-white px-3 py-1 hover:bg-emerald-700"
          >
            Booster Plan
          </button>
        </div>
        <Avatar className="size-7">
          <Image
            src="/doe.png"
            alt="User"
            width={100}
            height={100}
            className="size-8  rounded-full object-cover"
          />
        </Avatar>
      </div>
    </header>
  );
}
