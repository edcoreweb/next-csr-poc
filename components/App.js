let refresh = true

function App({ Component, pageProps, router }) {
  const path = `${location.pathname}${location.search}`

  if (refresh) {
    refresh = false
    router.replace(path)
    return <div>Loading...</div>
  }

  return <Component {...pageProps} />
}

export default App
