import React from 'react';

import {Page, Navbar, Block} from 'framework7-react';

const BlankPage: React.FC = () => {
	return (
		<Page>
			<Navbar
				title="页面走丢"
				backLink="返回" />
			<Block strong>
				<p>Sorry</p>
				<p>Requested content not found.</p>
			</Block>
		</Page>
	);
};

export default BlankPage;