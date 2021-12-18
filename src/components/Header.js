import React from "react";
import logo from '../assets/images/nahcho.png';
import '../css/Header.css';
import 'semantic-ui-css/semantic.min.css';
import { Button } from "semantic-ui-react";

const Header = () => (
    <div className="header">
        <img className="logo" src={logo} />
        <div className="top-bar">
        <div className="trending">
          TRENDING | 
          <a href="empty" className="trending-hashtag">#Abortion</a>
          <a href="empty" className="trending-hashtag">#MeToo</a>
          <a href="empty" className="trending-hashtag">#UniversalIncome</a>
        </div>
        <div className="searchbar" class="ui category search">
              <div class="ui icon input">
                  <input class="prompt" type="text" placeholder="Search topics..." />
                  <i class="search icon" />
              </div>
        </div>
      </div>
        <button className="ui basic purple button login">Sign Out </button>
    </div>
  )
  export default Header;