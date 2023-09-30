import style from "../page.module.css";
export default function NavBar() {
  return (
    <div className={style.navBar}>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
}
