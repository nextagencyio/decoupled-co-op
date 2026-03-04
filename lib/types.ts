// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  heroImage?: DrupalImage
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Member Farm
export interface DrupalMemberFarm extends DrupalNode {
  body?: {
    processed: string
  }
  farmImage?: DrupalImage
  farmerName?: string
  location?: string
  acreage?: string
  specialties?: string[]
  memberSince?: string
  certifications?: string[]
}

export interface MemberFarmsData {
  nodeMemberFarms: {
    nodes: DrupalMemberFarm[]
  }
}

// Product
export interface DrupalProduct extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  productImage?: DrupalImage
  pricePerUnit?: string
  unitType?: string
  season?: string
  originFarm?: string
  organic?: boolean
  category?: DrupalTerm[]
}

export interface ProductsData {
  nodeProducts: {
    nodes: DrupalProduct[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventImage?: DrupalImage
  eventDate?: {
    timestamp: number
  }
  location?: string
  eventType?: string
  admission?: string
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  newsImage?: DrupalImage
  authorName?: string
  tags?: DrupalTerm[]
}

export interface NewsData {
  nodeNewses: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
