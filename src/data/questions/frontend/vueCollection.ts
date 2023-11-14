import tags from '@/data/tags';
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('vue');
const slugs = {
  "event-modificators": slug('event-modificators'),
  "key-modificators": slug('key-modificators'),
  "reactivity-3": slug('reactivity-3'),
  "reactivity-2": slug('reactivity-2'),
  lifecycle: slug('lifecycle'),
  twobind: slug('twobind'),
  props: slug('props'),
  computed: slug('computed'),
  keys: slug('keys'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'Vue',
  icon: 'fluent-emoji:dragon-face',
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
    },
    {
      name: 'Зачем директиве v-for нужны ключи?',
      tags: [
        tags.junior,
        tags.reactivity,
        tags.fundamentals,
      ],
      answer: [
        'Ключи в директиве v-for во Vue используются для оптимизации обновления DOM. Они помогают Vue отслеживать ' +
        'идентичность элементов массива при их изменении, что позволяет избежать перерисовки всего списка и ' +
        'обеспечивает более эффективное обновление интерфейса.',
        'Ключи помогают установить соответствие между новым состоянием данных и существующими элементами DOM. ' +
        'Если элементам в списке сопоставлены уникальные ключи, Vue может более точно определить, какие элементы ' +
        'нужно добавить, изменить или удалить, минимизируя количество операций в DOM.'
      ],
      slug: slugs.keys,
      references: [
        {
          name: 'Vue.js Docs: Maintaining State with key',
          link: 'https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key',
        }
      ],
    },
    {
      name: 'Что такое модификаторы событий?',
      answer: [
        'Модификаторы событий во Vue — это расширения для обработчиков событий, добавляющие дополнительное поведение, ' +
        'такое как предотвращение действий по умолчанию или остановка распространения событий.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Event Modifiers',
          link: 'https://vuejs.org/guide/essentials/event-handling.html#event-modifiers',
        }
      ],
      slug: slugs["event-modificators"]
    },
    {
      name: 'Как повесить слушатель событий на нажатие только одной кнопки с помощью директивы?',
      slug: slugs['key-modificators'],
      answer: [
        'Для того чтобы повесить слушатель событий только на одну кнопку — нужно использовать модификатор клавиши.',
        'Данные модификаторы можно повесить на события keyup, keydown, keypress',
        'Для того чтобы слушать только одну кнопку достаточно указать ее код через точку: @keyup.enter="() => {}"',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Key Modifiers',
          link: 'https://vuejs.org/guide/essentials/event-handling.html#event-modifiers',
        }
      ]
    },
    {
      name: 'Какие есть события жизненного цикла во Vue 3?',
      slug: slugs.lifecycle,
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.vue3,
      ],
      references: [
        {
          name: 'Vue.js Docs: Lifecycle Hooks',
          link: 'https://vuejs.org/api/composition-api-lifecycle.html',
        },
      ],
      answer: [
        '- setup',
        '- beforeMount',
        '- onMounted',
        '- beforeUpdate',
        '- onUpdated',
        '- beforeUnmount',
        '- onUnmounted',
      ]
    },
    {
      name: 'Как работает реактивность во Vue 2?',
      slug: slugs['reactivity-2'],
      answer: [
        'В Vue 2 система реактивности строится на использовании Object.defineProperty. ' +
        'Этот метод позволяет Vue следить за изменениями данных в компоненте. ' +
        'При инициализации данных Vue создает геттеры и сеттеры для каждого свойства объекта данных.',
        'Геттеры отслеживают моменты чтения свойств, формируя список зависимостей. ' +
        'Когда данные изменяются через сеттеры, Vue автоматически обновляет компоненты, зависящие от этих данных.',
        'Таким образом, изменения данных могут динамически отражаться в пользовательском интерфейсе без ' +
        'необходимости явного обновления или манипуляций со стороны разработчика.'
      ],
      tags: [
        tags.middle,
        tags.vue2,
      ],
      references: [
        {
          name: 'Vue.js Docs: Reactivity in Depth',
          link: 'https://v2.vuejs.org/v2/guide/reactivity.html',
        }
      ]
    },
    {
      name: 'Как работает реактивность во Vue 3?',
      answer: [
        'Во Vue 3 реактивность базируется на использовании объекта Proxy, ' +
        'который предоставляет более мощный и гибкий механизм для перехвата операций чтения ' +
        'и записи свойств объекта. Когда вы объявляете реактивные данные в компоненте Vue, они оборачиваются в Proxy.',
        'При обращении к свойствам объекта Vue, Proxy перехватывает этот доступ и уведомляет систему о необходимости ' +
        'обновления. Это позволяет Vue автоматически отслеживать зависимости и обновлять компоненты, ' +
        'связанные с изменяющимися данными.',
        'Применение Proxy в реактивности Vue 3 приводит к более эффективной обработке изменений и ' +
        'сравнению с предыдущей версией Vue, основанной на Object.defineProperty.'
      ],
      tags: [
        tags.middle,
        tags.vue3,
      ],
      references: [
        {
          name: 'Vue.js Docs: Reactivity in Depth',
          link: 'https://vuejs.org/guide/extras/reactivity-in-depth.html',
        },
      ],
      slug: slugs['reactivity-3'],
    },
  ]
};

export default browserQuestionCollection;
