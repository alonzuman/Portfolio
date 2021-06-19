import { sanityClient } from "../../sanity";

const API = {
  Projects: {
    getAllProjects: async () => {
      const query = `*[_type == "project"]{
        ...,
        "categories": categories[] -> title
      }`
      return sanityClient.fetch(query)
    },

    getProjectBySlug: async (slug) => {
      const query = `*[slug.current == "${slug}"][0]`
      return sanityClient.fetch(query)
    }
  },
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
