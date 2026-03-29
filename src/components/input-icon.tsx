import { cva, type VariantProps } from "class-variance-authority";
import Icon, { type IconProps } from "./icon";

const inputVariantsWrapper = cva("flex items-center", {
  variants: {
    disabled: {
      true: "pointer-events-none opacity-30",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const inputVariantsProps = cva(
  `relative appearance-none outline-none border border-gray-500 rounded-lg pl-9 py-3 focus:border-yellow-dark text-gray-200 transition bg-transparent overflow-hidden flex-1 text-base hover:border-yellow-dark placeholder:opacity-40`,
);

const inputVariantsIcon = cva("absolute h-5 fill-yellow ");

interface InputProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof inputVariantsProps>,
    Pick<IconProps, "icon"> {
  text?: string;
  disabled?: boolean;
}

export default function InputIcon({
  children,
  icon,
  disabled,
  text,
  className,
  ...props
}: InputProps) {
  return (
    <label className={inputVariantsWrapper({ className, disabled })}>
      <Icon className={inputVariantsIcon()} icon={icon} />
      <input placeholder={text} className={inputVariantsProps()} {...props} />
    </label>
  );
}
