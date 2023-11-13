import tags from '@/data/tags';
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('vue');
const slugs = {
  twobind: slug('twobind'),
  props: slug('props'),
  computed: slug('computed'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'Vue 🧐',
  collection: [
    {
      name: 'Как реализовать двухстороннее связывание во Vue?',
      slug: slugs.twobind,
      answer: [
        'Двухсторонее связывание можно реализовать двумя способами: v-model и bind',
        'Для того чтобы реализовать двухстороннее связывание с помощью v-model, достаточно просто инициализировать ' +
        'реактивное состояние и привязать его к нужному инпуту с помощью v-model',
        'Для того чтобы реализовать двухстороннее связывание с помощью bind, ' +
        'нужно реализовать реактивное состояние и метод ' +
        'который будет обновлять данное реактивное состояние, а затем привязать реактивное состояние и метод с помощью ' +
        'v-bind (:) и v-on (@)',
      ],
      references: [
        {
          name: 'Vue.js Documentation',
          link: 'https://vuejs.org/guide/essentials/forms.html',
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.reactivity,
      ]
    },
    {
      name: 'Каким образом компоненты могут обмениваться даными между собой?',
      slug: slugs.props,
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Documentation',
          link: 'https://vuejs.org/guide/essentials/component-basics.html#passing-props',
        }
      ],
      answer: [
        'Если речь идет о передаче сверху вниз: пропсы, provide/inject',
        'Если речь идет о передаче снизу вверх: emit',
        'Если речь идет о глобальных реактивных состояниях: стор (Vuex/Pinia)',
      ]
    },
    {
      name: 'Что такое computed?',
      slug: slugs.computed,
      references: [
        {
          name: 'Vue.js Documentation: computed',
          link: 'https://vuejs.org/api/reactivity-core.html#computed',
        }
      ],
      answer: [
        'computed - это вычисляемое реактивное состояние, которое обновляется ' +
        'каждый раз при обновлении его зависимостей.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.reactivity,
      ]
    }
  ]
};

export default browserQuestionCollection;
