import React from 'react';

import { Page, Toolbar, Link, Tabs, Tab } from 'framework7-react';

interface TabsItem {
  id: string;
  icon: string;
  path: string;
  text: string;
}
const TabsPage: React.FC = () => {
	const tabs: TabsItem[] = [
		{
			id: 'message',
			icon: 'bubble_left_bubble_right_fill',
			path: './',
			text: '消息',
		},
		{
			id: 'contract',
			icon: 'book',
			path: './contract-book/',
			text: '通讯录',
		},
		{
			id: 'mine',
			icon: 'person_alt',
			path: './mine/',
			text: '我的',
		},
	];

	return (
		<Page pageContent={false}>
			<Toolbar tabbar labels bottom className="no-hairline">
				{tabs.map((item: TabsItem) => (
					<Link
						key={item.id}
						href={item.path}
						text={item.text}
						iconF7={item.icon}
						routeTabId={item.id}
						tabLink={`#${item.id}`}
					/>
				))}
			</Toolbar>

			{/* <Tabs animated routable swipeable>
				{tabs.map((item: TabsItem) => (
					<Tab key={item.id} id={item.id} className="page-content" />
				))}
			</Tabs> */}
		</Page>
	);
};

export default TabsPage;
