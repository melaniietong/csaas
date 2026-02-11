<script setup lang="ts">
import { ref } from 'vue'

import XIcon from '@/components/icons/XIcon.vue'
import LoadingIcon from '@/components/icons/LoadingIcon.vue'

import { CATEGORY_ICONS } from '@/constants/icons.ts'
import { CATEGORY_KEYS } from '@/constants/category-keys'

import content from '@/data/content-en.json'
import countries from '@/data/countries.json'
import tags from '@/data/tags.json'

import type { PropType } from 'vue'
import type { Company, Subprocessor } from '@/types/company'
import type { SubprocessorResolved } from '@/types/subprocessor'

import { formatDate } from '@/utils/dates'
import { resolveSubprocessors } from '@/utils/resolve-subprocessors'

defineProps({
  company: {
    type: Object as PropType<Company | null>,
    default: null,
  },
})

const categoryKeys = CATEGORY_KEYS
const flagMap: Record<string, string> = countries as Record<string, string>
const tagMap: Record<string, string> = tags as Record<string, string>
const countryNames: Record<string, string> = content.countries as Record<
  string,
  string
>

const emit = defineEmits(['close'])

const showHelper = ref<boolean>(false)

const close = (): void => {
  emit('close')
}

const toggleHelper = (): void => {
  showHelper.value = !showHelper.value
}

const groupByLocation = (
  items: Subprocessor[] = []
): Array<[string, SubprocessorResolved[]]> => {
  const resolved = resolveSubprocessors(items)
  const groups = new Map<string, SubprocessorResolved[]>()

  for (const item of resolved) {
    const location = item.location || 'unknown'

    if (!groups.has(location)) {
      groups.set(location, [])
    }

    groups.get(location)?.push(item)
  }

  return Array.from(groups.entries()).map(([location, providers]) => [
    location,
    providers.sort((a, b) => (a.name || '').localeCompare(b.name || '')),
  ])
}

const getCompanyTags = (tagIds: number[] = []): string[] =>
  tagIds
    .map((tagId) => tagMap[String(tagId)])
    .filter((tag): tag is string => Boolean(tag))
</script>

<template>
  <div
    v-if="company"
    class="fixed inset-0 z-2 bg-neutral-500/50 backdrop-blur-xs"
    @click="close"
  />

  <aside
    class="fixed right-0 top-0 z-3 h-full w-full max-w-xl border-l border-neutral-200 bg-white transition-transform duration-400 pb-8"
    :class="company ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex h-full flex-col">
      <div class="p-4">
        <div class="flex items-center justify-between gap-2">
          <button
            type="button"
            @click="toggleHelper"
            class="relative h-8 w-44 overflow-hidden rounded-full bg-neutral-200 text-xs"
            aria-label="Toggle display"
          >
            <span class="absolute inset-0 flex items-center">
              <span class="w-1/2 text-center text-neutral-500">{{
                content.drawer.slider.simple
              }}</span>
              <span class="w-1/2 text-center text-neutral-500">{{
                content.drawer.slider.moreInfo
              }}</span>
            </span>
            <span
              class="absolute inset-y-1 left-1 flex w-[calc(50%-0.25rem)] items-center justify-center rounded-full bg-white transition-transform duration-200 ease-in-out"
              :class="showHelper ? 'translate-x-full' : 'translate-x-0'"
            >
              <span :class="showHelper ? 'text-teal-600' : 'text-neutral-800'">
                {{
                  showHelper
                    ? content.drawer.slider.moreInfo
                    : content.drawer.slider.simple
                }}
              </span>
            </span>
          </button>

          <button
            type="button"
            @click="close"
            class="rounded-full p-2 text-sm text-neutral-800 transition-colors duration-200 ease-out"
            aria-label="Close"
          >
            <XIcon class="icon-sm text-neutral-800" />
          </button>
        </div>
      </div>

      <div v-if="company" class="overflow-auto p-4 flex flex-col gap-4">
        <div class="p-6 flex flex-col gap-2">
          <div class="flex flex-col my-4">
            <h1 class="text-center">{{ company.name }}</h1>

            <div class="flex justify-center gap-2">
              <p>{{ company.hq }}</p>
              <p>•</p>
              <p>
                <a :href="company.link" target="_blank" rel="noreferrer">{{
                  content.drawer.header.website
                }}</a>
              </p>
            </div>
          </div>

          <p>{{ company.desc }}</p>
        </div>

        <div
          v-if="getCompanyTags(company.tagIds).length > 0"
          class="flex flex-wrap justify-center gap-2"
        >
          <span
            v-for="tag in getCompanyTags(company.tagIds)"
            :key="tag"
            class="rounded-full bg-neutral-200 px-4 py-1 sub-label text-neutral-800"
          >
            {{ tag }}
          </span>
        </div>

        <section
          v-for="key in categoryKeys"
          :key="key"
          class="flex flex-col gap-2"
        >
          <div class="pt-6 px-6 flex items-center gap-2 mb-2">
            <component
              :is="CATEGORY_ICONS[key] || LoadingIcon"
              class="icon-base text-neutral-800"
            />
            <h2>{{ content.drawer.categories[key].title }}</h2>
          </div>

          <p
            v-if="showHelper"
            class="p-6 rounded-2xl border-2 border-dashed border-teal-600 bg-teal-50 helper helper-text mb-2"
          >
            {{ content.drawer.categories[key].desc }}
          </p>

          <p
            v-if="(company.subprocessors[key] || []).length === 0"
            class="px-6"
          >
            {{ content.drawer.content.noInfo }}
          </p>

          <div
            v-else
            v-for="[location, subprocessors] in groupByLocation(
              company.subprocessors[key] ?? []
            )"
            :key="location"
            class="px-6 py-2 flex flex-col gap-2"
          >
            <span class="label text-neutral-800"
              >{{ flagMap[location] ?? countries.unknown }}
              {{ countryNames[location] ?? location }}</span
            >

            <div
              v-for="s in subprocessors"
              :key="s.name"
              class="flex items-center justify-between gap-2 rounded-lg bg-neutral-200 px-4 py-2 overflow-scroll max-[340px]:flex-col max-[340px]:items-start"
            >
              <div class="flex flex-col">
                <p>{{ s.name }}</p>
                <span class="sub-label-text text-neutral-800"
                  >{{ content.drawer.content.version }}
                  <a :href="s.source" target="_blank" rel="noreferrer">{{
                    formatDate(s.lastUpdated)
                  }}</a></span
                >
              </div>

              <div
                v-if="s.parentCompany?.name"
                class="flex flex-col text-right max-[340px]:text-left"
              >
                <span class="sub-label text-neutral-400">{{
                  content.drawer.content.parentCompany
                }}</span>
                <span class="sub-label-text text-neutral-800"
                  >{{ s.parentCompany.name }} ({{
                    countryNames[s.parentCompany.location] ??
                    s.parentCompany.location
                  }})</span
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </aside>
</template>
