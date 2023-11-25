import classes from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.copyright_container}>
        <p>Copyright (C) 2023</p>
        <hr></hr>
        <p>clarifionsupport@clarifion.com</p>
      </div>

      <div className={classes.secure_container_footer}>
        <img src="\assets\lock (7) 2.png"></img>
        <p>Sercure 256-Bit SSL Encryption</p>
      </div>
    </footer>
  );
};

export default Footer;
