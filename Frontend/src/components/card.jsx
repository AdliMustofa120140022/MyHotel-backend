import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Card = ({ id, title, rate, image, price }) => {
  return (
    <a className="text-decoration-none" href={`/${id}`}>
        <div className="card">
          {image &&
              <img src={(`./src/assets/${image}`)} style={{
                width: '100%',
                height: '270px',
                top: 0,
                left: 0,
                objectFit: 'cover',
                }}
                className="card-img-top rounded-bottom-2" 
                alt="..." />
            }
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text d-flex gap-1 align-items-center">
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              <FaStar color="#ffc107" />
              {rate}
            </p>
            <p className="card-text">{} {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
              }).format(price)}</p>
            </div>
        </div>
      </a>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  rate: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.number
};

export default Card;