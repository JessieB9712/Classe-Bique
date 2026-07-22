import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import sacLaineBleu from './assets/products/sac-laine-bleu.jpg'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Sac Bleu Céleste',
    description: 'Sac en laine tressée à la main, fermoir doré et anse tissée.',
    price: 79.9,
    image: sacLaineBleu,
  },
]

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="accueil" className="hero">
          <h1>L'artisanat en laine, fait pour durer</h1>
          <p>Des sacs tressés à la main, pièce par pièce, avec amour.</p>
        </section>

        <section id="boutique" className="shop">
          <h2>Notre boutique</h2>
          <div className="shop__grid">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
