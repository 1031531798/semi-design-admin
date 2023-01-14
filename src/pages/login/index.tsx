import { usePrefixCls } from 'src/hook/useConfig';
import './login.scss'
import LoginForm from "./loginForm";
import Logo from "../layout/components/sider/logo";
import LoginBg from '@/assets/image/login/work.svg'
import ColorMode from "../layout/components/header/colorMode";
import LocaleMode from "../layout/components/header/localeMode";
import {getUserPage} from "../../api/user";
const Index = () => {
    const prefixCls = usePrefixCls('login')
    getUserPage({limit: 10, page:1}).then((user) => {
        console.log(user, '获取用户分页')
    })
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
                    <LoginForm />
                </div>

            </div>
        </div>
    )
}

export default Index
