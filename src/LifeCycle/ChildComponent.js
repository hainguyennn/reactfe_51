import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {

    //PureComponent render lại giao diện khi props của cha thay đổi, giúp hạn chế render lại

    constructor(props) {
        super(props);
        this.state = {}
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return null;
    }

    // shouldComponentUpdate() {
    //     console.log('getDerivedStateFromProps child');
    //     return true;
    // }

    render() {
        console.log('render child')
        return (
            <div>
                <h3>ChildComponent: {this.props.number.index}</h3>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount child')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate child')
    }

    componentWillUnmount() {
        // Life cycle chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount')
    }
}
