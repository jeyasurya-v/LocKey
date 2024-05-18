import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import App from './components/App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';


const updateSW = registerSW({
	onNeedRefresh() {
	  console.log('A new version is available. Refresh to update.');
	},
	onOfflineReady() {
	  console.log('The app is ready to work offline.');
	}
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

updateSW();