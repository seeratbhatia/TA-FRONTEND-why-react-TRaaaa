import data from './data.json';
import PropTypes from 'prop-types';

function Article() {
  return (
    <div className='box'>
      {data.map((article) => (
        <Card key={article.id} info={article} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className='article'>
      <img src={props.info.urlToImage} alt='' height={220} />
      <div className='details'>
        <h2>Author: {props.info.author.toUpperCase()}</h2>
        <h3>Title:- {props.info.title}</h3>
        <p>Content:- {props.info.content}</p>
        <p>Description:- {props.info.description}</p>
        <a href={props.info.url}>For more</a>
        <span>Published At- {props.info.publishedAt}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;