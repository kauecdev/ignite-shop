import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/products";

export default function Product() {
  return <ProductContainer>
    <ImageContainer></ImageContainer>
    <ProductDetails>
      <h1>Camiseta X</h1>
      <span>R$ 70.90</span>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolores, eos ullam enim quae illum ratione nulla nam sit porro! Illum amet, magni saepe ratione quasi ex distinctio eum velit!</p>
      <button>
        Comprar agora
      </button>
    </ProductDetails>
  </ProductContainer>
}