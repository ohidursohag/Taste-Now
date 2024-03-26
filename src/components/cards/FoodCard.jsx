import PropTypes from 'prop-types';

const FoodCard = ({item}) => {

  return (
   <div className="card-container">
   <figure className='food-image-container'>
     <img src={item.image} alt="" />
   </figure>
   <div className="name-price-container">
     <p className="name">{item.name}</p>
     <p className="origin">{item.origin}</p>
     <p className="price">${item.price}</p>
   </div>
   <button  className={`add-cart-button`}>
     Add to cart
   </button>
 </div>
  )
};

FoodCard.propTypes = {
   item: PropTypes.object
};

export default FoodCard;
