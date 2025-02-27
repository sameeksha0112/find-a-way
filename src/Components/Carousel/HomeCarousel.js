import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <Carousel className='container'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 fluid"
                    src={require("../../Assets/Images/slider/slide1.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 fluid"
                    src={require("../../Assets/Images/slider/slide2.png")}
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 fluid"
                    src={require("../../Assets/Images/slider/slide3.png")}
                    alt="Third slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 fluid"
                    src={require("../../Assets/Images/slider/slide4.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 fluid"
                    src={require("../../Assets/Images/slider/slide5.jpg")}
                    alt="Third slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;