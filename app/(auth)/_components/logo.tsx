import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-black p-0 m-0">
        <Image 
          src="/streamhive.svg"
          alt="StreamHive"
          height={120} 
          width={120} 
          className="border-none" 
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">StreamHive</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Stream</p>
      </div>
    </div>
  );
};
