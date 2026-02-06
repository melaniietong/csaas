import type { ContentBlock } from '@/types/content-block'

const buildBlocks = (lines: string[]): ContentBlock[] => {
  const blocks: ContentBlock[] = []
  let list: string[] = []

  const flush = (): void => {
    if (!list.length) return
    blocks.push({ type: 'ul', items: list })
    list = []
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('- ')) {
      list.push(trimmed.slice(2))
      continue
    }

    flush()
    blocks.push({ type: 'p', text: trimmed })
  }

  flush()
  return blocks
}

export { buildBlocks }
