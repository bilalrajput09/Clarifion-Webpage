import classes from './styles/DiscountContainer.module.css';

const DiscountContainer = () => {
  return (
    <div className={classes.discount_container}>
      <div>
        <img src="\assets\Group 1000004656.png" />
      </div>
      <p>
        Save <span>53%</span> and get <span>6 extra Clarifision</span> for only{' '}
        <span>$14 Each</span>.
      </p>
    </div>
  );
};

export default DiscountContainer;
