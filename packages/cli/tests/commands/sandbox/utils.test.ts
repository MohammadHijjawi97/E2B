import { describe, expect, test } from 'vitest'

import { parseMetadata } from '../../../src/commands/sandbox/utils'

describe('parseMetadata', () => {
  test('parses comma-separated key=value pairs', () => {
    expect(parseMetadata('env=prod, team = core')).toEqual({
      env: 'prod',
      team: 'core',
    })
  })

  test('keeps "=" characters in the value', () => {
    expect(
      parseMetadata('url=https://example.com/?a=1&b=2,token=abc==')
    ).toEqual({
      url: 'https://example.com/?a=1&b=2',
      token: 'abc==',
    })
  })

  test('returns undefined when no metadata is given', () => {
    expect(parseMetadata(undefined)).toBeUndefined()
    expect(parseMetadata('')).toBeUndefined()
  })
})
