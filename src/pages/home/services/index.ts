
export async function grabAllPostsToTheMainPageFeed() {
  const response = await fetch('http://127.0.0.1:1881/post', {'method': 'GET'})
  const data = response.json()
  return data
}

export async function makingRequestForCreateNewPost(token: string | null, text: string, parentPostId: number | null) {
  const response = await fetch('http://127.0.0.1:1881/post', {
    method: 'POST',
    body: JSON.stringify({
      content: text,
      parentPostId
    }),
    headers: {
      'Content-Type': 'application/json', // Garante que o body seja tratado como JSON
      Authorization: token || '', 
    }
  })

  return response
}