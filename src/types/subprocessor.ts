import { subprocessors } from '@/data/subprocessors'
import type { LocationKey } from '@/types/location'

type SubprocessorData = {
  name: string
  location: LocationKey
  parentCompany?: {
    name: string
    location: LocationKey
  }
}

type SubprocessorId = keyof typeof subprocessors

export type { SubprocessorId, SubprocessorData }
