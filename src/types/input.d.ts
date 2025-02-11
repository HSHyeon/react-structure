export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "filled" | "outlined";
export type ValidationState = "default" | "invalid" | "valid";

export interface InputStyleProps {
  size?: InputSize;
  variant?: InputVariant;
  validationState?: ValidationState;
  fullWidth?: boolean;
}

export interface BaseInputProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  InputStyleProps {
  icon?: React.ReactNode;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
  containerClassName?: string;
  rightElement?: React.ReactNode;
}

export interface TextAreaProps extends
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
  InputStyleProps {
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
  containerClassName?: string;
}