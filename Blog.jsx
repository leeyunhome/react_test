const React = require('react');
const { Component } = React;

class Blog extends Component {
    state = {
        text: 'Hello, blog',
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

module.exports = Blog;