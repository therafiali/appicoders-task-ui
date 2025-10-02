import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import type React from "react";

type BaseProps = {
  as?: "button" | "a";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { as?: "button" };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { as: "a" };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-6 py-4 text-white font-semibold tracking-wide shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-colors focus:outline-none focus:ring-2 focus:ring-white/40";

const gradientRed = "bg-gradient-to-b from-[#A70E19] to-[#5C0A10] hover:from-[#B4101D] hover:to-[#6A0B12]";

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ as = "button", className, children, ...props }, ref) => {
    const classes = cx(baseStyles, gradientRed, className);

    if (as === "a") {
      const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);

export default Button;


