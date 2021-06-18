import { Button } from '@material-ui/core'

export default function PrimaryButton({ ...rest }) {
  return (
    <Button color='primary' variant='outlined' size='large' {...rest} />
  )
}
