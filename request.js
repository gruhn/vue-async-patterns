
export default async function request (url) {
  await new Promise(resolve => {
    const minDelay = 1000
    const maxDelay = 3000
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setTimeout(resolve, randomDelay)
  })

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html'
    }
  })

  return response.text()
}
