<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import content from '@/data/content-en.json'

const router = useRouter()
const route = useRoute()

const isAboutPage = computed(() => route.name === 'about')

document.title = content.title
</script>

<template>
  <router-view />

  <div class="fixed bottom-0 left-0 right-0 h-8">
    <div
      :class="isAboutPage ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'"
      class="h-full grid bg-cyan-200"
    >
      <button
        type="button"
        :class="isAboutPage ? 'hidden' : 'flex'"
        class="items-center justify-center"
        @click="router.push({ name: 'about' })"
      >
        <span class="sub-label">{{ content.footer.learnMore }}</span>
      </button>

      <span
        :class="isAboutPage ? 'flex' : 'hidden sm:flex'"
        class="items-center justify-center sub-label"
      >
        {{ content.footer.tagline }}
      </span>
    </div>
  </div>
</template>
