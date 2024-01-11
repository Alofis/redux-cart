import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [{
  id: 1,
  title: 'Title Book One',
  price: 9.88,
  description: 'The first book I have ever read.'
  },
  {
  id: 2,
  title: 'Title Book Two',
  price: 10.88,
  description: 'The second book I have ever read.'
  }
]

const mapData = DUMMY_DATA.map((product) =>
  <div key={product.id}>
    <ul>
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
    </ul>
  </div>
  )

const Products = (props) => {
  return (
    <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    {mapData}
    </section>
  )
};

export default Products;
