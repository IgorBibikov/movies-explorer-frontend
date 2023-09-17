import { Link, useNavigate } from 'react-router-dom';
function NotFound(props) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main className="content">
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link
          className="not-found__link"
          onClick={props.isLoggedIn ? goBack : navigate('/')}
        >
          Назад
        </Link>
      </section>
    </main>
  );
}
export default NotFound;
