import type {QuestionTag} from "@/types/question.types.ts";

const vueTags = {
  dom: {
    color: '#e5f195',
    slug: 'vue-dom',
    name: 'dom',
  },
  fundamentals: {
    color: '#eaa3a3',
    slug: 'und-t-hood',
    name: 'fundamentals'
  },
  reactivity: {
    color: '#a9a4e5',
    slug: 'js-func',
    name: 'reactivity'
  },
} as const satisfies Record<string, QuestionTag>;

export {vueTags};
