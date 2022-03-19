import type { NextPage } from "next";
import Carousel from "_/components/Carousel";
import Footer from "_/components/Footer";
import NavBar from "_/components/NavBar";
import Header from "_/components/TitleBar";
import Container from "_/layouts/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between h-screen text-black dark:text-white">
        <Header />
        <Carousel />
        <NavBar />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
