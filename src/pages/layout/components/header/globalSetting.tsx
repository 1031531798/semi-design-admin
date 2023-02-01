import {IconSetting} from "@douyinfe/semi-icons";
import {Button, Tooltip} from "@douyinfe/semi-ui";

const GlobalSetting = () => {
    const tooltipText = '平台设置'
    function openSetting () {

    }
    return (
        <Tooltip content={tooltipText}>
            <Button icon={<IconSetting ></IconSetting>} onClick={openSetting} style={{ width: 40, marginRight: '20px' }} />
        </Tooltip>
    )
}

export default  GlobalSetting
