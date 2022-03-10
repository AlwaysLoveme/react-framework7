import React from 'react';
import ReactDOM from 'react-dom';
import Framework7React from 'framework7-react';
import App from './App';

// Import Framework7
import Framework7 from '@/libs/framework7';

// Import Framework7-React Plugin

// Import Framework7 Styles
import '@/styles/framework7-custom.less';

// Import Icons and App Custom Styles
import '@/styles/app.less';
import '@/styles/icons.css';
import '@/styles/common-class.less';

// Init F7 React Plugin
Framework7.use(Framework7React);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
