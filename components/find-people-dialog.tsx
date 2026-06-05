"use client";

import * as React from "react";
import Image from "next/image";
import {
  BriefcaseIcon,
  BuildingIcon,
  ChevronDownIcon,
  EyeIcon,
  FileSearch,
  GlobeIcon,
  LayersIcon,
  LockIcon,
  MapPinIcon,
  SaveIcon,
  SearchIcon,
  UserRoundSearchIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ─── Filter card data ──────────────────────────────────────────────────────

type FilterItem = {
  icon: React.ReactNode;
  title: string;
  sub: string;
};

const FILTERS: FilterItem[] = [
  {
    icon: <BriefcaseIcon className="size-4 text-[#111928]" />,
    title: "Job Title",
    sub: "E.g: Manager, Software Engineer",
  },
  {
    icon: <GlobeIcon className="size-4 text-[#111928]" />,
    title: "Company Website",
    sub: "Eg: Google.com, LinkedIn.com",
  },
  {
    icon: <MapPinIcon className="size-4 text-[#111928]" />,
    title: "Person Location",
    sub: "Eg: London, Great New York City",
  },
  {
    icon: <BuildingIcon className="size-4 text-[#111928]" />,
    title: "Company Location",
    sub: "Eg: United States, UAE",
  },
  {
    icon: <UsersIcon className="size-4 text-[#111928]" />,
    title: "Company Headcount",
    sub: "E.g: 11-50, 10000+",
  },
  {
    icon: <LayersIcon className="size-4 text-[#111928]" />,
    title: "Management Level",
    sub: "E.g: Owner, Founder",
  },
];

// ─── Table column headings ─────────────────────────────────────────────────

const COLUMNS = [
  "Name",
  "Title",
  "Headline",
  "LinkedIn URL",
  "Company",
  "Company URL",
  "Company Location",
];

// ─── Main component ────────────────────────────────────────────────────────

export function FindPeopleDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={true}
        className="flex h-[90vh] max-h-[700px] w-full max-w-[960px] gap-0 overflow-hidden p-0 sm:max-w-[960px]"
      >
        {/* ── Left panel ─────────────────────────────────────────────── */}
        <div className="flex w-[340px] shrink-0 flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-6">
            <h2 className="text-[18px] font-semibold text-[#111928]">
              Find People
            </h2>
            <button className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium text-[#1F2A37] bg-[#F3F4F6] cursor-pointer">
              <ChevronDownIcon className="size-3.5 text-[#6B7280]" />
              Saved Search
            </button>
          </div>

          {/* People Keyword card — same structure as filter cards */}
          <div className="pt-3 pr-5 pb-0 pl-5">
            <div className="flex items-start gap-[6px] pb-3">
              <UserRoundSearchIcon className="size-4 -mt-0.5 shrink-0 text-[#111928]" />
              <div className="flex flex-col gap-[6px]">
                <span className="text-[14px] font-semibold leading-none text-[#111928]">
                  People Keyword
                </span>
              </div>
            </div>
            {/* Underline-only input */}
            <div className="relative pb-4">
              <SearchIcon className="absolute left-0 top-3 size-4 text-[#9CA3AF]" />
              <input
                placeholder="Enter single  keyword here..."
                className="w-full border-0 py-3 border-b border-[#E5E7EB] bg-transparent pb-2 pl-6 text-[13px] text-[#111928] outline-none placeholder:text-[#9CA3AF] focus:border-[#1F2A37]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 border-t border-[#E5E7EB]" />

          {/* Filter cards */}
          <div className="flex-1 overflow-y-auto">
            {FILTERS.map((f, i) => (
              <React.Fragment key={f.title}>
                <button className="flex w-full items-start justify-between pt-3 pr-5 pb-4 pl-5 text-left hover:bg-gray-50">
                  <div className="flex items-start gap-[6px]">
                    <div className="shrink-0 text-[#111928]">{f.icon}</div>
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[14px] font-semibold leading-none text-[#111928]">
                        {f.title}
                      </span>
                      <span className="text-[12px] font-normal leading-none text-[#6B7280]">
                        {f.sub}
                      </span>
                    </div>
                  </div>
                  {i < FILTERS.length - 1 && (
                    <ChevronDownIcon className="mt-0.5 size-4 shrink-0 text-[#6B7280]" />
                  )}
                </button>
                <div className="mx-5 border-t border-[#E5E7EB]" />
              </React.Fragment>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="flex items-center gap-3 border-t border-[#E5E7EB] px-5 py-4">
            <Button
              variant="outline"
              className="flex h-auto items-center gap-2 border-[#E5E7EB] px-3 py-2 text-[12px] font-medium text-[#1F2A37] shadow-none hover:bg-gray-50"
            >
              <FileSearch className="size-4 text-[#6B7280]" />
              Save Search
            </Button>
            <Button className="flex h-auto flex-1 items-center justify-center gap-2 bg-[#1F2A37] px-3 py-2 text-[12px] font-medium text-white hover:bg-[#1F2A37]/90">
              <EyeIcon className="size-4" />
              Preview Result
            </Button>
          </div>
        </div>

        {/* ── Right panel ────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col overflow-hidden p-5">
          {/* Table card with border + shadow */}

          {/* Info bar */}
          <div className="flex flex-col pt-4 pb-2">
            {/* Row 1: pill right-aligned */}
            <div className="flex justify-end">
              <div className="flex items-center gap-1.5 rounded-full bg-[#FEF3E2] px-3 py-1">
                <SearchIcon className="size-3 text-[#CB912E]" />
                <span className="text-[12px] text-[#CB912E]">8000/50000</span>
              </div>
            </div>
            {/* Row 2: gray text left, unlock text right */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] tracking-tight text-[#6B7280]">
                Found 0 companies. Click preview to view results
              </span>
              <div className="flex items-center gap-1.5">
                <LockIcon className="size-3 text-[#CB912E]" />
                <span className="text-[12px] tracking-tight font-medium text-[#CB912E]">
                  Unlock <span className="font-bold">100,000</span> leads with
                  Enterprise Plan*
                </span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div
            className="flex max-h-[470px] flex-1 flex-col overflow-hidden rounded-lg border border-[#E5E7EB]"
            style={{
              boxShadow:
                "0px 1px 3px 0px #0000001A, 0px 1px 2px -1px #0000001A",
            }}
          >
            <div className="flex-1 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#E5E7EB] hover:bg-transparent">
                    {COLUMNS.map((col) => (
                      <TableHead
                        key={col}
                        className="whitespace-nowrap px-4 py-3 text-[11px] font-semibold tracking-wide text-[#6B7280] uppercase"
                      >
                        {col}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Empty state */}
                  <tr>
                    <td colSpan={COLUMNS.length}>
                      <div className="flex flex-col items-center justify-center gap-3 py-16">
                        <Image
                          src="/Card.png"
                          alt="No results"
                          width={160}
                          height={160}
                          className="object-contain"
                        />
                        <p className="max-w-[280px] text-center text-[13px] leading-relaxed text-[#9CA3AF]">
                          Start your Company search, preview, and import
                          companies for enrichment by applying any filter in the
                          left panel.
                          <br />
                          OR
                          <br />
                          Import companies from saved Search.
                        </p>
                      </div>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </div>
          {/* end table card */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
