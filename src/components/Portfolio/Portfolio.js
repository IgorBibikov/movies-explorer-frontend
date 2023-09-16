import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link
            to="https://github.com/IgorBibikov/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            Статичный сайт
          </Link>
          <Link
            to="https://github.com/IgorBibikov/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            ↗
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://github.com/IgorBibikov/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            Адаптивный сайт
          </Link>
          <Link
            to="https://github.com/IgorBibikov/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            ↗
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            to="https://github.com/IgorBibikov/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            Одностраничное приложение
          </Link>
          <Link
            to="https://github.com/IgorBibikov/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            ↗
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
