import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <h3 className="text-center">BEST SMARTPHONE</h3>
                <div className="row">
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                    <div className="col-3">
                        <Product></Product>
                    </div>
                </div>
            </div>

        )
    }
}
