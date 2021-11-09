import { request, gql } from 'graphql-request';
import moment from 'moment';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPages = async () => {
  const query = gql`
    query MyQuery {
      pagesConnection {
        edges {
          cursor
          node {
            slug
            template
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.pagesConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};


export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
        photos {
            url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getPageDetails = async (slug) => {
  const query = gql`
    query GetPageDetails($slug : String!) {
      page(where: {slug: $slug}) {
        boardMembers {
          name
          position
          image {
            url
          }
        }
        gridModel
        majorDonors {
          image {
            url
          }
          name
          url
        }
        title
        template
        slug
        content {
          raw
        }
        featuredImage {
          url
        }
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.page;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getSpecifiedPages = async (name) => {
  const query = gql`
    query GetSpecifiedPages($name: String!) {
      pagesConnection(
        where: {pageCategories_some: {name: $name}}
        ) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { name });

  return result.pagesConnection.edges;
};

export const getEvents = async () => {
  const today = new Date();
  const date = moment(today).format('YYYY-MM-DD')
  const query = gql`
    query GetEvents($date: Date!) {
      eventsConnection(
        where: {date_gte: $date}
        last: 1
        ) {
        edges {
          node {
            date
            description
            end
            start
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, {date});

  return result.eventsConnection.edges;
};

export const getPageCategories = async (name) => {
  const query = gql`
    query GetPageCategories {
      pageCategoriesConnection {
        edges {
          node {
            pages {
              slug
              title
            }
            name
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.pageCategoriesConnection.edges;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSocialMedia = async () => {
  const query = gql`
    query GetSocialMedia() {
      socialMediasConnection {
        edges {
          node {
            facebook
            instagram
            twitter
            youtube
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.socialMediasConnection.edges;
};

export const getContact = async () => {
  const query = gql`
    query GetContact() {
      contactsConnection {
        edges {
          node {
            address
            address2
            city
            email
            fax
            phone
            state
            zip
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.contactsConnection.edges;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};