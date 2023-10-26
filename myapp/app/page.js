import CategoryList from '@/components/CategoryList/CategoryList'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Hero />
    <CategoryList />
   </main>
  )
}
