import clsx from "clsx";
import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { LinkType } from "../../../../lib/sanity/types/linkType";
import { resolveUrl } from "../../../../lib/utils/resolveUrl";

export const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: string | LinkType | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
      ariaLabel: string;
    }
  >
> = ({ to, target, children, ariaLabel, className, prefetch, ...props }) => {
  if (!to) {
    return <span className={clsx(className)} {...props}>{children}</span>;
  } else if (typeof to === "object") {
    const { openTheLinkinANewWindow } = to;
    const url = resolveUrl(to);
    return (url ? <NextLink
      href={url || "#"}
      aria-label={ariaLabel}
      rel={target ?? openTheLinkinANewWindow ? "noopener noreferrer" : ""}
      className={clsx(className)}
      target={target ?? openTheLinkinANewWindow ? "_blank" : "_self"}
      {...props}
    >
      {children}
    </NextLink> :
      <NextLink
        href={"#"}
        aria-label={ariaLabel}
        rel={target ?? openTheLinkinANewWindow ? "noopener noreferrer" : ""}
        className={clsx(className)}
        target={target ?? openTheLinkinANewWindow ? "_blank" : "_self"}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
  return (
    <NextLink
      href={to || "#"}
      target={target}
      rel={target ? "noopener noreferrer" : ""}
      {...props}
      aria-label={ariaLabel}
      prefetch={prefetch ?? false}
      className={clsx(className)}
    >
      {children}
    </NextLink>
  );
};
export default Link;
