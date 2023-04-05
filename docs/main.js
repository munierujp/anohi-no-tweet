// @ts-check

(function () {
  // 検索
  const searchButtonElement = document.getElementById('search')
  searchButtonElement?.addEventListener('click', () => {
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const userNameElement = document.getElementById('user-name')
    const userName = userNameElement?.value
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const dateElement = document.getElementById('date')
    const date = dateElement?.value
    const query = [
      ['from', userName],
      ['since', `${date}_00:00:00_JST`],
      ['until', `${date}_23:59:59_JST`]
    ]
      .map(pair => pair.join(':'))
      .join(' ')
    const params = new URLSearchParams({
      f: 'live',
      q: query
    })
    const url = `https://twitter.com/search?${params.toString()}`
    window.open(url, '_blank')
  })

  // Twilog
  const twilogButtonElement = document.getElementById('twilog')
  twilogButtonElement?.addEventListener('click', () => {
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const userNameElement = document.getElementById('user-name')
    const userName = userNameElement?.value
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const dateElement = document.getElementById('date')
    const date = dateElement?.value

    if (date === undefined || date === '') {
      const url = `https://twilog.org/${userName}/`
      window.open(url, '_blank')
    } else {
      const [year, month, dayOfMonth] = date?.split('-')
      const dateString = `${year.slice(2)}${month}${dayOfMonth}`
      const url = `https://twilog.org/${userName}/date-${dateString}`
      window.open(url, '_blank')
    }
  })

  // ツイセーブ
  const twisaveButtonElement = document.getElementById('twisave')
  twisaveButtonElement?.addEventListener('click', () => {
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const userNameElement = document.getElementById('user-name')
    const userName = userNameElement?.value
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const dateElement = document.getElementById('date')
    const date = dateElement?.value

    if (date === undefined || date === '') {
      const url = `https://twisave.com/${userName}/`
      window.open(url, '_blank')
    } else {
      const [year, month, dayOfMonth] = date?.split('-')
      const monthString = month[0] === '0' ? month.slice(1) : month
      const dayOfMonthString = dayOfMonth[0] === '0' ? dayOfMonth.slice(1) : dayOfMonth
      const dateString = `${year}/${monthString}/${dayOfMonthString}`
      const url = `https://twisave.com/${userName}/${dateString}`
      window.open(url, '_blank')
    }
  })
})()
