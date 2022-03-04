import React from 'react';
import { Page, Navbar, Block, List, ListItem } from 'framework7-react';

const RequestAndLoad: React.FC = (props: any) => {
	const { user } = props;

	return (
		<Page>
			<Navbar
				title={`${user.firstName} ${user.lastName}`}
				backLink="Back" />
			<Block strong>
				{user.about}
			</Block>
			<List>
				{user.links.map((link: any, index: number) => (
					<ListItem
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						link={link.url}
						title={link.title}
						external
						target="_blank" />
				))}
			</List>
		</Page>
	);
};

export default RequestAndLoad;
