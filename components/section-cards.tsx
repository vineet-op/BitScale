"use client";

import Image from "next/image";
import { CheckCircle2Icon, FileCheck2Icon, PlayIcon } from "lucide-react";

const checklistItems = [
  { label: "Create your data list", done: true },
  { label: "Learn about BitAgent", done: true },
  { label: "Connect an integration", done: true },
  { label: "Customise waterfall providers", done: true },
];

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2">
      {/* Latest from Bitscale */}
      <div className="flex w-full flex-col rounded-xl bg-[#F3F7FA] px-5 py-4 md:w-full">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[13px] font-medium text-[#2563EB]">
            Latest from Bitscale
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-4 rounded-full bg-[#2563EB]" />
            <span className="size-1.5 rounded-full bg-[#93C5FD]" />
            <span className="size-1.5 rounded-full bg-[#93C5FD]" />
            <span className="size-1.5 rounded-full bg-[#93C5FD]" />
          </div>
        </div>

        <div className="flex h-[97px] gap-4">
          <div className="relative h-[97px] w-[138px] shrink-0 overflow-hidden rounded-lg">
            <Image
              src="/linkedin.png"
              alt="How to Integrate 2 Way HubSpot video thumbnail"
              fill
              className="object-cover object-top"
              sizes="138px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-7 items-center justify-center rounded-full bg-white shadow-sm">
                <PlayIcon className="ml-0.5 size-3 fill-[#1F2A37] text-[#1F2A37]" />
              </div>
            </div>
          </div>

          <div className="flex min-w-0 gap-2 flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[13px] font-medium leading-tight text-[#1F2A37]">
                How to Integrate 2 Way HubSpot
              </p>
              <p className="mt-0.5 line-clamp-2 text-[12px] font-normal leading-snug text-[#6B7280]">
                Prerequisites for this Integration is that you should have a
                HubSpot account and Copy the API key. We simple aad our API key
                through the integrations pa...
              </p>
            </div>
            <p className="text-[11px] text-[#9CA3AF]">Posted today</p>
          </div>
        </div>
      </div>

      {/* Complete product demo */}
      <div className="rounded-xl bg-[#F0F4F8] p-4">
        <div className="mb-3 flex items-start gap-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#4B5563]">
            <FileCheck2Icon className="size-4 text-white" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#1F2A37]">
              Complete product demo
            </p>
            <p className="mt-0.5 text-[12px] font-normal text-[#6B7280]">
              92% of users nailed BitScale after this walkthrough
            </p>
          </div>
        </div>

        <div className="mb-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[11px] text-[#6B7280]">Progress</span>
            <span className="text-[11px] font-medium text-[#1F2A37]">75%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
            <div className="h-full w-3/4 rounded-full bg-[#438361]" />
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-y-2">
          {checklistItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.done ? (
                <CheckCircle2Icon className="size-4 shrink-0 text-white bg-[#347FA9] rounded-full" />
              ) : null}
              <span className="text-[12px] font-normal text-[#1F2A37]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
