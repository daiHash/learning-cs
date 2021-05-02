import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const options: ReadonlyArray<{ title: string; url: string }> = [
  { title: 'Data Structures', url: '/data-structures' },
  { title: 'Big O', url: '/big-o' },
  { title: 'Algorithms', url: '/algorithms' },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <SimpleGrid as='ul' columns={3} spacing={10}>
        {options.map(({ title, url }) => (
          <Center>
            <Box as='li' key={title} fontSize='3xl' listStyleType='none'>
              <Link href={url}>{title}</Link>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </div>
  )
}
