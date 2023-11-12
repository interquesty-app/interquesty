import type {QuestionTag} from "@/types/question.types.ts";

const javascriptTags = {
  dom: {
    color: '#f1b295',
    slug: 'js-dom',
    name: 'dom',
  },
  underTheHood: {
    color: '#eaa3c8',
    slug: 'und-t-hood',
    name: 'under-the-hood'
  },
  function: {
    color: '#53d9b5',
    slug: 'js-func',
    name: 'function'
  },
  es6: {
    color: '#e598dd',
    slug: 'essix',
    name: 'es6'
  },
} as const satisfies Record<string, QuestionTag>;

export {javascriptTags};
