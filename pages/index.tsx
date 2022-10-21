import { Layout } from '@components/Layout'
import { getPlantList } from '@api'
import { PlantCollection } from '@components/PlantCollection'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Authors } from '@components/Authors'
import { Hero } from '@components/Hero'

// import { Image } from 'next/image'

type HomeProps = { plants: Plant[] }

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = await getPlantList({ limit: 10 })
  return {
    props: {
      plants,
    },
    revalidate: 1 * 60,
  }
}

export default function Home({
  plants,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [data, setData] = useState<Plant[]>([])
  // useEffect(() => {
  //   getPlantList({ limit: 10 }).then((recivedata) => setData(recivedata))
  // }, [])
  return (
    <Layout>
      <Hero {...plants[0]} className="mb-20" />
      <Authors className="mb-10"></Authors>
      <PlantCollection plants={plants} variant="square" />
    </Layout>
  )
}
