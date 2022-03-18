import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "_/layouts/Container";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container
    // title=""
    // description=""
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Container>
  );
};

export default Home;
