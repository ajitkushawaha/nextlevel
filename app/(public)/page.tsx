import type { Metadata } from 'next'
import NextLevelHomepage from '@/components/home/NextLevelHomepage'

export const metadata: Metadata = {
  title: 'Next Level Education | Your Gateway to Global Education',
  description:
    'Next Level Education helps students explore study destinations, choose programs, and prepare for admissions with expert guidance.',
}

export default function HomePage() {
  return <NextLevelHomepage />
}
