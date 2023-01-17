import './news.css';

const News = ({ news, error, title }) => {
  if (!news || news.length === 0) {
    return error ? <h2>{error}</h2> : null;
  }

  return (
    <div>
      <h2>{`${title}:`}</h2>
      <ul className="news-list">
        {news.map(({ url, title, description, urlToImage, publishedAt, author }) => (
          <li key={publishedAt} className="news">
            <div className="description">
              <a href={url} className="news-title">{title || 'No title'}</a>
              <p className="text">{`${description || 0} points`}</p>
              <img className="news-image" src={urlToImage} alt={title.slice(0, 5)} />
              <p className="date">Publeshed: {new Date(publishedAt).toLocaleDateString()} </p>
              <p className="author">Author: {author || 'no author'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
