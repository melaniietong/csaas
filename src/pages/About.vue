<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import XIcon from '@/components/icons/XIcon.vue'
import content from '@/data/content-en.json'
import { buildBlocks } from '@/utils/content'

const faqs = Object.entries(content.about)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([id, section]) => ({
    id,
    title: section.title,
    blocks: buildBlocks(section.content),
  }))

const openId = ref<string | null>(faqs[0]?.id ?? null)

const toggle = (id: string): void => {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div
    class="h-screen overflow-scroll bg-white px-4 pb-8 sm:px-8 flex flex-col"
  >
    <div
      class="sticky top-0 z-1 mb-2 py-8 bg-white flex sm:justify-start justify-center"
    >
      <SiteHeader />
    </div>

    <div class="mb-6 flex flex-col gap-4">
      <section
        v-for="faq in faqs"
        :key="faq.id"
        class="rounded-2xl bg-neutral-200"
      >
        <button
          type="button"
          class="rounded-2xl w-full p-4 text-left flex items-center justify-between gap-4"
          @click="toggle(faq.id)"
          :aria-expanded="openId === faq.id"
        >
          <h2>{{ faq.title }}</h2>

          <XIcon
            class="h-4 w-4 text-neutral-800 transition-transform duration-200"
            :class="openId === faq.id ? 'rotate-0' : 'rotate-45'"
            aria-hidden="true"
          />
        </button>

        <transition
          enter-active-class="transition duration-300 ease-in-out"
          enter-from-class="opacity-0 -translate-y-1"
          leave-active-class="transition duration-300 ease-in-out"
          leave-to-class="opacity-0 -translate-y-1"
        >
          <div v-if="openId === faq.id" class="px-4 pb-4 flex flex-col gap-2">
            <template v-for="(block, i) in faq.blocks" :key="i">
              <p v-if="block.type === 'p'">
                {{ block.text }}
              </p>
              <ul v-else class="list-disc pl-8 flex flex-col gap-2">
                <li v-for="(item, j) in block.items" :key="j">
                  <p>{{ item }}</p>
                </li>
              </ul>
            </template>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>
