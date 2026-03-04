import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_MEMBER_FARMS } from '@/lib/queries'
import { MemberFarmsData } from '@/lib/types'
import Header from '../components/Header'
import MemberFarmCard from '../components/MemberFarmCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Member Farms | Co Op',
  description: 'Browse our member farms.',
}

async function getMemberFarms() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<MemberFarmsData>({
      query: GET_MEMBER_FARMS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeMemberFarms?.nodes || []
  } catch (error) {
    console.error('Error fetching member farms:', error)
    return []
  }
}

export default async function MemberFarmsPage() {
  const items = await getMemberFarms()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-lime-900 via-lime-800 to-lime-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Member Farms
            </h1>
            <p className="text-xl text-lime-100 max-w-3xl mx-auto">
              Explore our member farms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Member Farms Yet</h2>
              <p className="text-gray-500">
                Member Farms will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <MemberFarmCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
