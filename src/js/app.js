import '../style/style.scss';
import picturefill from 'picturefill';
picturefill();
import Layout from './components/layout';
import changeImg from './components/changeImg';
import Mouse from './components/mouse';
import Loading from './components/loading';
const APP = window.APP || {};

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                window.APP = APP;
                APP.Layout = new Layout();
            },
            false
        );
        window.onload = () => {
            this.init();
        };
    }
    init() {
        new Loading();
        new changeImg();
        APP.Mouse = new Mouse();
        APP.Mouse.init();
    }
}
new App();
