import classes from './styles/ProductSpecifications.module.css';

const ProductSpecifications = () => {
  return (
    <ul className={classes.product_specifications_conatiner}>
      <li>
        <div>
          <img src="\assets\tick-circle.png" />
        </div>

        <p>
          Negative Ion Technology may <b>help with allergens</b>
        </p>
      </li>
      <li>
        <div>
          <img src="\assets\tick-circle.png" />
        </div>
        <p>
          Designed for air <b>rejuvenation</b>
        </p>
      </li>
      <li>
        <div>
          <img src="\assets\tick-circle.png" />
        </div>
        <p>
          <b>Perfect for every room</b> in all types of places
        </p>
      </li>
    </ul>
  );
};

export default ProductSpecifications;
