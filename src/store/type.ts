import { CSSProperties, ReactNode } from "react";

export interface TabProps {
  itemKey: string;
  tab: ReactNode;
  path?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  closable?: boolean
}