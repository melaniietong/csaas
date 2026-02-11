<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Drawer from '@/components/Drawer.vue'
import SiteHeader from '@/components/SiteHeader.vue'

import content from '@/data/content-en.json'
import data from '@/data/data'
import tags from '@/data/tags.json'

import type { Company } from '@/types/company'

const route = useRoute()
const router = useRouter()

const getSearchQuery = (): string =>
  typeof route.query.search === 'string' ? route.query.search : ''

const getCompanyById = (id: string): Company | null => {
  if (!id || !(id in data)) return null
  return data[id as keyof typeof data] ?? null
}

const getCompanyIdFromRoute = (): string =>
  typeof route.params.id === 'string' ? route.params.id : ''

const query = ref<string>(getSearchQuery())
const selectedCompany = ref<Company | null>(
  getCompanyById(getCompanyIdFromRoute())
)

const placeholders = content.search.placeholders
const placeholder =
  placeholders[Math.floor(Math.random() * placeholders.length)] + '...'
  
const tagMap: Record<string, string> = tags as Record<string, string>

const companyList = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = Object.entries(data).map(([id, c]) => ({ ...c, id }))

  if (!q) return list

  return list.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.hq.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.competitors.some((competitor) => competitor.toLowerCase().includes(q)) ||
      c.tagIds.some((tagId) =>
        (tagMap[String(tagId)] ?? '').toLowerCase().includes(q)
      )
  )
})

const openDrawer = (company: Company, id: string): void => {
  selectedCompany.value = company
  router.push({
    name: 'company',
    params: { id },
    query: query.value.trim() ? { search: query.value.trim() } : {},
  })
}

const closeDrawer = (): void => {
  selectedCompany.value = null
  router.push({
    name: 'home',
    query: query.value.trim() ? { search: query.value.trim() } : {},
  })
}

watch(query, (value) => {
  const trimmed = value.trim()
  const current = getSearchQuery()

  if (trimmed === current) return

  const nextQuery = { ...route.query }
  if (trimmed) {
    nextQuery.search = trimmed
  } else {
    delete nextQuery.search
  }

  router.replace({
    name: route.name ?? 'home',
    params: route.params,
    query: nextQuery,
  })
})

watch(
  () => route.query.search,
  (value) => {
    const next = typeof value === 'string' ? value : ''
    if (next !== query.value) query.value = next
  }
)

watch(
  () => route.params.id,
  (value) => {
    const id = typeof value === 'string' ? value : ''
    selectedCompany.value = getCompanyById(id)
  }
)
</script>

<template>
  <div
    class="h-screen overflow-scroll bg-white px-4 pt-4 pb-8 sm:px-8 sm:pt-8 sm:pb-8 flex flex-col"
  >
    <div class="sticky top-0 z-1 mb-2 py-8 bg-white">
      <div
        class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
      >
        <SiteHeader />
        <input
          v-model="query"
          type="search"
          :placeholder="placeholder"
          class="rounded-full bg-neutral-200 px-4 py-2 text-sm w-full sm:w-80"
        />
      </div>
    </div>

    <div class="mb-6 flex-1 flex flex-col">
      <div
        v-if="companyList.length === 0"
        class="flex-1 flex flex-col items-center justify-center gap-4 p-8"
      >
        <span class="text-6xl">🐂</span>
        <p class="text-center">{{ content.search.noResults }}</p>
      </div>

      <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <button
          v-for="c in companyList"
          :key="c.id"
          type="button"
          @click="openDrawer(c, c.id)"
          class="relative z-0 rounded-2xl bg-neutral-100 p-4 hover:-translate-y-0.5 flex flex-col items-start gap-2 max-h-50"
        >
          <div class="flex flex-col items-start gap-1 text-left">
            <h2>{{ c.name }}</h2>
            <span class="sub-label">{{ c.hq }}</span>
          </div>

          <p class="text-left card-truncate">{{ c.desc }}</p>
        </button>
      </div>
    </div>

    <Drawer :company="selectedCompany" @close="closeDrawer" />
  </div>
</template>

<style scoped>
.card-truncate {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
