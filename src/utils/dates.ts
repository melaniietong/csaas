import content from '@/data/content-en.json'

const formatDate = (iso: string): string => {
  let d = content.drawer.content.unknownDate

  if (!iso) return d

  try {
    d = new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch (e) {
    console.error('🔴 Failed to format date: ', e)
  }

  return d
}

export { formatDate }
