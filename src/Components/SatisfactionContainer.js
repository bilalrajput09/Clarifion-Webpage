import classes from './styles/SatisfactionContainer.module.css';

const SatisfactionContainer = () => {
  return (
    <div className={classes.satisfaction_container}>
      <div>
        <img src="\assets\image 6.png" />
      </div>

      <p>
        If you are not completely thrilled with your Clarifion - We have a{' '}
        <b>30 day satisfaction guarantee</b>. Please refer to our return policy
        at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  );
};

export default SatisfactionContainer;
