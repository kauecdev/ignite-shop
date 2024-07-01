import { styled } from "@/styles";

export const CartListContainer = styled('aside', {
  '&[data-show=true]': {
    transition: 'all 0.5s',
  },

  '&[data-show=false]': {
    opacity: 0,
    zIndex: -1
  },

  backgroundColor: '$gray800',

  height: '100%',
  minWidth: 500,

  position: 'absolute',
  right: 0,

  '> div': {
    height: 'calc(100% - 7.5rem)',
    padding: '4.5rem 3rem 3rem',
    position: 'relative',

    footer: {
      position: 'absolute',
      bottom: '3rem',
      width: 'calc(100% - 6rem)',

      span: {
        color: '$gray300',
        fontSize: '1rem'
      },
      
      strong: {
        paddingTop: '0.5rem',
        paddingBottom: '3.5rem',
        color: '$gray100',
        fontSize: '$md'
      },
  
      div: {
        display: 'flex',
        justifyContent: 'space-between'
      },

      button: {
        width: '100%',
        backgroundColor: '$green500',
        color: '$white',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
          transition: 'background-color 0.2s',
        },

        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed'
        }
      }
    }
  },
})

export const CloseButton = styled('button', {
  background: 'none',
  border: 0,
  position: 'absolute',
  color: '$gray500',

  top: '4%',
  right: '4%',

  cursor: 'pointer',
  zIndex: 2
})

export const CartItemsContainer = styled('section', {
  padding: '2rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const CartItem = styled('article', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'
})

export const CartItemImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },
})

export const CartItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '$md',

  span: {
    color: '$gray300',
    display: 'block'
  },
  
  strong: {
    color: '$gray100'
  },

  button: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
    border: 0,
    background: 'none',
    cursor: 'pointer',
    alignSelf: 'start'
  }
})