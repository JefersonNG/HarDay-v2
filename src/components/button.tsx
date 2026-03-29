import type React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import Text from "./text";

const buttonVariantsProps = cva(
  "rounded-lg bg-yellow p-1 flex items-center justify-center hover:brightness-125 flex-1 cursor-pointer",
  {
    variants: {
      disabled: {
        true: "pointer-events-none opacity-30",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

interface ButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof buttonVariantsProps> {
  disabled?: boolean;
}

export default function Button({
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariantsProps({ disabled, className })} {...props}>
      <Text variant="title-md" className="text-gray-800">
        {children}
      </Text>
    </button>
  );
}
