import { styled } from "@/styles";

export const CartContainer = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  backgroundColor: '$gray800',
  color: '$gray500',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',

  cursor: 'pointer',

  span: {
    backgroundColor: '$green500',
    color: '$white',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: 999,
    fontSize: '0.75rem',
    lineHeight: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: 'calc(-30% + 0.5rem)',
    right: 'calc(-30% + 0.5rem)',
  }
})