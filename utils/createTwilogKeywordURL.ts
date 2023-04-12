export const createTwilogKeywordURL = ({
  user,
  keyword
}: {
  user: string
  keyword: string
}): string => {
  return `https://twilog.org/${user}/search?word=${keyword}`
}
