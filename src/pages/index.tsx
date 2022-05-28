import React from "react";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whitebook</title>
      </Head>
      <Header />
      <h1>Checkout Whitebook Web</h1>
    </>
  );
}
