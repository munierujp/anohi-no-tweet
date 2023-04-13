export const createTwilogKeywordSearchURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  return `https://twilog.org/${user}/search?word=${keyword}`
}
