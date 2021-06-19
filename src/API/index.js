import { sanityClient } from "../../sanity";

const API = {
  Blog: {
    getAllPosts: async () => {
      const query = `*[_type == "post"]{
        ...,
        author -> {
          _id,
          name,
          image,
          slug
        }
      }`
      return sanityClient.fetch(query)
    },

    getPostBySlug: async (slug) => {
      const query = `*[slug.current == "${slug}"][0]{
        ...,
        author -> {
          _id,
          name,
          image,
          slug
        }
      }`
      return sanityClient.fetch(query)
    }
  }
}

export default API;
