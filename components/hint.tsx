import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface HintProps {
    label: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
};

export const Hint = ({
    label,
    children,
    asChild = false,
    side = "top",
    align = "center",
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="rounded-md p-2 bg-white text-black shadow-lg z-[50]" // High z-index for overlay
                    side={side}
                    align={align}
                    style={{
                        zIndex: 50, // Ensures tooltip is above sidebar and other elements
                    }}
                >
                    <p className="font-semibold">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
