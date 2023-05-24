export const createTwilogKeywordSearchURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  if (user === '') {
    return 'https://twilog.togetter.com/'
  }

  if (keyword === '') {
    return `https://twilog.togetter.com/${user}/`
  }

  return `https://twilog.togetter.com/${user}/search?word=${keyword}`
}
