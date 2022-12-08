import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
import './login.scss'
import LoginForm from "./loginForm";
import Logo from "../layout/components/sider/logo";
import LoginBg from '@/assets/image/login/work.svg'
const Index = () => {
    const prefixCls = usePrefixCls('login')
    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}-cover`}>
                <div className={`${prefixCls}-cover-point`}></div>
            </div>
            <div className={`${prefixCls}-main flex-column`}>
                <header className={`${prefixCls}-main-header`}>
                    <Logo />
                </header>
                <div className={`${prefixCls}-main-body flex-row`}>
                    <div  className={`${prefixCls}-main-body-img`}>
                        <img src={LoginBg} alt={'bg'} />
                    </div>
                    <LoginForm />
                </div>

            </div>
        </div>
    )
}

export default Index
