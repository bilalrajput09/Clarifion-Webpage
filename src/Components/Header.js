import classes from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={classes.header_main_container}>
      <h1 className={classes.main_text}>Wait ! your order in progress.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur </p>
    </header>
  );
};

export default Header;
