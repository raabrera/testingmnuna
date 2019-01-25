import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Test from '../contents/Test';
import Asn from '../contents/Asn';
import GoodsReceipt from '../contents/Gr';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <Route exact path = "/" render = {() => <Test/>}/>
                    <Route path = "/asn" render  = { () => <Asn/>}/>
                    <Route path = "/gr" render  = { () => <GoodsReceipt/>}/>
                </section>
            </div>
        )
    }
}