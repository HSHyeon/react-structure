import { forwardRef, memo, useState } from "react";

import type { BaseInputProps } from "@/types/input";

import BaseInput from "./BaseInput";
import IconButton from "../IconButton";
import { EyeIcon } from "../Icons";

export type PasswordInputProps = Omit<BaseInputProps, "type" | "rightElement">;

const PasswordInput = memo(forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const VisibilityToggle = (
		<IconButton
			icon={<EyeIcon className={isVisible ? "opacity-70" : "opacity-100"} />}
			label={isVisible ? "비밀번호 숨기기" : "비밀번호 표시"}
			color="gray"
			onClick={toggleVisibility}
		/>
	);

	return (
		<BaseInput
			type={isVisible ? "text" : "password"}
			ref={ref}
			rightElement={VisibilityToggle}
			{...props}
		/>
	);
}));

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;