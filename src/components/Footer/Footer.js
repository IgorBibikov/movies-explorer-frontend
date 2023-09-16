import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && (
        <footer className="footer">
          <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
          <div className="footer__container">
            <ul className="footer__list">
              <li className="footer__item">
                <Link
                  to="https://practicum.yandex.ru"
                  className="footer__link"
                  target="_blank"
                >
                  Яндекс.Практикум
                </Link>
              </li>
              <li className="footer__item">
                <Link
                  to="https://github.com"
                  className="footer__link"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
            </ul>
            <p className="footer__copyright">© 2023</p>
          </div>
        </footer>
      )}
    </>
  );
}
export default Footer;
