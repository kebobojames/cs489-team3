import React from "react";
import { useState } from "react";

import '../../css/Source.css';
import { Button } from "semantic-ui-react";

const Source = ({onClick, index, active}) => {
  const [upvote, setUpvote] = useState(false);

  return (
      <div className="source" onClick={onClick} style={{backgroundColor: index===active && '#e6e6e6'}}>
          <div className="score">80</div>
          <text className="news-site">Washington Post</text>
          <text className="news-title">Abortion battles intensify in the states ahead of court ruling expected to undermine Roe v. Wade</text>
          <text className="news-author">By Sean Sullivan</text>
          <text className="news-date">2021.12.03</text>
          <div className="upvote" onClick={(e) => e.stopPropagation()}>
            <Button className="upvoteButton" style={{ width: '5vw', alignText: 'center', backgroundColor: 'inherit' }} onClick={() => setUpvote(!upvote)}>
              <i class={ upvote ? 'purple thumbs up icon': 'gray thumbs up icon'}></i>
            </Button>
          </div>
      </div>
  )  
}

export default Source;