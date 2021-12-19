import React from 'react';
import axios from 'axios';

export default class TestingPostArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic_name: null,
      article_title:'',
      article_text:'',
      polarization_score: null
    }
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  handleSubmit = event => {
    event.preventDefault();

    const {topic_name, article_title, article_text, polarization_score}= this.state
    axios.post("api/post_article/", {topic_name, article_title, article_text, polarization_score})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }




  render() {
    return (
      <div className='test'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Topic name:
            <input type="number" name="topic_name" value={this.state.topic_name} onChange={this.handleChange} />
          </label>
          <label>
            Article Title:
            <input type="text" name="article_title" value={this.state.article_title} onChange={this.handleChange} />
          </label>
          <label>
            Article Text:
            <input type="text" name="article_text" value={this.state.article_text} onChange={this.handleChange} />
          </label>
          <label>
            Polarization Score:
            <input type="number" name="polarization_score" value={this.state.polarization_score} onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}