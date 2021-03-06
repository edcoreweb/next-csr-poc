import Link from 'next/link'

function About({ stars }) {
  return <div>
    Next stars: {stars}

    <hr/>
    <Link href="/">
      <a className="card">
        <h1>Go home</h1>
      </a>
    </Link>

    <hr/>
    <Link href="/about/[id]" as="/about/35">
      <a className="card">
        <h1>Go to item</h1>
      </a>
    </Link>
  </div>
}

About.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default About
