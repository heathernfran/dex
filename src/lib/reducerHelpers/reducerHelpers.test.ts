import { buildArrayOfIds, buildObjectById, removeIdFromArray } from './index'

describe('buildArrayOfIds', () => {
  it('returns an array of integers from the keyed object', () => {
    const mockObject = {
      1: {},
      2: {},
      3: {},
    }

    expect(buildArrayOfIds(mockObject)).toEqual([1, 2, 3])
  })
})

describe('buildObjectById()', () => {
  it('returns a keyed object by ID', () => {
    const mockArray = [
      {
        pokemon: {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      },
      {
        pokemon: {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
      },
    ]

    const result = {
      1: {
        id: 1,
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      2: {
        id: 2,
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
    }

    expect(buildObjectById(mockArray)).toEqual(result)
  })

  it('returns an object containing more than 10 items by ID', () => {
    const generateArray: number[] = Array.from(Array(12).keys())
    const generateMockName = (key: number): string => `Item ${key}`
    const generateMockUrl = (key: number): string =>
      `https://example.com/${key}/`

    const mockArray = generateArray.map((key: number) => ({
      pokemon: {
        name: generateMockName(key),
        url: generateMockUrl(key),
      },
    }))

    let result = {}
    generateArray.map(
      (key: number) =>
        (result = {
          ...result,
          [key]: {
            id: key,
            name: generateMockName(key),
            url: generateMockUrl(key),
          },
        })
    )

    expect(buildObjectById(mockArray)).toEqual(result)
  })
})

describe('removeIdFromArray()', () => {
  it('filters out the matching ID from the array', () => {
    const mockArray = [1, 2, 3, 4]

    expect(removeIdFromArray(mockArray, 3)).toEqual([1, 2, 4])
  })

  it('returns the array when no values match the ID', () => {
    const mockArray = [1, 2]

    expect(removeIdFromArray(mockArray, 5)).toEqual([1, 2])
  })
})
