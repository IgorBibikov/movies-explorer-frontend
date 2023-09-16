import { Link, useNavigate } from 'react-router-dom';
function NotFound(props) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link
        className="not-found__link"
        onClick={props.isLoggedIn ? goBack : navigate('/')}
      >
        Назад
      </Link>
    </main>
  );
}
export default NotFound;
