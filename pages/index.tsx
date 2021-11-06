import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import DomainSearch from "../components/DomainSearch";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
        <About></About>
        <DomainSearch />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;