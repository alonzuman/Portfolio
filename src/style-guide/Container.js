import { Container as MContainer } from '@material-ui/core'

export default function Container({ children, ...rest }) {
  return (
    <MContainer style={{ minHeight: '90vh' }} maxWidth='md' {...rest}>
      {children}
    </MContainer>
  )
}
