import Link from 'next/link'
import { useRouter } from 'next/router'

function AboutItem({ stars }) {
  const { id } = useRouter().query

  return <div>
    Next stars: {stars}
    Id is: { id }

    <hr/>
    <Link href="/">
      <a className="card">
        <h1>Go home</h1>
      </a>
    </Link>
  </div>
}

AboutItem.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default AboutItem
