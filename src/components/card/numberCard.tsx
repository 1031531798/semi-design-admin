import {Card} from "@douyinfe/semi-ui";
import {CardProps} from "@douyinfe/semi-ui/lib/es/card";
import {ReactNode} from "react";
import NumberAnimate from "../NumberAnimate";
import {numberSplit} from "../../utils/utils";

interface NumberCardProp extends CardProps {
    icon: ReactNode
    value: number | string
    title: string
}
const NumberCard = (props: NumberCardProp) => {
    const {icon, title, value} = props

    return (
        <>
            <Card
                style={{
                    borderRadius: '1rem',
                    maxWidth: '25rem'
                }}
                bodyStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
            }}>
                <div className={'flex flex-row w-full justify-between'}>
                    <div className={'p-3 border rounded-lg border-gray-100 bg-gray-100 dark:border-gray-700 dark:bg-gray-700 flex flex-row align-middle justify-center m-5'}>
                        {icon}
                    </div>
                    <div className={'flex flex-column w-2/3'}>
                        <span>{title}</span>
                        <span className={'pt-4 pb-4 text-4xl dark:text-white '}>
                            $
                            <NumberAnimate start={0} end={value} time={1000} formatter={numberSplit} />
                        </span>
                    </div>
                </div>
            </Card>
        </>
    )
}
export default NumberCard
