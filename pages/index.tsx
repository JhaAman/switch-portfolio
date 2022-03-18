import type { NextPage } from "next";
import Container from "_/layouts/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Container>
  );
};

export default Home;
