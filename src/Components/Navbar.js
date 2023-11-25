import classes from './styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav_main_container}>
      <div>
        <img src="\assets\600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png" />
      </div>
      <div className={classes.nav_image_container_2}>
        <img src="\assets\Frame 1484578055.png" />
        <img src="\assets\norton-antivirus-logo 1.png" />
      </div>
    </nav>
  );
};

export default Navbar;
