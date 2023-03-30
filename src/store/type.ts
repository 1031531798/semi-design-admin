import { CSSProperties, ReactNode } from "react";

export interface TabProps {
  itemKey: string;
  tab: string;
  path?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  closable?: boolean
}
