import classes from './styles/ProductDisplay.module.css';

const ProductDisplay = () => {
  return (
    <>
      <div className={classes.product_display_main_container}>
        <div className={classes.product_display_img_container}>
          <img src="/assets\Group 1484578135.png" />
        </div>
        <div className={classes.product_display_details_container}>
          <div className={classes.product_display_name_container}>
            <p>Clarifion Air Ionizer</p>
            <div>
              <h6>$180</h6> <span>$84</span>
            </div>
          </div>
          <div className={classes.product_display_star_container}>
            <img src="\assets\ant-design_star-filled.png" />
            <img src="\assets\ant-design_star-filled.png" />
            <img src="\assets\ant-design_star-filled.png" />
            <img src="\assets\ant-design_star-filled.png" />
            <img src="\assets\ant-design_star-filled.png" />
          </div>
          <div className={classes.product_display_stock_container}>
            <div>
              <img src="\assets\Group 1000001340.png" />
            </div>
            <p>12 left in Stock</p>
          </div>
        </div>
      </div>

      <p className={classes.product_display_details_text}>
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
    </>
  );
};

export default ProductDisplay;
