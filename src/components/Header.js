import React from "react";
import '../css/Header.css';
import 'semantic-ui-css/semantic.min.css';
import { Button } from "semantic-ui-react";

const Header = () => (
    <div className="header">
        <div className="logo">OnForum</div>
        <div className="top-bar">
        <div className="trending">
          TRENDING | 
          <a href="empty" className="trending-hashtag">#Abortion</a>
          <a href="empty" className="trending-hashtag">#MeToo</a>
          <a href="empty" className="trending-hashtag">#BlackLivesMatter</a>
        </div>
        <div className="searchbar" class="ui category search">
              <div class="ui icon input">
                  <input class="prompt" type="text" placeholder="Search topics..." />
                  <i class="search icon" />
              </div>
        </div>
      </div>
        <Button className="login" content="Log In" />
    </div>
  )
  export default Header;