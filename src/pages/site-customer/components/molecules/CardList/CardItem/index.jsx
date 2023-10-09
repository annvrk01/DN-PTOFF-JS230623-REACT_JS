import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const { product } = props;
  const {
    id,
    delivery_day,
    discount_product,
    image_url,
    name_product,
    price_discount,
    price_product,
    rating,
    sold_product,
  } = product;

  return (
    <Link to="/details" className="card__item" data-id={id}>
      <div className="card__item-thumbnail">
        <img src={image_url} alt={name_product} />
      </div>
      <div className="card__item-content">
        <p className="card__item-title">{name_product}</p>
        <div className="card__item-rating-count">
          <div className="card__item-rating">
            <span>{rating}</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'rgb(253, 216, 54)' }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
          </div>
          <div className="card__item-count">Đã bán {sold_product}</div>
        </div>
        <p className={`card__item-price ${discount_product ? 'discount' : ''}`}>
          {(discount_product ? price_product : price_discount).toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
          })}
          {discount_product ? <span className="card__item-price--discount">{discount_product * 100}%</span> : ''}
        </p>
      </div>
      <div className="card__item-footer">
        <p>{delivery_day}</p>
      </div>
    </Link>
  );
}

export default CardItem;
