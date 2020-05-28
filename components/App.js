let refresh = true

const dynamicRoutes = [
  '/',
  '/about',
  '/about/[id]'
];

const makeRegex = (route) => {
  const exp = route.replace(/\//g, '\\/').replace(/\[[^\]]+]/g, '[^/]+')
  return new RegExp(`${exp}$`)
}

function App({ Component, pageProps, router }) {
  const path = `${location.pathname}${location.search}`

  if (refresh) {
    refresh = false

    // try to match dynamic routes
    const match = dynamicRoutes.find(route => makeRegex(route).test(location.pathname))

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
