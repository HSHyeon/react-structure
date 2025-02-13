import LoginContainer from "@/components/login/LoginContainer"
import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate(PATH.root);
  }
  return (
    <LoginContainer onSuccess={handleLoginSuccess}/>
  )
}

export default LoginPage