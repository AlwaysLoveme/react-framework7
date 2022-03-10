import React from 'react';
import { f7ready, App, View } from 'framework7-react';

import store from '@/store';
import routes from '@/routes';

import type { Framework7Parameters } from 'framework7/types';

import './App.css';

const MyApp: React.FC = () => {
	// Framework7 Parameters
	const f7params: Framework7Parameters = {
		name: 'react', // App name
		theme: 'md', // Automatic theme detection
		// App store
		store,
		// App routes
		routes,
		iosTranslucentBars: false,
		iosTranslucentModals: false,
		// 统一设置Dialog
		dialog: {
			title: '提示',
			buttonOk: '确定',
			buttonCancel: '取消',
		},
		touch: {
			iosTouchRipple: true
		}
	};

	f7ready(() => {
		// Call F7 APIs here
	});

	return (
		<App {...f7params}>
			<View
				main
				url="/"
				mdSwipeBack
				stackPages={true}
				browserHistory={false}
				browserHistorySeparator="#"
				browserHistoryAnimateOnLoad
				className="safe-areas"
			/>
		</App>
	);
};
export default MyApp;
