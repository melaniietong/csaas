import { subprocessors } from '@/data/subprocessors'
import content from '@/data/content-en.json'
import type { Subprocessor } from '@/types/company'
import type { SubprocessorData } from '@/types/subprocessor'

const resolveSubprocessors = (
  refs: Subprocessor[] = []
): Array<
  SubprocessorData & {
    source: string
    lastUpdated: string
  }
> =>
  refs.map((ref) => {
    const base =
      subprocessors[ref.id] ??
      ({
        name: ref.id,
        location: content.countries.unknown,
      } as SubprocessorData)

    return {
      ...base,
      source: ref.source,
      lastUpdated: ref.lastUpdated,
    }
  })

export { resolveSubprocessors }
