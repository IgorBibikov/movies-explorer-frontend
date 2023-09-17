import { Link } from 'react-router-dom';
function Portfolio() {
  return (
    <main className="content">
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <Link
              to="https://github.com/IgorBibikov/how-to-learn"
              className="portfolio__link"
              target="_blank"
            >
              <h2 className="portfolio__link-title">Статичный сайт</h2>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              to="https://github.com/IgorBibikov/russian-travel"
              className="portfolio__link"
              target="_blank"
            >
              <h2 className="portfolio__link-title">Адаптивный сайт</h2>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              to="https://github.com/IgorBibikov/react-mesto-api-full-gha"
              className="portfolio__link"
              target="_blank"
            >
              <h2 className="portfolio__link-title">
                Одностраничное приложение
              </h2>
              <p className="portfolio__link-arrow">↗</p>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default Portfolio;
