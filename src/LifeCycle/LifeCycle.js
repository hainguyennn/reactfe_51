import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = { number: { index: 1 } }
        console.log('contructor');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        return null;
    }

    render() {
        console.log('render')
        return (
            <div>
                <header>Header component</header>
                <h1>LifeCycle number: {this.state.number.index}</h1>
                <button className="btn btn-dark" onClick={() => {

                    let newNumber = { ...this.state.number };
                    newNumber.index += 1;

                    this.setState({
                        number: newNumber
                    })
                }}>+</button>
                {/* {this.state.number < 3 ? <ChildComponent /> : ''} */}
                <ChildComponent number={this.state.number} />
            </div>
        )
    }

    componentDidMount() {
        // Gọi API tại didmount
        console.log('componentDidMount')
    }

    // Hàm này chạy khi setState hoặc thay đổi props
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}

// Updating sẽ chạy khi có sự thay đổi của props và state
// shouldComponentUpdate quyết định giao diện có dc render lại hay k
