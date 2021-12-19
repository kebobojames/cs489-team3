import React from "react";
import { useState } from "react";

import '../../css/Article.css';


const Article = ({ width, quote, getQuote, newssite, title, author, date, text }) => {
    const [selectedText, getSelectedText] = useState("");

    const getText = () => {
        getSelectedText(window.getSelection().toString());
    }

    return (
        <div className="layout" style={{width: width}}>
            <div className="article-header">
                <div className="article-news-site">{newssite}</div>
                <i class="large gray linkify icon" />
                <button className="exit-button">X</button>
            </div>
            <div className="article-title">{title}</div>
            <div className="article-author">{author}</div>
            <div className="article-date">{date}</div>
            <div className="article-text" onMouseUp={() => {getText(); getQuote(selectedText)}}>
                {text}
            </div>
        </div>
    )
}

export default Article;