const capitalize = (text: string): string =>
  text.charAt(0).toLocaleUpperCase() + text.slice(1)

const filterText = (userInput: string, compareInput: string): boolean =>
  compareInput.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())

const parseIdFromUrl = (url: string): number =>
  parseInt(url.replace(/\/$/, '').split('/').slice(-1).join())

export { capitalize, filterText, parseIdFromUrl }
