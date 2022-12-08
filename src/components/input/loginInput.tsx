import React, {ReactNode, useEffect, useMemo, useState} from "react";
import './loginInput.scss'
import {Input} from "@douyinfe/semi-ui";

interface LoginInputProps {
    placeholder?: string
    icon?: ReactNode,
    suffix?: ReactNode
}

const LoginInput = (
    {
        icon,
        suffix,
        placeholder
    }: LoginInputProps
) => {
    const [inputValue, setInputValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    function inputFocus() {
        // 点击激活
        setIsActive(true)
    }
    // 输入框失去焦点
    function inputBlur() {
        // 如果没有值就取消激活
        if (!inputValue) {
            setIsActive(false)
        }
    }
    // 赋值
    function inputChange (value: string) {
        setInputValue(value)
    }
    // 获取 box 样式
    const boxClass = useMemo(() => {
        return `login-input-box ${isActive ? 'login-input-active' : ''}`
    }, [isActive])

    return (
        <div className={'login-input flex-row'}>
            <div className={'login-input-icon flex-row-center'}>
                {icon}
            </div>
            <div className={boxClass}>
                <label className={'login-input-box-label '}>{placeholder}</label>
                <Input className={'login-semi-input'} onChange={inputChange} onFocus={inputFocus} onBlur={inputBlur} />
            </div>
            <div className={'login-input-status flex-row-center'}>
                {suffix}
            </div>
        </div>
    )
}

export default LoginInput
