import type { Router } from 'framework7/types';

const routes: Router.RouteParameters[] = [
	{
		path: '/',
		redirect: '/tabs/'
	},
	{
		path: '/tabs/',
		asyncComponent: () => import('@/pages/tabs/index'),
		tabs: [
			{
				path: '/',
				id: 'message',
				asyncComponent: () => import('@/pages/message/msgMain')
			},
			{
				path: '/contract-book/',
				id: 'contract',
				asyncComponent: () => import('@/pages/addressBook/contract')
			},
			{
				path: '/mine/',
				id: 'mine',
				asyncComponent: () => import('@/pages/mine/user')
			}
		]
	},
	{
		path: '/start-chat/',
		asyncComponent: () => import('@/pages/startChat/index'),
	},
];

const handlerRoutes = (routes:Router.RouteParameters[]) => {
	return routes.map(item => {
		if(!item.options) {
			item.options = {
				browserHistory: true,
				transition: 'f7-push',
			};
		}
		return item;
	});
};

export default handlerRoutes(routes);
