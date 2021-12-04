import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';
import Topic from './components/feed/Topic';
import CommentList from './components/comments/CommentList';
import Article from './components/articles/Article';

function App() {
  const [onComment, getComment] = useState(false);
  const [onArticle, getArticle] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Topic 
          getComment={getComment}
          onComment={onComment}
          getArticle={getArticle}
          onArticle={onArticle}
          width={onComment && onArticle ? '31vw' : '40vw'}
          />
        {onComment ? (
          <CommentList 
            style={{width: onComment && onArticle ? '31vw' : '40vw' }}
          />
        ) : (
          ''
        )}
        {onArticle ? (
          <Article
            width={onComment && onArticle ? '31vw' : '40vw'}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
