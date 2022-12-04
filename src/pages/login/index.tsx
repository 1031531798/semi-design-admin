import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
import './login.scss'
const Index: FC = () => {
    const prefixCls = usePrefixCls('login')
    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}-cover`}>
                <img src={'@/assets/image/login/login-bg.sv'} alt={'cover'} />
            </div>
        </div>
    )
}

export default Index
