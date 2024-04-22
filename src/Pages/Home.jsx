import { Fragment } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/footer";
import Location from "../Components/Location";
import HomeMain from "../Components/HomeMain";
const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Location hashtags={['Near By', '#furniture', '#clothing', '#titanwatch', '#jewellery', '#garden', '#bags','#gardens', '#videogames', '#mensshoes', '#office']}/>
      <HomeMain/>
      <Footer />
    </Fragment>
  );
};

export default Home;
