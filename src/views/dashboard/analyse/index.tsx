import { usePrefixCls } from 'src/hook/useConfig';
import React from "react";
import './index.scss'
const Index = () => {
    const prefixCls = usePrefixCls('dashboard-analyse')
    return (
    <div className={prefixCls}>
       analyse
    </div>
  )
}

export default Index
