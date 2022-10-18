import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel variant="dark" className='mb-3 justify-content-center'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/v4.wpgroupbuydemo.com/wp-content/uploads/2021/11/banner-pizza.jpg?fit=1118%2C400&ssl=1"
          alt="Pikachu" 
        />
              <Carousel.Caption className='my-3'>
                  <h3 className="carrusel">Pizzería Mamma Mía</h3>
          <p className="carrusel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://popidi.com/wp-content/uploads/2018/02/banner2-base.jpg"
          alt="charizard" 
        />
              <Carousel.Caption>
                  <h3 className="carrusel">Pizzería Mamma Mía</h3>
          <p className="carrusel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/banner-panorámico-con-rebanadas-apiladas-de-pizza-rodajas-pizzas-crujientes-fuego-fresco-sobre-una-delgada-base-coronada-hojas-190289108.jpg"
          alt="solarbeam" 
        />
              <Carousel.Caption>
                  <h3 className="carrusel">Pizzería Mamma Mía</h3>
          <p className="carrusel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;