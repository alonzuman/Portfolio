import { makeStyles } from "@material-ui/core";

export default function useClasses(obj) {
  const useStyles = makeStyles(theme => (obj))
  return useStyles()
}
