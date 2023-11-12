import {levelTags} from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('css');

export const slugs = {
  "em-rem": slug('em-rem'),
  "crossbrowser": slug('crossbrowser'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'CSS 🖼️',
  collection: [
    {
      name: 'Чем отличается em от rem?',
      slug: slugs["em-rem"],
      answer: [
        'em - единица измерения, которая задается относительно font-size на текущем или на родительском уровне. По умолчанию 1em равен ' +
        'выставленному font-size',
        'rem - единица измерения, которая задается относительно font-size на уровне тега <html>. По умолчанию 1rem равен ' +
        '16px',
      ],
      tags: [
        levelTags.junior
      ],
      references: [
        {
          name: 'Learn Javascript: Единицы измерения',
          link: 'https://learn.javascript.ru/css-units'
        },
      ]
    },
    {
      name: 'Как писать кроссбраузерный css?',
      slug: slugs.crossbrowser,
      tags: [
        levelTags.junior,
      ],
      answer: [
        'Кроссбраузерная верстка подразумевает использование вендорных префиксов (-moz, -webkit) для того чтобы ' +
        'добиться лучшей совместимости разных свойств CSS среди множества браузеров.',
        'Достаточно часто для этой задачи используют пакеты normalize.css и autoprefixer.',
      ],
      references: [
        {
          name: 'npm: autoprefixer',
          link: 'https://www.npmjs.com/package/autoprefixer',
        },
        {
          name: 'npm: normalize.css',
          link: 'https://www.npmjs.com/package/normalize.css',
        },
        {
          name: 'HTMLAcademy: Кроссбраузерная верстка',
          link: 'https://htmlacademy.ru/blog/css/short-21',
        }
      ]
    }
  ]
};

export default browserQuestionCollection;
