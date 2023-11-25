import DiscountContainer from './DiscountContainer';
import MainText from './MainText';
import PaymentMethodContainer from './PaymentMethodContainer';
import ProductDisplay from './ProductDisplay';
import ProductSpecifications from './ProductSpecifications';
import SatisfactionContainer from './SatisfactionContainer';
import classes from './styles/MainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={classes.main_container}>
      <MainText />
      <ProductDisplay />
      <ProductSpecifications />
      <DiscountContainer />
      <PaymentMethodContainer />
      <SatisfactionContainer />
    </div>
  );
};

export default MainContainer;
