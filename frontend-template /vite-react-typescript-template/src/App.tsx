import React from 'react';
import { Provider } from 'react-redux';

import Utils from '@/utils';
import { vConsoleWidget } from '@/utils/util';

import Router from '@/Router';
import Store from '@/Store';

import './App.scss';

function appInfoInit() {
    const is_dev_uat = location.host.includes('uat.donyfeng');
    if (is_dev_uat) {
        vConsoleWidget();
    }
}

function App() {
    // load 模板
    const app_loading = document.querySelector('div#app_loading');
    if (app_loading) app_loading.setAttribute('style', 'display:none;');

    appInfoInit();

    return (
        <Provider store={Store}>
            <Router />
        </Provider>
    );
}
export default App;
