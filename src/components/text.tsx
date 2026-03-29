import { cva, cx, type VariantProps } from "class-variance-authority";
import React from "react";

const textVariantProps = cva("text-gray-100 p-1", {
  variants: {
    variant: {
      "title-lg": "text-[24px] text-gray-100 font-bold leading-8",
      "title-md": "text-base text-gray-200 font-bold leading-6",
      "text-base": "text-base text-gray-200",
      "text-sm": "text-sm text-gray-300",
    },
  },
  defaultVariants: {
    variant: "text-base",
  },
});

interface TextProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariantProps> {
  as?: React.ElementType;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    { className: cx(textVariantProps({ variant }), className), ...props },
    children,
  );
}
