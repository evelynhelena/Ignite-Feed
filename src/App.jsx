import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Evelyn Helena"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi optio minima maxime facere pariatur repellat doloremque odit neque dolore debitis aliquam sunt, voluptas quisquam ad rerum perspiciatis magni labore?"
      />
      <Post
        author="Samia Helena"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi optio minima maxime facere pariatur repellat doloremque odit neque dolore debitis aliquam sunt, voluptas quisquam ad rerum perspiciatis magni labore?"
      />
    </>
  );
}
