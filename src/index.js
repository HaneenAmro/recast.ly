// TODO: Render the `App` component to the DOM
import App from './components/App.js';
// import ReactDOM from 'react-dom';
import searchYoutube from './lib/searchYoutube.js';
import API_KEY from './config/youtube.js';


ReactDOM.render(<App searchYoutube={searchYoutube} API_KEY={API_KEY} />, document.getElementById('app'));


