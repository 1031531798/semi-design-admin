import React, {useMemo, useState} from "react";
import './loginInput.scss'
import {Input} from "@douyinfe/semi-ui";
import {LoginInputProps} from "./types";




const LoginInput = (
    {
        icon,
        suffix,
        placeholder,
        changeData
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
        changeData && changeData(value)
    }
    // 获取 box 样式
    const boxClass = useMemo(() => {
        return `login-input flex-row ${isActive ? 'login-input-active' : ''}`
    }, [isActive])

    return (
        <div className={boxClass}>
            <div className={'login-input-icon flex-row-center'}>
                {icon}
            </div>
            <div className={'login-input-box'}>
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
