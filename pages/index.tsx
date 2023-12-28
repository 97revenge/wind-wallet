import { NextPage } from "next";
import Head from "next/head";

import Scaffold from "@/scaffold";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>wind-wallet</title>
        <meta
          name="wind-wallet"
          content="Freelance service in developing Google wallets for companies and other types of regional businesses."
        />
      </Head>
      <Scaffold />
    </>
  );
};

export default Index;
