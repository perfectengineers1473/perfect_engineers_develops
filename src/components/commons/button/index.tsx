import React from "react";
import type { PropsWithChildren } from "react";
import { ButtonType, ButtonVariantType } from "../../../../lib/sanity/types";
import Link from "../link";
import Image from "../image";
import { cn } from "../../../../lib/utils/helperFunctions";
export const buttonVariants: Record<string, string> = {
  blue: " py-[11px] px-[34px] sm:px-[42px] text-white text-base sm:text-lg font-medium capitalize bg-brand-blue rounded-[50px] leading-normal cursor-pointer border-[1px] border-brand-blue hover:bg-transparent BasicTransition hover:text-brand-blue ",
  white: "text-[18px] md:text-[20px] py-[12px] md:py-[18px] px-[50px] text-brand-blue bg-white text-brand-blue font-medium rounded-[50px]",
  transparentwithWhiteBorder: "py-[11px] px-[34px] sm:px-[42px] text-white text-base sm:text-lg font-medium capitalize bg-transparent rounded-[50px] leading-normal cursor-pointer border-[1px] border-white hover:border-brand-blue hover:bg-transparent BasicTransition hover:text-brand-blue ",
  withIcon: "flex gap-2 items-center text-[18px] md:text-[20px] py-[12px] md:py-[18px] px-[50px] text-brand-blue bg-white text-brand-blue font-medium rounded-[50px]"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
}

const Button: React.FC<
  PropsWithChildren<
    { block: any } & React.DetailedHTMLProps<ButtonProps, HTMLButtonElement>
  >
> = ({ block, className = "", ...props }) => {
  const { label, variant, link, icon } = (block || {}) as any;
  const variantClasses = buttonVariants[variant as string] ?? "";
  return block ? (
    link ? (
      <Link to={(link as any) || "#"} ariaLabel={label ?? ""} className={cn(variantClasses, className)}>
        {icon?.asset?.url &&
          <div>
            <Image alt={icon?.alt} src={icon} />
          </div>
        }
        <span>{label}</span>
      </Link>
    ) : (
      <Link to="#" ariaLabel={label ?? ""} className={cn(variantClasses, className)}>
        {icon?.asset?.url &&
          <div>
            <Image alt={icon?.alt} src={icon} />
          </div>
        }
        <span>{label}</span>
      </Link>
    )
  ) : (
    <div >
      <span >{props.children}</span>
    </div>
  );
};
export default Button;
