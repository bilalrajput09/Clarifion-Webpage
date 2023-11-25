import classes from './styles/PaymentMethodContainer.module.css';

const PaymentMethodContainer = () => {
  return (
    <div className={classes.payment_method_main_container}>
      <div className={classes.claim_discount_btn_container}>
        <p>YES - CLAIM MY DISCOUNT</p>
        <img src="\assets\Line 1.png" />
      </div>

      <div className={classes.payment_method_details_container}>
        <div className={classes.payment_method_shipping_container}>
          <p>Free Shipping</p>
          <hr className={classes.hr_containers_1}></hr>
          <div className={classes.secure_256_container}>
            <div>
              <img src="\assets\lock (7) 1.png" />
            </div>

            <p>Secure 256-Bit SSL Encryption</p>
          </div>
        </div>
        <hr className={classes.hr_containers_2}></hr>
        <div className={classes.payment_method_imgs_container}>
          <img src="\assets\visa.png" />
          <img src="\assets\shop pay.png" />
          <img src="\assets\paypal.png" />
          <img src="\assets\mastercard.png" />
          <img src="\assets\gpay.png" />
          <img src="\assets\apple pay.png" />
          <img src="\assets\amex.png" />
        </div>
      </div>

      <p className={classes.payment_method_no_thanks_container}>
        NO THANKS, I DON'T WANT THIS.
      </p>
    </div>
  );
};

export default PaymentMethodContainer;
