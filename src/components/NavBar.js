import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <h1>MY VIDEOS</h1>
      <div className={classes.navLinks}>
        <a href="./">
          <h4>Home</h4>
        </a>
        <a href="./">
          <h4>Recent Uploads</h4>
        </a>
        <a href="./">
          <h4>All Videos</h4>
        </a>
        <a href="./">
          <h4>About</h4>
        </a>
        <a href="./">
          <h4>Contact</h4>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
