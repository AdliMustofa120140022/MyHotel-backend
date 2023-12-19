import { Card, Navbar } from "../../components";
import dashImage from "../../assets/jumbotron-dashboard.png";

const Dashboard = () => {

    const data = [
        { id: 1, rate: 4.5, title: 'Title 1', image: 'hotel-1.png', price : 136000 },
        { id: 2, rate: 4.5, title: 'Title 2', image: 'hotel-2.png', price : 136000 },
        { id: 3, rate: 4.5, title: 'Title 5', image: 'hotel-3.png', price : 136000 },
        { id: 3, rate: 4.5, title: 'Title 5', image: 'hotel-4.png', price : 136000 },
      ];
    return (
        <div className="App w-100 min-vh-100">
            <Navbar
                isActived='dashboard'
            />

            <div className="container d-flex">
                <img src={dashImage} style={{
                    maxHeight: '100%',
                    width: '100%',
                    height: 'auto',
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    }} 
                    alt="logo" />
                <div className="text-white px-4" style={{
                    position: 'absolute',
                    top: '45%',
                }}>
                    <p className="fw-bolder fs-3 p-0 m-0" style={{
                        textShadow: '2px 2px 4px #000000',
                    }}>
                        Ayo wujudkan liburan mu 
                    </p>
                    <p className="fw-bolder fs-3 p-0 m-0" style={{
                        textShadow: '2px 2px 4px #000000',
                    }}>
                        dengan pesan hotel di My Hotel
                    </p>
                </div>
            </div>

            <div className="container d-flex justify-content-between align-items-center fw-semibold pt-3">
                <p>Recommendations Hotel</p>
                <p>See all</p>
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

export default Dashboard;