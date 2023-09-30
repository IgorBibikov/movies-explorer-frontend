import foto from '../../images/foto.jpg';
function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__description-container">
          <h3 className="about-me__name">Игорь</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/IgorBibikov"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__img"
          src={foto}
          alt="Фотография фронтенд-разработчка Игоря на мальдивском пляже "
        />
      </div>
    </section>
  );
}
export default AboutMe;
