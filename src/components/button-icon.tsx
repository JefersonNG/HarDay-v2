import { cva, type VariantProps } from "class-variance-authority";
import Icon, { type IconProps } from "./icon";

const buttonVariantsProps = cva(
  "fill-yellow-dark cursor-pointer p-1 hover:brightness-125 flex items-center group",
);

interface ButtonIconProps
  extends
    React.ComponentProps<"button">,
    Pick<IconProps, "icon">,
    VariantProps<typeof buttonVariantsProps> {
  size?: string;
}

export default function ButtonIcon({
  className,
  size,
  icon,
  children,
  ...props
}: ButtonIconProps) {
  return (
    <button className={buttonVariantsProps({ className })} {...props}>
      {<Icon className={size} icon={icon} />}
    </button>
  );
}
