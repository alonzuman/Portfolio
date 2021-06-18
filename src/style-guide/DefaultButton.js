import { Button } from '@material-ui/core'

export default function DefaultButton({ ...rest }) {
  return (
    <Button disableRipple size='large' {...rest} />
  )
}
