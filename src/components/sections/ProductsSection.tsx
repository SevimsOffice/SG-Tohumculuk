import { Leaf, FlaskConical, Apple, ShoppingBag } from 'lucide-react';
import seedsImg from '@/assets/seeds-product.jpg';
import fertilizerImg from '@/assets/fertilizer-product.jpg';
import foodImg from '@/assets/food-product.jpg';

interface ProductsSectionProps {
  t: {
    products: {
      title: string;
      subtitle: string;
      categories: {
        seeds: string;
        fertilizers: string;
        food: string;
      };
      seedsDesc: string;
      fertilizersDesc: string;
      foodDesc: string;
      shopifyPlaceholder: string;
    };
  };
}

const ProductsSection = ({ t }: ProductsSectionProps) => {
  const products = [
    {
      icon: Leaf,
      title: t.products.categories.seeds,
      description: t.products.seedsDesc,
      image: seedsImg,
    },
    {
      icon: FlaskConical,
      title: t.products.categories.fertilizers,
      description: t.products.fertilizersDesc,
      image: fertilizerImg,
    },
    {
      icon: Apple,
      title: t.products.categories.food,
      description: t.products.foodDesc,
      image: foodImg,
    },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.products.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shopify Placeholder */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center border-2 border-dashed border-primary/30">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-lg font-medium text-foreground">{t.products.shopifyPlaceholder}</p>
          <p className="text-sm text-muted-foreground mt-2">Shopify Integration Area</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
