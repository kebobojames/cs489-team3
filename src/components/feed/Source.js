import React from "react";
import { useState } from "react";

import '../../css/Source.css';

const Source = ({score, newssite, newstitle, newsauthor, newsdate, onClick, index, active, getUpvoteCount, upvoteCount, color}) => {
  const [upvote, setUpvote] = useState(0);

  return (
      <div className="source" onClick={onClick} style={{backgroundColor: index===active && '#e6e6e6'}}>
          <div className="score" style={{backgroundColor: `${color}`}}>{score}</div>
          <text className="news-site">{newssite}</text>
          <text className="news-title">{newstitle}</text>
          <text className="news-author">{newsauthor}</text>
          <text className="news-date">{newsdate}</text>
          <div className="upvote" onClick={(e) => e.stopPropagation()}>
            <button 
              className="upvoteButton" 
              style={{ width: '0vw', justifyContent: 'left', backgroundColor: 'inherit' }} 
              onClick={() => {!upvote && getUpvoteCount(upvoteCount+1); upvote && getUpvoteCount(upvoteCount-1); setUpvote(!upvote)}}>
              <i class={ upvote ? 'large purple thumbs up icon': 'large gray thumbs up icon'}></i>
            </button>
          </div>
      </div>
  )  
}

export default Source;