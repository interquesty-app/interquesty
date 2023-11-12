import type {QuestionTag} from "@/types/question.types.ts";

const htmlTags = {
  img: {
    color: '#e5c198',
    slug: 'html-img',
    name: 'img'
  },
} as const satisfies Record<string, QuestionTag>;

export {htmlTags};
