import React, {Component} from 'react';

function changeTitle (title) {
    document.title = title;
    var u = navigator.userAgent.toLowerCase();
    if (u.match(/iphone/i) === "iphone") {
        var body = document.body;
        var frame = document.createDocumentFragment();
        frame.style = "dispaly: none;";
        frame.src = "/Common/img/favicon.ico";
        body.appendChild(frame);
    }
}

export default class BaseView extends Component {
    componentWillMount() {
        this.title && changeTitle(this.title);
    }

    componentWillUnmount() {
        this.nextPageTitle && changeTitle(this.nextPageTitle);
    }
    
}