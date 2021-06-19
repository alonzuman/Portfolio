import { urlFor } from "../../sanity";

export default function SanityImage({ image, ...rest }) {
  return <img src={urlFor(image).auto("format")} height='100%' width='100%' objectFit='cover'{...rest} />
}
