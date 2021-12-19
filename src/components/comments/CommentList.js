import React, { useState, useEffect, useContext, createContext } from "react";
import styled from "styled-components";

import TextArea from "react-textarea-autosize";

import Markdown from "./Markdown";
import Card from "./Card";
import Button from "./Button";

const CommentContext = createContext({});

function compare(a1, a2) {
  if (JSON.stringify(a1) === JSON.stringify(a2)) {
    return true;
  }
  return false;
}

function gen_comments(comments, colorindex, path, getNews) {
  return comments.map((comment, i) => {
    return (
      <Comment
        username={comment.username}
        date={comment.date}
        text={comment.text}
        votes={comment.votes}
        colorindex={colorindex}
        key={i}
        path={[...path, i]}
        comments={comment.comments}
        getNews={getNews}
      />
    );
  });
}

function Reply(props) {
  const [text, setText] = useState(props.quote);

  useEffect(() => {
    setText(text + props.quote);
  }, [props.quote])

  return (
    <div {...props}>
      <TextArea
        placeholder="What are your thoughts?"
        minRows={2}
        defaultValue={""}
        value={text}
        onChange={value => {
          setText(value.target.value);
        }}
      />
      <div className="panel">
        <div className="comment_as">
          Comment as{""}
          <div className="username">
            Team3IsTheBest
          </div>
        </div>
        <button class="ui purple button tiny">COMMENT</button>
      </div>
    </div>
  );
}

Reply = styled(Reply)`
  border: solid 1px gray;
  overflow: hidden;

  &.hidden {
    display: none;
  }

  textarea {
    font-family: inherit;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    resize: none;

    background: white;
    padding: 12px;
    color: black;
    border: none;
    max-width: 100%;
    min-width: 100%;
  }

  .panel {
    display: flex;
    align-items: center;
    background: whitesmoke;
    padding: 0.5vw;

    .comment_as {
      font-size: 14px;
      color: black;
      margin-right: 8px;

      .username {
        display: inline-block;
        color: #4f9eed;
      }
    }

    button {
      font-size: 14px;
      margin-left: auto;
    }
  }
`;

function Rating(props) {
  const [count, setCount] = useState(props.votes);
  const [thumbsUp, setThumbsUp] = useState(false);

  return (
    <div {...props}>
      <button
        className={`material-icons ${thumbsUp ? "selected" : ""}`}
        id="thumbs_up"
        onClick={() => {
          setThumbsUp(!thumbsUp);
        }}
      >
        ^
      </button>
      <div
        className={`count ${thumbsUp ? "up" : ""}`}
      >
        {thumbsUp ? count + 1 : ""}
        {thumbsUp ? "" : count}
      </div>
    </div>
  );
}

Rating = styled(Rating)`
  display: flex;
  flex-direction: column;
  margin-right: 0.5vw;

  .count {
    font-weight: bold;
    text-align: center;
    color: #3d4953;

    &.up {
      color: #4f9eed;
    }

    &.down {
      color: #ed4f4f;
    }
  }

  button#thumbs_up {
    border: none;
    background: none;
    cursor: pointer;
    color: #3d4953;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }

  #thumbs_up.selected {
    color: #4f9eed;
  }
`;

function Comment(props) {
  const [replying, setReplying] = useContext(CommentContext);
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(
    async () => {
      if (props.path.length > 2 && props.path.length % 2 === 0) {
        setHidden(true);
      }
      if (props.path[props.path.length - 1] > 3) {
        setHidden(true);
      }
    },
    [props.path]
  );
  
  return (
    <div {...props}>
      {hidden ? (
        <button
          id="showMore"
          onClick={() => {
            setHidden(false);
          }}
        >
          Show More Replies
        </button>
      ) : (
        <>
          <div id="left" className={minimized ? "hidden" : ""}>
            <Rating votes={props.votes} />
          </div>
          <div id="right">
            <div id="top">
              <span
                className="minimize"
                onClick={() => {
                  setMinimized(!minimized);
                }}
              >
                [{minimized ? "+" : "-"}]
              </span>
              <span id="username">
                <div className="username">{props.username}</div>
              </span>
              <span id="date">
                <div className="date">{props.date}</div>
              </span>
            </div>
            <div id="content" className={minimized ? "hidden" : ""} onClick={() => props.getNews(true)}>
              <Markdown options={{ forceBlock: true }}>{props.text}</Markdown>
            </div>
            <div id="actions" className={minimized ? "hidden" : ""}>
              <span
                className={`${compare(replying, props.path) ? "selected" : ""}`}
                onClick={() => {
                  if (compare(replying, props.path)) {
                    setReplying([]);
                  } else {
                    setReplying(props.path);
                  }
                }}
              >
                reply
              </span>
              <span>report</span>
            </div>
            <Reply
              className={
                compare(replying, props.path) && !minimized ? "" : "hidden"
              }
            />
            <div className={`comments ${minimized ? "hidden" : ""}`}>
              {gen_comments(props.comments, props.colorindex + 1, [
                ...props.path
              ])}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

Comment = styled(Comment)`
  display: flex;
  text-align: left;
  background: ${props => (props.colorindex % 2 === 0 ? "white" : "whitesmoke")};
  padding: 0.5vw 1vw 0.5vw 0.5vw;
  border-left: 0.1px solid lightGray;

  #showMore {
    background: none;
    border: none;
    color: #53626f;
    cursor: pointer;
    font-size: 13px;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }

  .comments {
    > * {
      margin-bottom: 0.6vw;

      &:last-child {
        margin-bottom: 0vw;
      }
    }

    &.hidden {
      display: none;
    }
  }

  #left {
    text-align: center;
    &.hidden {
      visibility: hidden;
      height: 0;
    }
  }

  #right {
    flex-grow: 1;

    #top {
      .minimize {
        cursor: pointer;
        color: #53626f;

        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
      }

      #username {
        display: inline-block;
        color: #4f9eed;
        margin-left: 0.5vw;
        margin-right: 0.5vw;
      }

      #date {
        display: inline-block;
        color: #53626f;
      }

      > * {
        margin-right: 0vw;
      }
    }

    #content {
      color: black;

      &.hidden {
        display: none;
      }    
    }

    #content:hover {
      cursor: pointer;
    }

    #actions {
      color: #53626f;
      margin-bottom: 0.4vw;

      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

      &.hidden {
        display: none;
      }

      > .selected {
        font-weight: bold;
      }

      > * {
        cursor: pointer;
        margin-right: 0.5vw;
      }
    }
  }

  ${Reply} {
    margin-bottom: 0vw;
  }
`;

function Comments(props) {
  var [replying, setReplying] = useState([]);
  var [comments, setComments] = useState([
    {
      username: "HoneyBear216",
      date: "3 hours ago",
      text: "Abortion issue is tricky. <mark>We could be looking many more restrictions on how abortion clinics are regulated</mark>. This could potentially affect other vital services unrelated to abortion at Planned Parenthood. The law should be carefully examined.",
      votes: 25,
      comments: [
        {
          username: "BadgerTech110",
          date: "2 hours ago",
          text: "I agree. It's a <mark>complicated issue and requires more research into the process</mark>, but for now we must honor the precendence of Roe vs Wade until reasonable conclusion can be made.",
          votes: 8,
          comments: [
            {
              username: "LoveIdeas",
              date: "1 hours ago",
              text: "However, you could argue that woman's autonomy comes first.",
              votes: 3,
              comments: []
            }
          ]
        },
        {
          username: "KevinC.",
          date: "30 min ago",
          text: "I really don't think abortion should be allowed at any stage, and our laws should reflect that.",
          votes: 5,
          comments: []
        },
        {
          username: "IngloriousBees",
          date: "2 hours ago",
          text: "You are being so stupid rn what the heck honoring what you're a murderer",
          votes: 1,
          comments: []
        },
        {
          username: "AlphaMale",
          date: "2 hours ago",
          text: "LOL what a delusional argument babys don't have feelings just kill them all",
          votes: 20,
          comments: []
        },
        {
          username: "Kevin",
          date: "10 mins ago",
          text: "this",
          votes: 2,
          comments: [
            {
              username: "Kevin",
              date: "8 mins ago",
              text: "is",
              votes: 1,
              comments: [
                {
                  username: "Kevin",
                  date: "5 mins ago",
                  text: "to",
                  votes: 0,
                  comments: [
                    {
                      username: "Kevin",
                      date: "4 mins ago",
                      text: "show",
                      votes: -1,
                      comments: [
                        {
                          username: "Kevin",
                          date: "2 mins ago",
                          text: "nesting",
                          votes: -200,
                          comments: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  return (
    <Card {...props}>
      <span id="comments">Comments</span>
      <span id="comments_count">(9)</span>
      <button id="comment-exit-button">X</button>
      <Reply 
        quote={props.quote}
      />
      <CommentContext.Provider value={[replying, setReplying]}>
        {gen_comments(comments, 0, [], props.getNews)}
      </CommentContext.Provider>
    </Card>
  );
}

export default styled(Comments)`
  width: 40vw;
  height: fit-content;
  top: 7.0vw;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  > * {
    margin-bottom: 1vw;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  #comments,
  #comments_count {
    font-weight: 900;
    font-size: 20px;
    display: inline-block;
    margin-right: 0.4vw;
    margin-bottom: 1vw;
  }

  #comment-exit-button {
    display: inline-block;
    background-color: inherit;
    border: none;
    font-size: 1.5vw;
    float: right;
  }

  #comment-exit-button:hover {
    display: inline-block;
    background-color: inherit;
    border: none;
    font-size: 1.5vw;
    cursor: pointer;
    background-color: red;
    color: white;
    float: right;

}

  #comments {
    color: #000000;
  }

  #comments_count {
    color: #53626f;
  }
`;
