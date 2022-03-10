import React from 'react';

import {
	Page,
	Navbar,
	List,
	Icon,
	Link,
	NavTitle,
	NavRight,
	ListItem,
	Popover,
	SwipeoutActions,
	SwipeoutButton,
} from 'framework7-react';

import './index.less';

interface ChatItem {
  avatar: string;
  title: string;
  isGroup: boolean;
  chatContent: string;
  time: string;
}

interface PopoverItem {
  title: string;
  link: string;
  icon: string;
}

const Contract: React.FC = () => {
	const chatList: ChatItem[] = [
		{
			avatar: 'https://files.codingman.icu/images/avatar.png',
			title: '测试用户',
			isGroup: false,
			chatContent: '哈哈哈哈哈哈哈哈',
			time: '20:08',
		},
		{
			avatar: 'https://files.codingman.icu/images/avatar.png',
			title: '测试用户',
			isGroup: false,
			chatContent: '哈哈哈哈哈哈哈哈',
			time: '12:00',
		},
	];
	const popoverList: PopoverItem[] = [
		{
			title: '发起群聊',
			icon: 'chat_bubble_fill',
			link: '',
		},
		{
			title: '添加朋友',
			icon: 'person_badge_plus_fill',
			link: '',
		},
		{
			title: '扫一扫',
			icon: 'camera_viewfinder',
			link: '',
		},
		{
			title: '收付款',
			icon: 'money_dollar_circle_fill',
			link: '',
		},
	];
	return (
		<Page className="f7-page">
			<Navbar>
				<NavTitle>消息</NavTitle>
				<NavRight>
					<Icon f7="search" size="24px" className="margin-right" />
					<Link
						iconF7="plus_circle"
						iconSize="24px"
						popoverOpen=".popover-menu"
					/>
				</NavRight>
			</Navbar>
			<List noHairlines className="chat-card">
				{chatList.map((item, index: number) => (
					<ListItem
						mediaItem
						swipeout
						title={item.title}
						text={item.chatContent}
						after={item.time}
						className="f7-card"
						key={index}
					>
						<img src={item.avatar} slot="media" width="50" />
						<SwipeoutActions right>
							<SwipeoutButton>标为未读</SwipeoutButton>
							<SwipeoutButton
								color="blue"
								confirmText="不显示该聊天，但会保存聊天记录!"
							>
                不显示
							</SwipeoutButton>
							<SwipeoutButton delete confirmText="确定要删除该聊天嘛?">
                删除
							</SwipeoutButton>
						</SwipeoutActions>
					</ListItem>
				))}
			</List>

			<Popover className="popover-menu">
				<List>
					{popoverList.map((item, index) => (
						<ListItem popoverClose=".popover-menu" mediaItem title={item.title} key={index}>
							<Icon f7={item.icon} size="20px" slot="media"/>
						</ListItem>
					))}
				</List>
			</Popover>
		</Page>
	);
};

export default Contract;
