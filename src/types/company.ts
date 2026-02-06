import type { SubprocessorId } from '@/types/subprocessor'

type Subprocessor = {
  id: SubprocessorId
  source: string
  lastUpdated: string
}

type Company = {
  name: string
  desc: string
  link: string
  hq: string
  tagIds: number[]
  competitors: string[]
  source?: string
  lastUpdated?: string
  subprocessors: Record<string, Subprocessor[]>
}

export type { Subprocessor, Company }
