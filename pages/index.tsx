import type { NextPage } from "next";
import Container from "_/layouts/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="flex justify-center h-screen items-center text-black dark:text-white">
        {/* <h1 className="uppercase">Aman</h1> */}
      </div>
    </Container>
  );
};

export default Home;
