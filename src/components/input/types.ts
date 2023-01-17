import {ReactNode} from "react";
import {InputStatus} from "../../enum/common";

export interface LoginInputProps {
    status: InputStatus
    mode?: "password" | undefined
    placeholder?: string
    icon?: ReactNode
    suffix?: ReactNode
    changeData?: (value: string) => void
}

export interface LoginInputRenderProps extends LoginInputProps{
    type: 'userName' | 'password'
}
