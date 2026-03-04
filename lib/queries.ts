import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        heroImage {
          url
          alt
          width
          height
          variations(styles: [LARGE, MEDIUM]) {
            name
            url
            width
            height
          }
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Member Farms
export const GET_MEMBER_FARMS = gql`
  query GetMemberFarms($first: Int = 20) {
    nodeMemberFarms(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeMemberFarm {
          body {
            processed
          }
          farmImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          farmerName
          location
          acreage
          specialties
          memberSince
          certifications
        }
      }
    }
  }
`

export const GET_MEMBER_FARM_BY_PATH = gql`
  query GetMemberFarmByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMemberFarm {
            __typename
            id
            title
            path
            body {
              processed
            }
            farmImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            farmerName
            location
            acreage
            specialties
            memberSince
            certifications
          }
        }
      }
    }
  }
`

// Products
export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 20) {
    nodeProducts(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProduct {
          body {
            processed
            summary
          }
          productImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          pricePerUnit
          unitType
          season
          originFarm
          organic
          category {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_PATH = gql`
  query GetProductByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProduct {
            __typename
            id
            title
            path
            body {
              processed
            }
            productImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            pricePerUnit
            unitType
            season
            originFarm
            organic
            category {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          eventDate {
            timestamp
          }
          location
          eventType
          admission
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            eventDate {
              timestamp
            }
            location
            eventType
            admission
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewses(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsImage {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          authorName
          tags {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsImage {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            authorName
            tags {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeMemberFarm {
            __typename
            id
            title
            path
            body {
              processed
            }
            farmImage {
              url
              alt
              width
              height
            }
            farmerName
            location
            acreage
            specialties
            memberSince
            certifications
          }
          ... on NodeProduct {
            __typename
            id
            title
            path
            body {
              processed
            }
            productImage {
              url
              alt
              width
              height
            }
            pricePerUnit
            unitType
            season
            originFarm
            organic
            category {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeEvent {
            __typename
            id
            title
            path
            body {
              processed
            }
            eventImage {
              url
              alt
              width
              height
            }
            eventDate {
              timestamp
            }
            location
            eventType
            admission
          }
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsImage {
              url
              alt
              width
              height
            }
            authorName
            tags {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            heroImage {
              url
              alt
              width
              height
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured member farms for homepage (limit to 3)
export const GET_FEATURED_ITEMS = gql`
  query GetFeaturedItems {
    nodeMemberFarms(first: 3, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeMemberFarm {
          farmerName
          location
          specialties
          memberSince
          farmImage {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
