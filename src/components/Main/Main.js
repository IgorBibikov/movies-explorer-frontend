import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main(props) {
  return (
    <main className="content">
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Tech></Tech>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  );
}
export default Main;
