import React from "react";
import logo from '../../assets/images/abortion.jpg';
import { useState } from "react";

import '../../css/Topic.css';
import Source from './Source';
import { Button } from "semantic-ui-react";

const Topic = ({ getComment, onComment, getArticle, onArticle, width }) => {
    const [active, setActive] = useState(7);
    const [upvote, countUpvote] = useState(0);

    return (
        <div className="topic" style={{width: width}}>
            <div className="hashtag">#Abortion #Laws</div>
            <div className="title">Recent ruling on the abortion laws in the US has brought into questions of when a "life" is created.</div>
            <div className="picture">
                <img alt="relevant description" src={logo} />
            </div>
            <div className="content-holder">
                <div className="polarization-bar"></div>
                <div className="sources">
                    <Source index={1} onClick={() => {1!==active ? setActive(1) : setActive(0); getArticle(active!==1)}} active={active}></Source>
                    <Source index={2} onClick={() => {2!==active ? setActive(2) : setActive(0); getArticle(active!==2)}} active={active}></Source>
                    <Source index={3} onClick={() => {3!==active ? setActive(3) : setActive(0); getArticle(active!==3)}} active={active}></Source>
                    <Source index={4} onClick={() => {4!==active ? setActive(4) : setActive(0); getArticle(active!==4)}} active={active}></Source>
                    <Source index={5} onClick={() => {5!==active ? setActive(5) : setActive(0); getArticle(active!==5)}} active={active}></Source>
                </div>
            </div>
            <Button className="comments" onClick={() => getComment(!onComment)}>Comments...</Button>
        </div>
    )

}

export default Topic;