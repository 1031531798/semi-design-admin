import { usePrefixCls } from "src/hook/useConfig";
import "./login.scss";
import LoginForm from "./loginForm";
import Logo from "../layout/components/sider/logo";
import LoginBg from "@/assets/image/login/work.svg";
import ColorMode from "../layout/components/header/colorMode";
import LocaleMode from "../layout/components/header/localeMode";
import React, { useState } from "react";
import RegisterForm from "./registerForm";
// 是否第一次加载
let firstShow = true;
const Login = () => {
  const prefixCls = usePrefixCls("login");
  const [formActive, setFormActive] = useState("login");
  function renderForm() {
    const isLogin: boolean = formActive === "login";
    const loginAnimate = isLogin
      ? "animate__fadeInRight"
      : "animate__fadeOutRight";
    const registerAnimate = !isLogin
      ? "animate__fadeInLeft"
      : "animate__fadeOutLeft";
    const loginForm = (
      <div
        className={
          `flex flex-row align-midden justify-center animate__animated ` +
          loginAnimate
        }
        style={{ flex: 1 }}
      >
        <LoginForm setFormActive={setFormActive} />
      </div>
    );
    const registerForm = (
      <div
        className={
          `absolute w-full flex flex-row align-midden justify-center animate__animated ` +
          registerAnimate
        }
        style={{ flex: 1, top: 0, display: firstShow ? "none" : "flex" }}
      >
        <RegisterForm setFormActive={setFormActive} />
      </div>
    );
    firstShow = false;
    return (
      <>
        {loginForm}
        {registerForm}
      </>
    );
  }
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-cover`}>
        <div className={`${prefixCls}-cover-point`}></div>
      </div>
      <div className={`${prefixCls}-header`}>
        <ColorMode />
        <LocaleMode />
      </div>
      <div className={`${prefixCls}-main flex flex-col`}>
        <header className={`${prefixCls}-main-header`}>
          <Logo />
        </header>
        <div className={`${prefixCls}-main-body flex flex-row justify-center`}>
          <div
            className={`${prefixCls}-main-body-img flex-row justify-center items-center hidden xl:flex`}
          >
            <img src={LoginBg} alt={"bg"} />
          </div>
          <div className={"relative xl:pl-10 xl:pr-10 pl-4 pr-4"}>
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
