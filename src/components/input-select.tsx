import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const selectWrapperVariants = cva(
  "rounded-lg border border-gray-500 p-2 bg-gray-500 cursor-pointer has-user-invalid:border-error has-checked:border-yellow hover:brightness-125 ",
  {
    variants: {
      disabled: {
        true: "bg-transparent pointer-events-none opacity-30 has-user-invalid:border-gray-500",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

const selectTimeVariants = cva(`appearance-none opacity-0`);

interface SelectTime
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof selectTimeVariants> {
  disabled?: boolean;
}

export default function SelectTime({
  children,
  disabled,
  className,
  ...props
}: SelectTime) {
  return (
    <label className={selectWrapperVariants({ disabled, className })}>
      <input type="radio" className={selectTimeVariants()} {...props} />
      <Text>{children}</Text>
    </label>
  );
}
