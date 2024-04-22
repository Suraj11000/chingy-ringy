import { Fragment } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/footer";
import Stories from "../Components/stories";
import Channel from "../Components/channel";
import Discover from "../Components/Discover";

const Shop = () => {
  return (
    <Fragment>
      <Nav />
      <Stories
        story={[
          "You",
          "Yash",
          "riya",
          "divya",
          "Harshal",
          "sanika",
          "hund",
          "Ronak",
          "Neel",
          "Gautam",
          "Kelly",
        ]}
      />
      <Channel/>
      <Discover/>
      <Footer />
    </Fragment>
  );
};

export default Shop;
