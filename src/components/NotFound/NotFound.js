import { useNavigate } from 'react-router-dom';
function NotFound(props) {
  const navigate = useNavigate();
  console.log(props.isLoggedIn, 'в навигейт');
  function goBack() {
    navigate(-1);
  }
  return (
    <main className="content">
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button className="not-found__button" onClick={goBack}>
          Назад
        </button>
      </section>
    </main>
  );
}
export default NotFound;
