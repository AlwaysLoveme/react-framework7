import type { Router } from 'framework7/types';

const routes: Router.RouteParameters[] = [
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
				path: '/contract-book',
				id: 'contract',
				asyncComponent: () => import('@/pages/addressBook/contract')
			},
			{
				path: '/mine',
				id: 'mine',
				asyncComponent: () => import('@/pages/mine/user')
			}
		]
	},
	{
		path: '/request-and-load/user/:userId/',
		async({ router, to, resolve }) {
			// App instance
			const { app } = router;

			// Show Preloader
			app.preloader.show();

			// User ID from request
			const { userId } = to.params;

			// Simulate Ajax Request
			const requestLoadPage = () => import('@/pages/request-and-load');
			requestLoadPage().then(rc => {
				const timer = setTimeout(() => {
					// We got user data from request
					const user = {
						firstName: 'Vladimir',
						lastName: 'Kharlampidi',
						about: 'Hello, i am creator of Framework7! Hope you like it!',
						links: [
							{
								title: 'Framework7 Website',
								url: 'http://framework7.io',
							},
							{
								title: 'Framework7 Forum',
								url: 'http://forum.framework7.io',
							},
						],
					};
					// Hide Preloader
					app.preloader.hide();
	
					// Resolve route to load page
					resolve(
						{
							component: rc.default,
						},
						{
							props: {
								user,
							},
						},
					);
					clearTimeout(timer);
				}, 1000);
			});
			
		},
	},
	{
		path: '(.*)',
		asyncComponent: () => import('@/pages/404'),
	},
];

export default routes;
