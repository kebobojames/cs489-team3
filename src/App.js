import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';
import Topic from './components/feed/Topic';
import CommentList from './components/comments/CommentList';
import Article from './components/articles/Article';

import pic1 from './assets/images/abortion.jpg';
import pic2 from './assets/images/blm.png';
import pic3 from './assets/images/universalincome.png';

const Articles = [
  {
    newssite: "Washington Post",
    title: "Abortion battles intensify in the states ahead of court ruling expected to undermine Roe v. Wade",
    author: "By Sean Sullivan",
    date: "2021.12.03",
    text: "Activists and local lawmakers in both parties are rapidly preparing for the Supreme Court to curtail federally guaranteed abortion rights in coming months, launching strategies for imposing new restrictions and protections in anticipation of the moment when individual states would have greater power to determine the future of reproductive laws in America. \n The Susan B. Anthony List, a prominent antiabortion group, has already drafted a three-tier list of “State Prospects for Pro-Life Laws Post-Roe,” which identifies priorities for legal and legislative actions and messaging campaigns in states where they feel they will need to play defense as well as those where they plan to push for new restrictions. As many as 21 states could swiftly impose bans or new limits on abortion, depending on what the court decides. \n On the opposite end of the spectrum, Democrats in Colorado are planning to introduce legislation that would codify abortion rights. In Michigan, where they do not control the state legislature, they are pushing a bill that would repeal a 90-year-old abortion ban that could take effect once again. The abortion rights group NARAL is aiming to push for expanded access to abortion in liberal states, anticipating they will be flooded with people from conservative states where the practice will be severely limited."
  }, 
  {
    newssite: "CNN",
    title: "What comes next after the Supreme Court's signal on abortion rights",
    author: "By Tierney Sneed",
    date: "2021.12.05",
    text: "At stake in the Mississippi abortion case heard by the Supreme Court December 1 is access to the procedure for millions of people across the country. \n As Justice Brett Kavanaugh made clear at Wednesday's hearing, the justices are not considering whether to outlaw abortion nationwide. But a decision that overturns current Supreme Court precedent on abortion rights -- and one that specifically reverses the landmark 1973 Roe v. Wade opinion -- could lead to bans on abortions being implemented in several states across the country. \n Such a scenario would further cement an environment where a person's access to the procedure depended on the state she lived in, as state legislatures and state courts would get to decide how much abortion should be restricted."
  }
]

function App() {
  const [onComment, getComment] = useState(0);
  const [onArticle, getArticle] = useState(false);
  const [quote, getQuote] = useState("");
  const [news, getNews] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="topicList">
          {onComment === 1 || onComment === 0 ? (
            <Topic 
              hashtags={["Abortion", "Laws"]}
              title="Recent US rulings on abortion laws have brought discussion when life begins and who holds autonomy."
              picture={pic1}
              getComment={getComment}
              onComment={onComment}
              getArticle={getArticle}
              onArticle={onArticle}
              index={1}
              width={onComment && onArticle ? '31vw' : '40vw'}
            />
          ) : (
            null
          )}
          {onComment === 2 || onComment === 0 ? (
            <Topic 
              hashtags={["BlackLivesMatter", "Protests", "CivilRights"]}
              title="Black Lives Matter continues to affect the livelihood of US citizens"
              picture={pic2}
              getComment={getComment}
              onComment={onComment}
              getArticle={getArticle}
              onArticle={onArticle}
              index={2}
              width={onComment && onArticle ? '31vw' : '40vw'}
            />
          ) : (
            null
          )}
          {onComment === 3 || onComment === 0 ? (
            <Topic 
              hashtags={["UniversalIncome", "Economy", "Capitalism"]}
              title="Is universal income the future of our economy?"
              picture={pic3}
              getComment={getComment}
              onComment={onComment}
              getArticle={getArticle}
              onArticle={onArticle}
              index={3}
              width={onComment && onArticle ? '31vw' : '40vw'}
            />
          ) : (
            null
          )}
        </div>
        {onComment ? (
          <CommentList 
            style={{width: onComment && onArticle ? '31vw' : '40vw' }}
            quote={quote}
            getNews={getNews}
            news={news}
          />
        ) : (
          ''
        )}
        {onArticle && !news ? (
          <Article
            newssite={Articles[0].newssite}
            title={Articles[0].title}
            author={Articles[0].author}
            date={Articles[0].date}
            text={Articles[0].text}
            width={onComment && onArticle ? '31vw' : '40vw'}
            getQuote={getQuote}
            quote={quote}
          />
        ) : (
          ''
        )}
        {news ? (
          <Article
            newssite={Articles[1].newssite}
            title={Articles[1].title}
            author={Articles[1].author}
            date={Articles[1].date}
            text={Articles[1].text}
            width={onComment && onArticle ? '31vw' : '40vw'}
            getQuote={getQuote}
            quote={quote}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
