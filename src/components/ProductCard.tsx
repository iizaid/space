import type { Product } from '../data/menuItems';

type ProductCardProps = {
  product: Product;
  active?: boolean;
};

export function ProductCard({ product, active = false }: ProductCardProps) {
  return (
    <article className={`product-card ${active ? 'product-card--active' : ''}`}>
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span>{product.badge}</span>}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
      </div>
    </article>
  );
}
