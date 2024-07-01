import { useShoppingCart } from "use-shopping-cart"
import { CartItem, CartItemDetails, CartItemImageContainer, CartItemsContainer, CartListContainer, CloseButton } from "./styles"
import Image from "next/image"
import { X } from "@phosphor-icons/react"
import { useState } from "react"
import axios from "axios"

interface CartListProps {
  show: boolean
  onClose: () => void
}

export function CartList({ show, onClose }: CartListProps) {
  const { cartDetails, totalPrice, cartCount, removeItem, clearCart } = useShoppingCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const cartItems = cartDetails ? Object.keys(cartDetails).map(cartItemId => cartDetails[cartItemId]) : []

  function handleRemoveItemFromCart(id: string) {
    removeItem(id)
  }

  async function handleCheckout() {
    try {
      const response = await axios.post('/api/checkout', {
        items: cartItems.map(item => ({ 
          price: item.defaultPriceId,
          quantity: item.quantity
        }))
      })

      clearCart()

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout.')
    }
  }

  return (
    <CartListContainer data-show={show}>
      <CloseButton onClick={onClose}>
        <X size={24} />
      </CloseButton>
      <div>
        <h2>
          Sacola de compras
        </h2>
        {cartDetails && (
          <CartItemsContainer>
            {cartItems.length > 0 ? cartItems.map(product => {
              return (
                <CartItem key={product?.id}>
                  <CartItemImageContainer>
                    <Image src={product?.imageUrl} width={94} height={94} alt="" />
                  </CartItemImageContainer>
                  <CartItemDetails>
                    <div>
                      <span>{product?.name}</span>
                      <strong>
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(product?.price / 100)}
                      </strong>
                    </div>
                    <button onClick={() => handleRemoveItemFromCart(product?.id)}>
                      Remover
                    </button>
                  </CartItemDetails>
                </CartItem>
              )
            }) : (
              <h3>
                Seu carrinho está vazio.
              </h3>
            )}
          </CartItemsContainer>
        )}

        <footer>
          <div>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </div>

          <div>
            <strong>
              Valor total
            </strong>
            <strong>
            {totalPrice && Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice / 100)}
            </strong>
          </div>

          <button disabled={cartCount === 0 || isCreatingCheckoutSession} onClick={handleCheckout}>
            Finalizar compra
          </button>
        </footer>
      </div>
    </CartListContainer>
  )
}