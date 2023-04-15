export const createTwisaveKeywordSearchURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  if (user === '') {
    return 'https://twisave.com/'
  }

  if (keyword === '') {
    return `https://twisave.com/${user}/`
  }

  return `https://twisave.com/${user}/search/${keyword}`
}
