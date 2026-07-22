import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ image, name, description, price, currency = '€' }) {
  const [added, setAdded] = useState(false)

  const handleBuy = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={image} alt={name} className="product-card__image" />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">
            {price.toFixed(2)} {currency}
          </span>
          <button
            type="button"
            className={`product-card__buy ${added ? 'product-card__buy--added' : ''}`}
            onClick={handleBuy}
          >
            {added ? 'Ajouté ✓' : 'Acheter'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
