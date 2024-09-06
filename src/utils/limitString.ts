export function limitString(string: string, limit: number = 50) {
  const limitedString =
    string.length > limit ? string.substring(0, 47) + '...' : string

  return limitedString
}
