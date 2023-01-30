import { usePrefixCls } from 'src/hook/useConfig';
import './login.scss'
import LoginForm from "./loginForm";
import Logo from "../layout/components/sider/logo";
import LoginBg from '@/assets/image/login/work.svg'
import ColorMode from "../layout/components/header/colorMode";
import LocaleMode from "../layout/components/header/localeMode";
import React, {useState} from "react";
import RegisterForm from "./registerForm";
const Index = () => {
    const prefixCls = usePrefixCls('login')
    const [formActive, setFormActive] = useState('login')
    function renderForm () {
        const isLogin: boolean = formActive === 'login'
        const loginForm = (
            <div className={`flex-row-center animate__animated animate__fadeInRight`} style={{flex: 1}}>
                <LoginForm setFormActive={setFormActive} />
            </div>
        )
        const registerForm = (
            <div className={`flex-row-center animate__animated animate__fadeInLeft`} style={{flex: 1}}>
                <RegisterForm setFormActive={setFormActive} />
            </div>
        )
        return isLogin ? loginForm : registerForm
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
            <div className={`${prefixCls}-main flex-column`}>
                <header className={`${prefixCls}-main-header`}>
                    <Logo />
                </header>
                <div className={`${prefixCls}-main-body flex-row`}>
                    <div  className={`${prefixCls}-main-body-img`}>
                        <img src={LoginBg} alt={'bg'} />
                    </div>
                    {renderForm()}
                </div>

            </div>
        </div>
    )
}

export default Index
