import React from "react";
import Header from './components/footer'
import Sider from './components/sider'
import Footer from './components/footer'
import { Layout } from '@douyinfe/semi-ui';
import { usePrefixCls } from "src/hook/useConfig";
import './index.scss'
const { Content } = Layout
const LayoutIndex: React.FC = () => {
  const prefixCls = usePrefixCls('layout')
	return (
		<Layout className={prefixCls}>
			<Sider />
			<Layout>
				<Header />
				<Content className="layout-content">
					{/* <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
						<Outlet />
					</Suspense> */}
				</Content>
				<Footer />
			</Layout>
		</Layout>
	)
}

export default LayoutIndex