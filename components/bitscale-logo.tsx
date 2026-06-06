import Image from "next/image";

export function BitscaleLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/bitscale.svg"
      alt="Bitscale"
      width={266}
      height={59}
      priority
      className={className}
    />
  );
}
