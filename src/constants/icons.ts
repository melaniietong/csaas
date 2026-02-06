import type { Component } from 'vue'

import AboutIcon from '@/components/icons/AboutIcon.vue'
import BoxIcon from '@/components/icons/BoxIcon.vue'
import EyeIcon from '@/components/icons/EyeIcon.vue'
import LoadingIcon from '@/components/icons/LoadingIcon.vue'
import MoneyIcon from '@/components/icons/MoneyIcon.vue'

import type { CategoryKey } from '@/types/category'

const ICON_KEYS = {
  about: 'about',
  data: 'data',
  eye: 'eye',
  loading: 'loading',
  money: 'money',
  default: 'default',
} as const

const ICONS = {
  about: AboutIcon,
  data: BoxIcon,
  eye: EyeIcon,
  loading: LoadingIcon,
  money: MoneyIcon,
  default: LoadingIcon,
}

const CATEGORY_ICONS: Record<CategoryKey, Component> = {
  cloud: ICONS.data,
  payments: ICONS.money,
  analytics: ICONS.eye,
}

export { ICON_KEYS, ICONS, CATEGORY_ICONS }
