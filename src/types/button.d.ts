export type ButtonSize = "sm" | "md" | "lg" | "full" | "icon";
export type ButtonVariant = "filled" | "text" | "icon" | "icon-round";
export type ButtonColor = "primary" | "primary-500" | "primary-400" | "icon" | "white" | "gray";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}