import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('svelte');
const slugs = {
  difference: slug('difference'),
};

const svelteQuestionCollection: QuestionSection = {
  title: 'Svelte',
  icon: 'fluent-emoji:flamingo',
  collection: [
    {
      name: 'Чем Svelte отличается от Vue/React?',
      slug: slugs.difference,
      answer: [
        'Svelte отличается тем, что выполняет большую часть работы на этапе сборки, ' +
        'генерируя эффективный встроенный код, в то время как React и Vue выполняют ' +
        'большую часть работы во время выполнения в браузере. Это позволяет Svelte создавать более ' +
        'эффективные приложения, так как он не нуждается в виртуальном DOM для отслеживания изменений.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte.dev',
          link: 'https://svelte.dev/',
        }
      ]
    }
  ],

};
export default svelteQuestionCollection;
