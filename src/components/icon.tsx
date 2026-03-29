import type React from "react";

export interface IconProps extends React.ComponentProps<"svg"> {
  icon: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ icon: SvgComponent, ...props }: IconProps) {
  return <SvgComponent {...props} />;
}
