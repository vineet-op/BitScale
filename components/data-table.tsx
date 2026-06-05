"use client";

import * as React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BoltIcon,
  Building,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisIcon,
  FileDown,
  ListIcon,
  MapPinIcon,
  SearchIcon,
  StarIcon,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ─── Types ───────────────────────────────────────────────────────────────────

export type GridRow = {
  id: number;
  name: string;
  editedBy: string;
  lastEdited: string;
  starred?: boolean;
  expanded?: boolean;
  highlighted?: boolean;
  icons?: string[];
};

// ─── Editor avatars ───────────────────────────────────────────────────────────

const editorAvatars: Record<string, string> = {
  "Sam Taylor": "/peoplejpg.jpg",
  "Chris Parker": "/peoplejpg.jpg",
  "Jone Doe": "/doe.png",
  "Alex Morgan": "/doe.png",
  "Drew Wilson": "/peoplejpg.jpg",
};

function EditorAvatar({ name }: { name: string }) {
  const src = editorAvatars[name] ?? "/doe.png";
  return (
    <Image
      src={src}
      alt={name}
      width={100}
      height={100}
      className="size-6 shrink-0 rounded-full object-cover"
    />
  );
}

// ─── Grid icon system ─────────────────────────────────────────────────────────
// Each entry is either { type: "img", src } or { type: "icon", Icon, bg, color }

type GridIconDef =
  | { type: "img"; src: string }
  | { type: "icon"; Icon: LucideIcon; bg: string; color: string };

const gridIconMap: Record<string, GridIconDef> = {
  // image-based
  linkedin: { type: "img", src: "/linkedin.png" },
  google: { type: "img", src: "/google.png" },
  maps: { type: "img", src: "/map.png" },
  fly: { type: "img", src: "/fly.png" },
  clock: { type: "img", src: "/clock.png" },
  hubspot: { type: "img", src: "/hubspot.png" },
  // lucide-based
  building: { type: "icon", Icon: Building,    bg: "#D1FAE5", color: "#059669" },
  person:   { type: "icon", Icon: UsersRound,  bg: "#EDE9FE", color: "#7C3AED" },
  csv:      { type: "icon", Icon: FileDown,    bg: "#FEF3C7", color: "#D97706" },
  people:   { type: "icon", Icon: UsersRound,  bg: "#EDE9FE", color: "#7C3AED" },
  pin:      { type: "icon", Icon: MapPinIcon,  bg: "#DCFCE7", color: "#16A34A" },
  bolt:     { type: "icon", Icon: BoltIcon,    bg: "#FEE2E2", color: "#DC2626" },
};

// Shared wrapper style (21×21, rounded-lg, border, shadow)
const badgeBase =
  "relative flex size-[21px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#F1F1EF] shadow-[2px_2px_4px_0px_#0000000A]";

function GridIconBadge({ iconKey, index }: { iconKey: string; index: number }) {
  const def = gridIconMap[iconKey];
  if (!def) return null;

  if (def.type === "img") {
    return (
      <div className={badgeBase} style={{ zIndex: index + 1 }}>
        <Image
          src={def.src}
          alt={iconKey}
          width={10.5}
          height={10.5}
          unoptimized
          className="object-contain"
          style={{ width: "10.5px", height: "10.5px" }}
        />
      </div>
    );
  }

  const { Icon, bg, color } = def;
  return (
    <div className={badgeBase} style={{ background: bg, zIndex: index + 1 }}>
      <Icon
        style={{ color, width: "10.5px", height: "10.5px" }}
        className="shrink-0"
      />
    </div>
  );
}

function OverlappingGridIcons({ icons }: { icons?: string[] }) {
  if (!icons?.length) return null;
  return (
    <div className="flex items-center" style={{ gap: "-6px" }}>
      {icons.slice(0, 3).map((key, i) => (
        <div key={`${key}-${i}`} style={{ marginLeft: i > 0 ? "-8px" : 0 }}>
          <GridIconBadge iconKey={key} index={i} />
        </div>
      ))}
    </div>
  );
}

// ─── Name cell ────────────────────────────────────────────────────────────────

function GridNameCell({ row }: { row: GridRow }) {
  return (
    <div className="flex items-center gap-2">
      {row.expanded && (
        <ChevronDownIcon className="size-4 shrink-0 text-[#9CA3AF]" />
      )}
      <StarIcon
        className={cn(
          "size-4 shrink-0",
          row.starred
            ? "fill-amber-400 text-amber-400"
            : "fill-none text-gray-300",
        )}
      />
      <OverlappingGridIcons icons={row.icons} />
      <span
        className={cn(
          "text-[13px] text-[#1F2A37]",
          row.highlighted && "rounded border border-[#2563EB] px-2 py-0.5",
        )}
      >
        {row.name}
      </span>
    </div>
  );
}

// ─── Table ───────────────────────────────────────────────────────────────────

function GridTable({ data }: { data: GridRow[] }) {
  const [search, setSearch] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);

  const filtered = React.useMemo(() => {
    const q = search.toLowerCase();
    const rows = q
      ? data.filter((row) => row.name.toLowerCase().includes(q))
      : data;
    return [...rows].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    );
  }, [data, search, sortAsc]);

  const tableHead = (
    <TableHeader>
      <TableRow className="border-[#E5E7EB] hover:bg-transparent">
        <TableHead className="h-10 pl-6 text-[12px] font-medium text-[#1A202C]">
          <button
            type="button"
            className="flex items-center gap-1 hover:text-[#1F2A37]"
            onClick={() => setSortAsc((v) => !v)}
          >
            Name
            {sortAsc ? (
              <ChevronUpIcon className="size-3.5" />
            ) : (
              <ChevronDownIcon className="size-3.5" />
            )}
          </button>
        </TableHead>
        <TableHead className="h-10 text-[12px] font-medium text-[#1A202C]">
          Edited by
        </TableHead>
        <TableHead className="h-10 text-[12px] font-medium text-[#1A202C]">
          Last edited
        </TableHead>
        <TableHead className="h-10 pr-6 text-right text-[12px] font-medium text-[#1A202C]">
          Actions
        </TableHead>
      </TableRow>
    </TableHeader>
  );

  function BodyRow({ row }: { row: GridRow }) {
    return (
      <TableRow className="border-[#E5E7EB] hover:bg-[#F9FAFB]">
        <TableCell className="py-3 pl-6">
          <GridNameCell row={row} />
        </TableCell>
        <TableCell className="py-3">
          <div className="flex items-center gap-2">
            <EditorAvatar name={row.editedBy} />
            <span className="text-[13px] text-[#1F2A37]">{row.editedBy}</span>
          </div>
        </TableCell>
        <TableCell className="py-3 text-[13px] text-[#1A202C]">
          {row.lastEdited}
        </TableCell>
        <TableCell className="py-3 pr-6 text-right">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-[#1A202C] hover:bg-transparent"
          >
            <EllipsisIcon className="size-4" />
          </Button>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Tab bar + search */}
      <div className="flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <TabsList className="h-auto w-fit gap-6 rounded-none border-b border-[#E5E7EB] bg-transparent p-0">
          <TabsTrigger
            value="my-grids"
            className="-mb-px cursor-pointer h-auto flex-none rounded-none border-b-2 border-transparent bg-transparent px-0 pb-2.5 pt-0 text-[13px] font-medium text-[#6B7280] shadow-none after:hidden hover:text-[#6B7280] data-[state=active]:border-b-[#1A56DB] data-[state=active]:bg-transparent data-[state=active]:text-[#1A56DB] data-[state=active]:shadow-none"
          >
            My Grids
          </TabsTrigger>
          <TabsTrigger
            value="starred"
            className="-mb-px cursor-pointer h-auto flex-none rounded-none border-b-2 border-transparent bg-transparent px-0 pb-2.5 pt-0 text-[13px] font-medium text-[#6B7280] shadow-none after:hidden hover:text-[#6B7280] data-[state=active]:border-b-[#1A56DB] data-[state=active]:bg-transparent data-[state=active]:text-[#1A56DB] data-[state=active]:shadow-none"
          >
            Starred
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <Input
              placeholder="Search grids and workbooks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full min-w-[220px] bg-[#F3F4F6] pl-9 text-[13px] shadow-none sm:w-[280px]"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="size-9 shrink-0 rounded-full bg-[#F3F4F6] cursor-pointer"
          >
            <ListIcon className="size-4 text-[#6B7280]" />
          </Button>
        </div>
      </div>

      {/* My Grids tab */}
      <TabsContent value="my-grids" className="mt-0">
        <div className="overflow-hidden border-t border-[#E5E7EB]">
          <Table>
            {tableHead}
            <TableBody>
              {filtered.map((row) => (
                <BodyRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      {/* Starred tab */}
      <TabsContent value="starred" className="mt-0">
        <div className="overflow-hidden border-t border-[#E5E7EB]">
          <Table>
            {tableHead}
            <TableBody>
              {filtered
                .filter((row) => row.starred)
                .map((row) => (
                  <BodyRow key={row.id} row={row} />
                ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </div>
  );
}

export function DataTable({ data }: { data: GridRow[] }) {
  return (
    <Tabs defaultValue="my-grids" className="w-full">
      <GridTable data={data} />
    </Tabs>
  );
}
