export async function grabAllPostsToTheMainPageFeed() {
  const response = await fetch('http://127.0.0.1:1881/post', {'method': 'GET'})
  const data = response.json()
  return data
}