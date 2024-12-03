export async function makeLoginRequest(loginType: string, login: string, password: string) {
  const response = await fetch('http://127.0.0.1:1881/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      loginType,
      [loginType]: login,
      password
    })
  })
  return response
}

export async function makeRegisterRequest(userName: string, fullName: string, email: string, phoneNumber: string, password: string) {
  const response = await fetch('http://127.0.0.1:1881/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      fullName,
      email,
      phoneNumber,
      password
    })
  })
  console.log(response)
  return response
}