import type {QuestionTag} from "@/types/question.types.ts";

const levelTags = {
  junior: {
    color: '#f3dd88',
    slug: 'lvl-jun',
    name: 'junior'
  },
  middle: {
    color: '#83bde3',
    slug: 'lvl-md',
    name: 'middle'
  },
  senior: {
    color: '#ccec9b',
    slug: 'lvl-s',
    name: 'senior',
  }
} as const satisfies Record<string, QuestionTag>;

export {levelTags};
