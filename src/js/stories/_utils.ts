export function notes(content: string, isText = false) {
  if (isText) {
    return { notes: { text: content } }
  } else {
    return { notes: { markdown: content } }
  }
}

export function strToId (str: any) {
  if (typeof str !== 'string') {
    return ''
  }

  const id = str.replace(/\([a-zA-Z]+\)/g, '').trim().replace(/,/g, '').replace(/\s/g, '-').toLowerCase()

  return id
}
