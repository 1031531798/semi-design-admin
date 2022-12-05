import { FC } from 'react'
import { usePrefixCls } from 'src/hook/useConfig';
import './login.scss'
import BgImage from '@/assets/image/login/login-bg.svg'
const Index: FC = () => {

    const prefixCls = usePrefixCls('login')
    return (
        <div className={prefixCls}>
            <div className={`${prefixCls}-cover`}>
                <div className={`${prefixCls}-cover-point`}></div>
                <div className={`${prefixCls}-cover-point`}></div>
                <div className={`${prefixCls}-cover-point`}></div>
            </div>
        </div>
    )
}

export default Index
