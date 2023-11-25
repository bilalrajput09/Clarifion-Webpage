import classes from './styles/OrderProcess.module.css';

const OrderProcess = (props) => {
  return (
    <div className={classes.orderProcess_conatiner}>
      <img src={props.img} />
      <p
        className={
          props.text === 'Special Offer' ? classes.special_offer_text : ''
        }
      >
        {props.text}
      </p>
    </div>
  );
};

export default OrderProcess;
