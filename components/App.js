let refresh = true

const routes = [
  '/',
  '/about',
  '/about/[id]',
  '/about/[...slug]'
];

const makeRegex = (route) => {
  let catchAll = false
  let exp = route.replace(/\//g, '\\/').replace(/\[[^\]]+]/g, '[^/]+')

  if (exp.includes('...')) {
    exp = exp.replace('...', '')
    catchAll = true
  }

  return new RegExp(`${exp}${catchAll ? '' : '$'}`)
}

function App({ Component, pageProps, router }) {
  const path = `${location.pathname}${location.search}`

  if (refresh) {
    refresh = false

    // try to match dynamic routes
    const match = routes.find(route => makeRegex(route).test(location.pathname))

    if (match) {
      router.replace(match, path)
    } else {
      // redirect or render 404
    }

    return <div>Loading...</div>
  }

  return <Component {...pageProps} />
}

export default App
