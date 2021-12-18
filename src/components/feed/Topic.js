import React from "react";
import { useState } from "react";

import '../../css/Topic.css';
import Source from './Source';

const ExamplesSources = [
        {
            score: "40",
            newssite: "CNN",
            newstitle: "What comes next after the Supreme Court's signal on abortion rights",
            newsauthor: "By Tierney Sneed",
            newsdate: "2020.12.05",
            color: "#f8e6ff",

        },
        {
            score: "52",
            newssite: "Washington Post",
            newstitle: "Abortion battles intensify in the states ahead of court ruling expected to undermine Roe v. Wade",
            newsauthor: "By Sean Sullivan",
            newsdate: "2021.12.03",
        },
        {
            score: "80",
            newssite: "Fox News",
            newstitle: "How Supreme Court could decide abortion case: preserve, limit or strike down Roe v. Wade",
            newsauthor: "By Ronn Blitzer",
            newsdate: "2021.12.04",
            color: "purple",
        }
    ]

const ExamplesSources2 = [
    {
        score: "46",
        newssite: "AP News",
        newstitle: "Key moments surrounding Michigan high school shooting",
        newsauthor: "The Associated Press",
        newsdate: "2021.12.05",
        color: "#f8e6ff",
    },
    {
        score: "53",
        newssite: "The Washington Post",
        newstitle: "Michigan schools order investigation after staff raised alarms about suspect hours before fatal shooting",
        newsauthor: "Bryan Pietsch",
        newsdate: "2021.12.04"
    },
    {
        score: "57",
        newssite: "New York Times",
        newstitle: "Dramatic Day Reveals Details About the Parents of a School Shooting Suspect",
        newsauthor: "Sophie Kasakove",
        newsdate: "2021.12.05"
    },
    {
        score: "70",
        newssite: "CNN",
        newstitle: "School district releases details of key events leading up to Michigan shooting",
        newsauthor: "Aya Elamroussi",
        newsdate: "2021.12.05",
        color: "purple"
    },
]
const ExamplesSources3 = [
    {
        score: "30",
        newssite: "USA Today",
        newstitle: "L.A., Chicago giving away cash with no strings attached to residents in need. Are universal basic income programs working?",
        newsauthor: "Christal Hayes",
        newsdate: "2021.11.13"
    },
    {
        score: "40",
        newssite: "NBC News",
        newstitle: "'There's so much need:' L.A., Chicago launch country's largest guaranteed basic income programs",
        newsauthor: "Alicia Victoria Lozano",
        newsdate: "2021.11.08"
    },
    {
        score: "50",
        newssite: "The Guardian",
        newstitle: "I applied for LA’s basic income program – and the process was startling",
        newsauthor: "Ruth Fowler",
        newsdate: "2021.11.29"
    },
    {
        score: "60",
        newssite: "Fox Business",
        newstitle: "Chicago, Los Angeles embrace universal basic income",
        newsauthor: "Peter Aitken",
        newsdate: "2021.10.28"
    }
]


const Topic = ({ hashtags, title, picture, sources, getComment, onComment, getArticle, onArticle, width, index }) => {
    const [active, setActive] = useState(0);
    const [like, countLike] = useState(0);
    const [upvoteCount, getUpvoteCount] = useState(0);

    return (
        <div className="topic" style={{width: width}}>
            <div className="hashtaglist">
                {hashtags.map((hashtag) => 
                    <a className="hashtag">#{hashtag}</a>)}
            </div>
            <div className="title">{title}</div>
            <div className="picture">
                <img alt="relevant description" src={picture} />
            </div>
            <div className="content-holder">
                <div className="polarization-bar"></div>
                <div className="sources">
                    {index===1 && ExamplesSources.map((source, i) =>
                        <Source
                            score={source.score}
                            newssite={source.newssite}
                            newstitle={source.newstitle}
                            newsauthor={source.newsauthor}
                            newsdate={source.newsdate}
                            index={i+1} 
                            onClick={() => {i+1!==active ? setActive(i+1) : setActive(0); getArticle(active!==i+1)}} 
                            active={active} 
                            getUpvoteCount={getUpvoteCount} 
                            upvoteCount={upvoteCount}
                            color={source.color}>
                        </Source>    
                    )}
                    {index===2 && ExamplesSources2.map((source, i) =>
                        <Source
                            score={source.score}
                            newssite={source.newssite}
                            newstitle={source.newstitle}
                            newsauthor={source.newsauthor}
                            newsdate={source.newsdate}
                            index={i+1} 
                            onClick={() => {i+1!==active ? setActive(i+1) : setActive(0); getArticle(active!==i+1)}} 
                            active={active} 
                            getUpvoteCount={getUpvoteCount} 
                            upvoteCount={upvoteCount}
                            color={source.color}>
                        </Source>    
                    )}
                    {index===3 && ExamplesSources3.map((source, i) =>
                        <Source
                            score={source.score}
                            newssite={source.newssite}
                            newstitle={source.newstitle}
                            newsauthor={source.newsauthor}
                            newsdate={source.newsdate}
                            index={i+1} 
                            onClick={() => {i+1!==active ? setActive(i+1) : setActive(0); getArticle(active!==i+1)}} 
                            active={active} 
                            getUpvoteCount={getUpvoteCount} 
                            upvoteCount={upvoteCount}
                            color={source.color}>
                        </Source>    
                    )}
                </div>
            </div>
            <div class="ui labeled button" tabindex="0">
                <div class="ui red button" onClick={() => countLike(like+1)}>
                    <i class="heart icon"></i> Like
                </div>
                <a class="ui basic red left pointing label">
                    {like}
                </a>
            </div>
            <button className="ui button purple comments" disabled={upvoteCount<=0} onClick={() => getComment(onComment ? 0 : index)}>Comments...</button>
        </div>
    )

}

export default Topic;