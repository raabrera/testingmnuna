import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt = "" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                        <a >
                        <i className="fa fa-circle-o"></i>
                            <span><b>INBOUND</b></span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to ="/asn" ><i className="fa fa-circle-o"></i> ASN</Link></li>
                            <li><Link to ="/gr" ><i className="fa fa-circle-o"></i> Goods Receipt</Link></li>
                            <li><Link to ="/asn" ><i className="fa fa-circle-o"></i>Putaway</Link></li>
                            
                        </ul>
                        </li>
                    </ul>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                        <a >
                        <i className="fa fa-circle-o"></i>
                            <span><b>OUTBOUND</b></span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a><i className="fa fa-circle-o"></i>Outbound Order</a></li>
                            <li><a><i className="fa fa-circle-o"></i>Pick Plan </a></li>
                            <li><a><i className="fa fa-circle-o"></i>Pick Execution</a></li>
                            <li><a><i className="fa fa-circle-o"></i>Dispatch</a></li>
                            <li><a><i className="fa fa-circle-o"></i>Loading</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                        <a>
                        <i className="fa fa-circle-o"></i>
                            <span><b>INVENTORY</b></span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a ><i className="fa fa-circle-o"></i>Stock Inquiry</a></li>
                            <li><a ><i className="fa fa-circle-o"></i>Batch Management</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                        <a >
                        <i className="fa fa-circle-o"></i>
                            <span><b>MASTER DATA</b></span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a><i className="fa fa-circle-o"></i> Item Management</a></li>
                            <li><a><i className="fa fa-circle-o"></i>User Management</a></li>
                        </ul>
                        </li>
                    </ul>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="treeview">
                        <a >
                        <i className="fa fa-circle-o"></i>
                            <span><b>SETTINGS</b></span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a ><i className="fa fa-circle-o"></i> Color Management</a></li>
                        </ul>
                        </li>
                    </ul>
                </section>
            </aside> 
        )
    }
}
