import { forwardRef } from "react";

import type { BaseInputProps } from "@/types/input";

import BaseInput from "./BaseInput";

// 현재 이 컴포넌트는 memo를 사용하지 않고 있어요!
// 이유:
// 1. BaseInput을 단순히 감싸는 얇은 래퍼(wrapper) 컴포넌트예요
// 2. 추가적인 로직이 거의 없어서 memo의 이점이 크지 않을 수 있어요
// 3. 불필요한 최적화를 피하고 코드를 단순하게 유지하는 것이 더 좋을 수 있어요

export type TextInputProps = Omit<BaseInputProps, "type">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	return (
		<BaseInput
			type="text"
			ref={ref}
			{...props}
		/>
	);
});

TextInput.displayName = "TextInput";

export default TextInput;