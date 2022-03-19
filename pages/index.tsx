import type { NextPage } from "next";
import Container from "_/layouts/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen text-black dark:text-white">
        {/* <h1 className="uppercase">Aman</h1> */}
      </div>
    </Container>
  );
};

export default Home;
