import {FC} from 'React';
import {usePrefixCls} from "../../hook/useConfig";
import {useLocale} from "../../locales";

const LoginForm: FC = () => {
    const prefixCls = usePrefixCls('login-main-body')
    const { formatMessage } = useLocale()

    return (
        <div className={`${prefixCls}-form flex-column`}>
            <div className={`${prefixCls}-form-head`}>
                <h2>{formatMessage({id: 'web.login.welcome'})}</h2>
                <span>{formatMessage({id: 'web.login.desc'})}</span>
            </div>
        </div>
    )
}
export default LoginForm
