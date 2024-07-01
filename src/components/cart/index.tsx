import { Handbag } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";
import { CartContainer } from "./styles";

interface CartProps {
  onClick: () => void
}

export function Cart({ onClick }: CartProps) {
  const { cartCount } = useShoppingCart()

  return (
    <CartContainer onClick={onClick}>
      {(cartCount && cartCount !== 0) ? (
        <span>{cartCount}</span>
      ) : ''} 
      <Handbag size={24} weight="bold" />
    </CartContainer>
  )
}