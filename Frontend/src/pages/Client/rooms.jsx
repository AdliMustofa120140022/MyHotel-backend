import { Card, Navbar } from "../../components";
import dashImage from "../../assets/jumbotron-dashboard.png";
import { BsSearch } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Rooms = () => {
    const data = [
        { id: 1, rate: 4.5, title: 'Title 1', image: 'hotel-1.png', price : 136000 },
        { id: 2, rate: 4.5, title: 'Title 2', image: 'hotel-2.png', price : 136000 },
        { id: 3, rate: 4.5, title: 'Title 5', image: 'hotel-3.png', price : 136000 },
        { id: 4, rate: 4.5, title: 'Title 5', image: 'hotel-4.png', price : 136000 },
      ];
    return (
        <div className="App w-100 min-vh-100">
            <Navbar
                isActived='rooms'
            />

            <div className="container d-flex justify-content-center">
                <img src={dashImage} style={{
                    maxHeight: '100%',
                    width: '100%',
                    height: 'auto',
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    }} 
                    alt="logo" />
                <div className="p-3 rounded-5 border-1 border row d-flex align-items-center" style={{
                    backgroundColor : '#F5F5F5',
                    position: 'absolute',
                    bottom: '30%',
                    width: '65%',
                }}>
                    <div className="col-4 align-items-center">
                        <div className="row">
                            <Form.Select aria-label="location" style={{
                                borderRadius: '15px',
                                border: 'none',
                                backgroundColor : '#F5F5F5'
                                }}
                                className="fw-bold fs-5">
                                <option>Locations</option>
                                <option value="1">Jakarta</option>
                                <option value="2">Bandung</option>
                                <option value="3">Lampung</option>
                            </Form.Select>
                        </div>
                        <div className="row">
                            <span style={{color: '#626668'}} className="mx-2 px-1 text-start">
                                Enter your destinations
                            </span>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center">
                    <InputGroup className="my-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className="border-0" style={{
                            backgroundColor : '#F5F5F5'
                        }}>
                        <BsSearch />
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Search"
                        className="border-1 rounded-4"
                        />
                    </InputGroup>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-column justify-content-center align-items-center fw-semibold pb-3 pt-5">
                <span className="fw-normal fs-3">
                    Ayo wujudkan Liburan mu dengan pesan hotel di my hotel
                </span>
            </div>

            <div className="container p-2 mb-5 rounded-2" style={{
                backgroundColor : '#ACC9DA'
            }}>
                <div className="row">
                {data.map((d, idx) => (
                    <div className="col" key={idx}>
                        <Card
                        key={d.id}
                        id={d.id}
                        title={d.title}
                        rate={d.rate}
                        image={d.image}
                        price={d.price}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rooms;