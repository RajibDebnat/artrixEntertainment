import { cn } from "@/lib/utils";
import { Button } from "./moving-border";
import Reveal from "./Reveal";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      <Reveal width="contentfit" direction="x">

      {header}
        <Button>
      <div className="transition duration-200 group-hover/bento:translate-x-2 text-primary-yellow text-8xl  max-md:text-6xl max-sm:text-5xl">
          <span className=" inline-block mb-2">{icon}</span>
          <div className="mt-2 mb-2  font-bebas tracking-wider  font-bold text-neutral-600 text-7xl dark:text-neutral-200 max-sm:text-6xl ">
            {title}
          </div>
          <div className=" max-md:text-xs font-normal text-[18px]  leading-[1.6] font-roboto  text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
      </div>
        </Button>
      </Reveal>
    </div>
  );
};
