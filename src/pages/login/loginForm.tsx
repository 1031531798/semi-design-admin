import {usePrefixCls} from "../../hook/useConfig";
import {useLocale} from "../../locales";
import LoginInput from "../../components/input/loginInput";
import {InputStatus} from "../../enum/common";
import {IconMailStroked, IconTickCircle, IconClear, IconLockStroked, IconUploadError} from "@douyinfe/semi-icons";

const LoginForm = () => {
    const prefixCls = usePrefixCls('login-main-body')
    const { getFormatText } = useLocale()
    const iconMap = {
        [InputStatus.wait]: <span></span>,
        [InputStatus.success]: <IconTickCircle style={{color: 'var(--semi-color-success)'}} />,
        [InputStatus.error]: <IconClear style={{color: 'var(--semi-color-danger)'}} />,
        [InputStatus.warning]: <IconUploadError style={{color: 'var(--semi-color-warning)'}} />
    }
    const statusMap= {
        email: InputStatus.wait,
        password: InputStatus.wait
    }
    return (
        <div className={`${prefixCls}-form flex-column`}>
            <div className={`${prefixCls}-form-head`}>
                <h2>{getFormatText('web.login.welcome')}</h2>
                <span>{getFormatText( 'web.login.desc')}</span>
            </div>
            <div className={`${prefixCls}-form-body`}>
                <LoginInput icon={<IconMailStroked size={'inherit'} />} suffix={iconMap[statusMap.email]} placeholder={getFormatText('web.login.email' )} />
                <LoginInput icon={<IconLockStroked size={'inherit'} />} suffix={iconMap[statusMap.password]} placeholder={getFormatText('web.login.password' )} />
            </div>
        </div>
    )
}
export default LoginForm
