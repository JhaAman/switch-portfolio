import type { NextPage } from "next";
import Footer from "_/components/Footer";
import Header from "_/components/TitleBar";
import Container from "_/layouts/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between h-screen text-black dark:text-white">
        <Header />
        {/* <h1 className="uppercase">Aman</h1> */}
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
