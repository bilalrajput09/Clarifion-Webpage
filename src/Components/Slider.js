import classes from './styles/Slider.module.css';

const Slider = () => {
  return (
    <div className={classes.slider_main_container}>
      <div className={classes.slider_container}>
        <img src="\assets\Layer_1.png" className={classes.slider_arrows} />
        <p>
          <img
            src="/assets/fluent_checkmark-starburst-20-regular.png"
            alt="tick-in-slider-text"
          />
          30-DAY SATISFACTION GUARANTEE
        </p>
        <img src="\assets\Layer_2.png" />
      </div>
    </div>
  );
};

export default Slider;
