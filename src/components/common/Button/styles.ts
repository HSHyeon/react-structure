import { ButtonSize, ButtonVariant, ButtonColor } from "@/types/button.d";

export const BASE_BUTTON_STYLES = `
  inline-flex
  items-center
  justify-center
  rounded-xl
  font-medium
  transition-all
  duration-200
  disabled:opacity-50
  disabled:cursor-not-allowed
  gap-2
`;

export const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
	icon: "h-[3.2rem] w-[3.2rem]",
	sm: "h-[4rem] px-4 text-body-sm",
	md: "h-[4.8rem] px-6 text-body",
	lg: "h-[5.6rem] px-8 text-body",
	full: "h-[5.6rem] w-full px-8 text-body",
};

export const BUTTON_VARIANT_STYLES: Record<ButtonVariant, Record<ButtonColor, string>> = {
	filled: {
		primary: "bg-primary text-white hover:bg-primary-600 active:bg-primary-700",
		"primary-500": "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
		"primary-400": "bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600",
		icon: "",
		white: "",
		gray: "",
	},
	text: {
		primary: "text-primary hover:bg-primary/10 active:bg-primary/20",
		"primary-500": "text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20",
		"primary-400": "text-primary-400 hover:bg-primary-400/10 active:bg-primary-400/20",
		icon: "",
		white: "",
		gray: "",
	},
	icon: {
		primary: "",
		"primary-500": "",
		"primary-400": "",
		icon: "",
		white: "",
		gray: "",
	},
	"icon-round": {
		primary: "",
		"primary-500": "",
		"primary-400": "",
		icon: "",
		white: "",
		gray: "",
	},
};