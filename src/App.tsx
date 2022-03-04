import React, { useState } from 'react';

import {
	f7,
	f7ready,
	App,
	Panel,
	Views,
	View,
	Popup,
	Page,
	Navbar,
	Toolbar,
	NavRight,
	Link,
	Block,
	LoginScreen,
	LoginScreenTitle,
	List,
	ListInput,
	ListButton,
	BlockFooter,
} from 'framework7-react';

import type { Framework7Parameters } from 'framework7/types';

import routes from '@/routes';
import store from '@/store';

const MyApp: React.FC = (props: any) => {
	const { f7router } = props;
	// Login screen demo data
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// Framework7 Parameters
	const f7params: Framework7Parameters = {
		name: 'react', // App name
		theme: 'ios', // Automatic theme detection
		// App store
		store,
		// App routes
		routes,
	};
	const alertLoginData = () => {
		f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
			f7.loginScreen.close();
		});
	};
	f7ready(() => {
		// Call F7 APIs here
		f7router.navigate('/tabs/', {
			clearPreviousHistory: true,
		});
	});

	return (
		<App {...f7params}>
			{/* Left panel with cover effect */}
			<Panel left cover themeDark>
				<View>
					<Page>
						<Navbar title="Left Panel" />
						<Block>Left panel content goes here</Block>
					</Page>
				</View>
			</Panel>

			{/* Right panel with reveal effect */}
			<Panel right reveal themeDark>
				<View>
					<Page>
						<Navbar title="Right Panel" />
						<Block>Right panel content goes here</Block>
					</Page>
				</View>
			</Panel>

			<View
				url="/"
				main={true}
				stackPages={true}
				browserHistory={true}
				iosDynamicNavbar={false}
				browserHistorySeparator="#"
				className="safe-areas"
			/>
			{/* <Views
				tabs
				className="safe-areas"
			>
				<Toolbar
					tabbar
					labels
					bottom
				>
					<Link
						tabLink="#view-home"
						tabLinkActive
						iconIos="f7:house_fill"
						iconAurora="f7:house_fill"
						iconMd="material:home"
						text="Home" />
					<Link
						tabLink="#view-catalog"
						iconIos="f7:square_list_fill"
						iconAurora="f7:square_list_fill"
						iconMd="material:view_list"
						text="Catalog" />
					<Link
						tabLink="#view-settings"
						iconIos="f7:gear"
						iconAurora="f7:gear"
						iconMd="material:settings"
						text="Settings" />
				</Toolbar>

				<View
					id="view-home"
					main
					tab
					tabActive
					url="/" />

				<View
					id="view-catalog"
					name="catalog"
					tab
					url="/catalog/" />

				<View
					id="view-settings"
					name="settings"
					tab
					url="/settings/" />
			</Views> */}

			{/* Popup */}
			<Popup id="my-popup">
				<View>
					<Page>
						<Navbar title="Popup">
							<NavRight>
								<Link popupClose>Close</Link>
							</NavRight>
						</Navbar>
						<Block>
							<p>Popup content goes here.</p>
						</Block>
					</Page>
				</View>
			</Popup>

			<LoginScreen id="my-login-screen">
				<View>
					<Page loginScreen>
						<LoginScreenTitle>Login</LoginScreenTitle>
						<List form>
							<ListInput
								type="text"
								name="username"
								placeholder="Your username"
								value={username}
								onInput={(e) => setUsername(e.target.value)}
							/>
							<ListInput
								type="password"
								name="password"
								placeholder="Your password"
								value={password}
								onInput={(e) => setPassword(e.target.value)}
							/>
						</List>
						<List>
							<ListButton title="Sign In" onClick={() => alertLoginData()} />
							<BlockFooter>Some text about login information.</BlockFooter>
						</List>
					</Page>
				</View>
			</LoginScreen>
		</App>
	);
};
export default MyApp;
