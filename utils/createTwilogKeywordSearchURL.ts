export const createTwilogKeywordSearchURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  if (user === '') {
    return 'https://twilog.org/'
  }

  if (keyword === '') {
    return `https://twilog.org/${user}/`
  }

  return `https://twilog.org/${user}/search?word=${keyword}`
}
