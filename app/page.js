import Link from "next/link";
import Button from "./componets/button";
import NavBar from "./componets/nav-bar";
import Paragraph from "./componets/paragraph";
import Title from "./componets/title";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.main}>
      <NavBar />
      <h1>Home Page</h1>
      <Title />
      <Paragraph />
      <Button />
      <Link href="/about">Take me to About page</Link>
    </div>
  );
}
