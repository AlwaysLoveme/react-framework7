import React from 'react';
import { Page, Navbar } from 'framework7-react';


const StartChat: React.FC = () => {
	console.log(123);
  
	return (
		<Page>
			<Navbar title='发起群聊' backLink/>
		</Page>
	);
};

export default StartChat;