import {usePrefixCls} from "../../hook/useConfig";
import {useLocale} from "../../locales";
import LoginInput from "../../components/input/loginInput";
import {InputStatus} from "../../enum/common";
import {IconMailStroked, IconTickCircle, IconClear, IconLockStroked, IconUploadError} from "@douyinfe/semi-icons";
import {useState} from "react";
import {cloneDeep} from "lodash";
import { LoginInputRenderProps} from "../../components/input/types";
import {Checkbox} from "@douyinfe/semi-ui";

const LoginForm = () => {
    const prefixCls = usePrefixCls('login-main-body')
    const { getFormatText } = useLocale()
    const iconMap = {
        [InputStatus.wait]: <span></span>,
        [InputStatus.success]: <IconTickCircle style={{color: 'var(--semi-color-success)'}} />,
        [InputStatus.error]: <IconClear style={{color: 'var(--semi-color-danger)'}} />,
        [InputStatus.warning]: <IconUploadError style={{color: 'var(--semi-color-warning)'}} />
    }
    // 表单状态控制
    const [statusMap, setStatusMap]= useState({
        email: InputStatus.wait,
        password: InputStatus.wait
    })
    // 变更 输入框状态
    function changeStatus (field: 'email' | 'password', value: InputStatus) {
        let data = cloneDeep(statusMap)
        data[field] = value
        setStatusMap(data)
    }
    const [formData, setFormData] = useState({email: '', password: ''})
    // 变更 form数据
    function changeFormData (field: 'email' | 'password', value: string) {
        let data = cloneDeep(formData)
        data[field] = value
        setFormData(data)
    }
    function submitForm (value: any) {
        console.log(value)
    }

    function renderInputs () {
        const inputList:LoginInputRenderProps[] = [
            {type: 'email', icon: <IconMailStroked size={'inherit'} />, status: statusMap.email, placeholder: getFormatText('web.login.email')},
            {type: 'password', icon: <IconLockStroked size={'inherit'} />, status: statusMap.password, placeholder: getFormatText('web.login.password')},
        ]
        return inputList.map((input) => {
            return (
                <LoginInput
                    key={input.type}
                    changeData={(value:string) => changeFormData(input.type, value)}
                    icon={input.icon}
                    status={input.status}
                    suffix={iconMap[input.status]}
                    placeholder={input.placeholder}
                />
            )
        })
    }

    return (
        <div className={`${prefixCls}-form flex-column`}>
            <div className={`${prefixCls}-form-head`}>
                <h1>{getFormatText('web.login.welcome')}</h1>
                <span>{getFormatText( 'web.login.desc')}</span>
            </div>
            <div className={`${prefixCls}-form-body`}>
                {renderInputs()}
            </div>
            <div className={`flex-row`}>
                <Checkbox className={'remember-me'}>{getFormatText('web.login.remember')}</Checkbox>
            </div>
        </div>
    )
}
export default LoginForm
