import {usePrefixCls} from "../../hook/useConfig";

const RegisterForm = () => {
    const prefixCls = usePrefixCls('login-register');
    
    return (
        <div className={prefixCls}>
            <h2>注册账号</h2>
        </div>
    )
}

export default RegisterForm
