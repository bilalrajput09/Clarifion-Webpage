import MainText from './MainText';
import ProductDisplay from './ProductDisplay';
import ProductSpecifications from './ProductSpecifications';
import classes from './styles/MainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={classes.main_container}>
      <MainText />
      <ProductDisplay />
      <ProductSpecifications />
    </div>
  );
};

export default MainContainer;
