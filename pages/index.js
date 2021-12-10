import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(null);
  const fetchDataFromAPI = () => {
    axios
      .get("/api/hello")
      .then((response) => {
        console.log(response);
        setDataFromAPI(response.data.message);
      })
      .catch((err) => {
        console.log(err.message || JOSN.stringify(err));
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>CLI Test App</title>
        <meta name="description" content="Test Cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Clic the button below to fetch data from the api</h1>
        <button onClick={fetchDataFromAPI} className={styles.button}>
          Fetch Data
        </button>
        <div>
          <h3>Got data</h3>
          {dataFromAPI && <p>{dataFromAPI}</p>}
          {!dataFromAPI && <p>No data</p>}
        </div>
      </main>
    </div>
  );
}
