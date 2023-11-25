import classes from './styles/MainText.module.css';

const MainText = () => {
  return (
    <>
      <div className={classes.main_text_container}>
        <p>
          <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
          only
          <span> $14 each</span> ($84.00 total!)
        </p>
        <img src="\assets\image 4.png" />
      </div>
    </>
  );
};

export default MainText;
