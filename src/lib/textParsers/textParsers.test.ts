import { capitalize, filterText, parseIdFromUrl } from './index'

describe('capitalize()', () => {
  it('returns a string with the first letter capitalized', () => {
    expect(capitalize('test')).toBe('Test')
  })
})

describe('filterText()', () => {
  it('returns true when the input string matches at the beginning', () => {
    const input = 'dr'
    const compare = 'Dragon'

    expect(filterText(input, compare)).toBe(true)
  })

  it('returns true when the input string matches in the middle', () => {
    const input = 'air'
    const compare = 'Fairy'

    expect(filterText(input, compare)).toBe(true)
  })

  it('returns false when the input string does not match', () => {
    const input = 'Q'
    const compare = 'Unknown'

    expect(filterText(input, compare)).toBe(false)
  })
})

describe('parseIdFromUrl()', () => {
  const defaultUrl: string = 'https://example.com/pokemon'

  it('returns the ID from the URL', () => {
    const mockUrl = `${defaultUrl}/0/`

    expect(parseIdFromUrl(mockUrl)).toEqual(0)
  })

  it('returns the ID containing two digits', () => {
    const mockUrl = `${defaultUrl}/10/`

    expect(parseIdFromUrl(mockUrl)).toEqual(10)
  })

  it('returns the ID containing three digits', () => {
    const mockUrl = `${defaultUrl}/100/`

    expect(parseIdFromUrl(mockUrl)).toEqual(100)
  })
})
