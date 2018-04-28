//react and Front End imports
import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap'

//Eth libraries
import { default as Web3 } from "web3";

//contracts
import { default as contract } from "truffle-contract";
import auctionFactory from "./contracts/AuctionFactory.json";
import auction from "./contracts/dataAuction.json";
import sampleMetadata from "./sampleMetadata.json";

//var watching = false; //start watching to events only
// var passwd = false;

var web3 = null;
var AuctionFactory = contract(auctionFactory);
var Auction = contract(auction);

//variable to refer to currnet component context
// else ctx is not visible from anonymous functions and we cant call other functions like writeMsg
var me = null;

export default class Login extends Component {
  login = () => {
    window.localStorage.setItem("userId", this.refs.userId.value);
    this.props.onLogin(this.refs.userId.value);
    console.log(this.refs.userId.value);
  };

  render() {
    return (
      <form>
        <div className="card mb-3">
          <div className="card-header">Login</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="beneficiary">Ethereum Public Key</label>
              <input className="form-control" ref="userId" placeholder="Key" />
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-4">
                  <a className="btn btn-primary btn-block" onClick={this.login}>
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}