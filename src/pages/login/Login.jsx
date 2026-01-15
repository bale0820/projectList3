// src/features/auth/pages/Login.jsx
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./login.scss";
import { useLogin } from "features/login/hooks/useLogin";
import { LoginForm } from "features/login/components/LoginForm";
import { SocialLoginButtons } from "features/login/components/SocialLoginButtons";


export function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 페이지로 돌아가기 (없으면 "/")
  const from = location.state?.from || "/";

  // 🔹 useLogin 훅 사용
  const {
    idRef,
    pwdRef,
    formData,
    errors,
    handleFormChange,
    handleLoginSubmit,
  } = useLogin(navigate, from);

  return (
    <div className="content">
      <div className="center-layout login-form">
        <h1 className="center-title">로그인</h1>

        {/* 🔹 입력폼 부분 */}
        <LoginForm
          formData={formData}
          errors={errors}
          idRef={idRef}
          pwdRef={pwdRef}
          onChange={handleFormChange}
          onSubmit={handleLoginSubmit}
        />

        {/* 🔹 로그인 외 추가 메뉴 */}
        <ul>
          <li>
            <button
              type="button"
              className="btn-main-color"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </button>
          </li>

          <li>
            <div className="links">
              <Link to="/find-user-id">아이디 찾기</Link>
              <span>|</span>
              <Link to="/send-code">비밀번호 찾기</Link>
            </div>
          </li>

          {/* 🔹 소셜 로그인 버튼 */}
          <SocialLoginButtons />
        </ul>
      </div>
    </div>
  );
}
