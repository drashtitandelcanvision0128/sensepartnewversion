import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "./AboutUs/About";
import ContactUs from "../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ContactUs />
    </>
  );
};

export default Home;