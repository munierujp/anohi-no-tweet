export const createTwisaveKeywordSearchURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  return `https://twisave.com/${user}/search/${keyword}`
}
