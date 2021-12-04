import React from "react";

import '../../css/Article.css';

const Article = ({ width }) => {

    return (
        <div className="layout" style={{width: width}}>
            <div className="article-news-site">Washington Post</div>
            <div className="article-title">Abortion battles intensify in the states ahead of court ruling expected to undermine Roe v. Wade</div>
            <div className="article-author">By Sean Sullivan</div>
            <div className="article-date">2021.12.03</div>
            <div className="article-text">
                Activists and local lawmakers in both parties are rapidly preparing for the Supreme Court to curtail federally guaranteed abortion rights in coming months, launching strategies for imposing new restrictions and protections in anticipation of the moment when individual states would have greater power to determine the future of reproductive laws in America.
                The Susan B. Anthony List, a prominent antiabortion group, has already drafted a three-tier list of “State Prospects for Pro-Life Laws Post-Roe,” which identifies priorities for legal and legislative actions and messaging campaigns in states where they feel they will need to play defense as well as those where they plan to push for new restrictions. As many as 21 states could swiftly impose bans or new limits on abortion, depending on what the court decides.
                On the opposite end of the spectrum, Democrats in Colorado are planning to introduce legislation that would codify abortion rights. In Michigan, where they do not control the state legislature, they are pushing a bill that would repeal a 90-year-old abortion ban that could take effect once again. The abortion rights group NARAL is aiming to push for expanded access to abortion in liberal states, anticipating they will be flooded with people from conservative states where the practice will be severely limited.
            </div>
        </div>
    )
}

export default Article;