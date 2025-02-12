import PasswordInput from "../common/Input/PasswordInput";
import TextInput from "../common/Input/TextInput";
import { EmailIcon, LockIcon } from "../common/Icons";
import { useLoginForm } from "./useLoginForm";
import BaseButton from "../common/Button/BaseButton";

export interface LoginFormProps {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
    const {
        email,
        password,
        errors,
        isLoading,
        handleSubmit,
        handleEmailChange,
        handlePasswordChange,
    } = useLoginForm({ onSuccess, onError });

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-full max-w-[48.6rem]"
            noValidate
        >
            <h2 className="text-heading-1 text-white mb-10">Login</h2>
            <TextInput
                label="이메일"
                placeholder="이메일을 입력하세요"
                icon={<EmailIcon />}
                required
                value={email}
                onChange={handleEmailChange}
                validationState={errors.email ? "invalid" : "default"}
                error={errors.email}
                disabled={isLoading}
            />
            <PasswordInput
                label="비밀번호"
                placeholder="비밀번호를 입력하세요"
                icon={<LockIcon />}
                required
                value={password}
                onChange={handlePasswordChange}
                validationState={errors.password ? "invalid" : "default"}
                error={errors.password}
                disabled={isLoading}
            />
            <BaseButton
                type="submit"
                size="full"
                variant="filled"
                color="primary"
                isLoading={isLoading}
                disabled={isLoading}
            >
                {isLoading ? "로그인 중..." : "로그인"}
            </BaseButton>
        </form>
    );
};

export default LoginForm;
