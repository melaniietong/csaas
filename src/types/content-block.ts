type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type { ContentBlock }
