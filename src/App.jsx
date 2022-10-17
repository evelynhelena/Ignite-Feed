import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Evelyn Helena"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi optio minima maxime facere pariatur repellat doloremque odit neque dolore debitis aliquam sunt, voluptas quisquam ad rerum perspiciatis magni labore?"
          />
          <Post
            author="Samia Helena"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi optio minima maxime facere pariatur repellat doloremque odit neque dolore debitis aliquam sunt, voluptas quisquam ad rerum perspiciatis magni labore?"
          />
        </main>
      </div>
    </>
  );
}
