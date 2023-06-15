import { usePrefixCls } from "src/hook/useConfig";
import { Input, Tree } from "@douyinfe/semi-ui";
import {useEffect, useMemo, useState} from "react";
import { TreeNodeData } from "@douyinfe/semi-ui/lib/es/tree/interface";
import {getDeptData} from "@/api/user";


const SysUser = () => {
  const prefixCls = usePrefixCls("view-user", 'w-full h-full flex flex-row');

  useEffect(() => {
    getDeptData().then(({data}) => {
      console.log(data)
    })
  })
  const [treeData, setTreeData] = useState<TreeNodeData[]>(
    []
  );
  return (
    <div className={prefixCls}>
      <Tree
        className={'w-60'}
        filterTreeNode
        searchRender={({ prefix, ...restProps }) => (
          <Input prefix="Search" {...restProps} />
        )}
        treeData={treeData}
      />
      <div className={'flex flex-row flex-grow'}></div>
    </div>
  );
};

export default SysUser;
