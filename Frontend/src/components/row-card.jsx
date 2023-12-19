import Card from './card';
import PropType from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RowCard = ({ data, columnsPerRows }) => {
  // const chunkArray = (arr, size) => {
  //   return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
  //     arr.slice(i * size, i * size + size)
  //   );
  // };

  // const rows = chunkArray(data, columnsPerRows);

  return (
    <Container>
      {/* {data.length > 0 &&
          data.map(d => (
              <Row xs={1} md={2} className="g-4">
              {array.from({ length: columnsPerRows }).map((_, idx) => (
              <Col key={idx}>
                <Card
                  key={idx}
                  id={d.id}
                  title={d.title}
                  description={d.desc}
                  image={d.image}
                />
              </Col>
          ))}
          </Row>
        ))} */}
    </Container>
  );
};

RowCard.propTypes = {
    columnsPerRows: PropType.number,
    data: PropType.array,
};

export default RowCard;
