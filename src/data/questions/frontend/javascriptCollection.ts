import {javascriptTags, levelTags} from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('js');

export const slugs = {
  bindcallapply: slug('bindcallapply'),
  requireimport: slug('requireimport'),
  micromacro: slug('micromacro'),
  iife: slug('iife'),
  carrying: slug('carrying'),
  "arrow-func": slug('arrow-func'),
  "event-loop": slug('event-loop'),
  "call-stack": slug('call-stack'),
  "tricky-new": slug('tricky-new'),
  delegation: slug('delegation'),
  whydelegation: slug('whydelegation'),
  bubbling: slug('bubbling'),
  types: slug('types'),
  "instance-array": slug('instance-array'),
  "exact-comparsion": slug('exact-comparsion'),
  letvarconst: slug('letvarconst'),
  closure: slug('closure'),
  dom: slug('dom'),
  "pure-function": slug('pure-function'),
  "link-type": slug('link-type'),
  constructor: slug('constructor'),
  nan: slug('nan'),
  hoisting: slug('hoisting'),
};

const javascriptQuestionCollection: QuestionSection = {
  title: 'JavaScript 💅',
  collection: [
    {
      name: 'Какие есть типы данных в JS?',
      slug: slugs.types,
      answer: [
        'Типов данных всего 8.',
        'string - Строковое значение',
        'number - Числовое значение',
        'BigInt - Числовое значение, которое не вписывается в MAX и MIN SAFE INTEGER',
        'boolean - Логическое значение',
        'undefined - Обозначает, что значение переменной не было присвоено',
        'null - Обозначает отсутствие значения',
        'symbol - Уникальный и неизменяемый идентификатор',
        'object - Тип, который охарактеризовывает все объекты (включая массивы)',
      ],
      tags: [
        levelTags.junior,
      ],
      references: [
        {
          name: 'MDN',
          link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures',
        }
      ],
      similars: [
        slugs["link-type"]
      ]
    },
    {
      name: 'Как узнать что некий объект является массивом?',
      slug: slugs["instance-array"],
      tags: [
        levelTags.junior,
      ],
      answer: [
        'Это можно узнать двумя способами:',
        'У объекта Array есть метод isArray, с помощью него можно узнать является ли наш объект массивом',
        'Или же можно проверить прототип объекта с помощью var instanceof Array',
      ],
      references: [
        {
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/questions/4775722/how-can-i-check-if-an-object-is-an-array',
        }
      ]
    },
    {
      name: 'Что такое замыкание в JS?',
      slug: slugs.closure,
      answer: [
        'Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. ' +
        'Другими словами, замыкание даёт вам доступ к Scope внешней функции из внутренней функции. ' +
        'В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.'
      ],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
        javascriptTags.function,
      ],
      references: [
        {
          name: 'MDN: Замыкания',
          link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures',
        },
        {
          name: 'Дока: Области видимости',
          link: 'https://doka.guide/js/closures/',
        }
      ]
    },
    {
      name: 'Что такое DOM и как с ним работать?',
      slug: slugs.dom,
      answer: [
        'DOM (Document Object Model) － это модель документа, предоставляемая браузерным API, для того чтобы мы ' +
        'могли взаимодействовать c текущими HTML-элементами и тегами.',
        'Мы можем достучаться до DOM с помощью специального объекта document. В нем есть все необходимые методы ' +
        'для работы с документом.',
        'Среди самых популярных методов: querySelector(), querySelectorAll(), ' +
        'createElement(), write(), removeElement().',
      ],
      tags: [
        levelTags.junior,
        javascriptTags.dom,
      ],
      references: [
        {
          name: 'Learn JavaScript: DOM-дерево',
          link: 'https://learn.javascript.ru/dom-nodes',
        }
      ]
    },
    {
      name: 'Что такое чистая функция?',
      slug: slugs["pure-function"],
      answer: [
        'Чистая функция — это функция, которая всегда возвращает одинаковый результат для одних ' +
        'и тех же входных данных и не имеет побочных эффектов.',
        'Побочные эффекты включают в себя изменение внешних переменных, взаимодействие с ' +
        'DOM (Document Object Model), отправку HTTP-запросов, и т.д.'
      ],
      tags: [
        levelTags.junior,
        javascriptTags.function,
      ],
      references: [
        {
          name: 'FreeCodeCamp: What Is a Pure Function in JavaScript?',
          link: 'https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/',
        }
      ]
    },
    {
      name: 'Что такое ссылочные типы данных?',
      slug: slugs["link-type"],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
      ],
      references: [
        {
          name: 'Дока: Хранение по ссылке и по значению',
          link: 'https://doka.guide/js/ref-type-vs-value-type/'
        }
      ],
      answer: [
        'В JavaScript существуют ссылочные и примитивные типы данных.',
        'Примитивные типы данных копируются по значению при передаче в другую переменную или в аргументы функции. ' +
        'Ссылочные типы данных передаются по ссылке.',
        'Типичный представитель ссылочного типа данных - объект. Если мы "скопируем" объект в ' +
        'другую переменную и поменяем с помощью новой переменной поле объекта - ' +
        'то данное поле будет изменено и в старой переменной.'
      ]
    },
    {
      name: 'Что такое функции-конструкторы?',
      slug: slugs.constructor,
      answer: [
        'Функция-конструктор － это функция, которая использует внутри себя this, для того чтобы создать новый объект.',
        'До появления классов в JavaScript функции-конструкторы использовались для того чтобы создавать единообразные объекты.',
      ],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
        javascriptTags.function,
      ],
      references: [
        {
          name: 'Learn JavaScript: Конструктор, оператор new',
          link: 'https://learn.javascript.ru/constructor-new',
        }
      ]
    },
    {
      name: 'В чем отличие isNaN и Number.isNaN?',
      slug: slugs.nan,
      tags: [
        levelTags.middle,
        javascriptTags.es6,
      ],
      answer: [
        'В отличие от глобальной функции isNaN(), Number.isNaN() не имеет проблемы принудительного преобразования параметра в число.',
        'Если говорить простыми словами, то isNaN("A simple string") вернет true, в то время как Number.isNaN("A simple string") вернет false.',
        'Number.isNaN вернет true только в том случае, если в него действительно передали NaN, а не какое-либо другое значение, он не будет делать неявное ' +
        'приведение типов'
      ],
      references: [
        {
          name: 'MDN',
          link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5',
        },
        {
          name: 'Ponyfoo',
          link: 'https://ponyfoo.com/articles/es6-number-improvements-in-depth#numberisnan',
        }
      ]
    },
    {
      name: 'Что такое hoisting (поднятие)?',
      slug: slugs.hoisting,
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
      ],
      answer: [
        'Hoisting (поднятие) — это механизм, согласно которому объявления переменных и функций ' +
        '"поднимаются" (выдвигаются) вверх своей области видимости перед выполнением кода. Это позволяет использовать ' +
        'переменные и функции до их явного объявления в коде.',
        'Важно отметить, что только объявления (не инициализации) поднимаются. ' +
        'Если переменной присваивается значение в процессе инициализации, присвоение останется на том месте, ' +
        'где оно было в коде.'
      ],
      references: [
        {
          name: 'Дока: Области видимости',
          link: 'https://doka.guide/js/closures/'
        }
      ]
    },
    {
      name: 'Расскажи про ключевые слова let, var и const',
      slug: slugs.letvarconst,
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
        javascriptTags.es6,
      ],
      answer: [
        'var, let, и const - ключевые слова в JavaScript для объявления переменных.',
        'var имеет функциональную область видимости и поднимается вверх блока кода.',
        'let и const имеют блочную область видимости и также поднимаются вверх, ' +
        'но остаются в "зоне теней" до фактического объявления. let может быть переназначен, а const - нет.'
      ],
      references: [
        {
          name: 'Habr: Var, let или const? Проблемы областей видимости переменных и ES6',
          link: 'https://habr.com/ru/companies/ruvds/articles/420359/'
        }
      ]
    },
    {
      name: 'Расскажи про bind, call, apply?',
      slug: slugs.bindcallapply,
      answer: [
        'bind: Создает новую функцию с указанным контекстом, но не вызывает ее.',
        'call: Вызывает функцию с указанным контекстом и аргументами.',
        'apply: Вызывает функцию с указанным контекстом и массивом аргументов.'
      ],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
      ],
      references: [
        {
          name: 'Дока: this: контекст выполнения функций',
          link: 'https://doka.guide/js/function-context/',
        },
      ]
    },
    {
      name: 'В чем различия двойного и тройного знака равно?',
      slug: slugs['exact-comparsion'],
      tags: [
        levelTags.junior,
      ],
      answer: [
        '== — используется для сравнивания операндов с приведением типов',
        '=== — используется для сравнивания операндов без приведения типов',
      ],
      references: [
        {
          name: 'Dev.to: Difference between == and ===',
          link: 'https://dev.to/sayantani96/difference-between-and--56b6#:~:text=The%20equality%20operator%20in%20javascript,first%20and%20then%20the%20values'
        }
      ]
    },
    {
      name: 'Что такое бабблинг или "Погружение, перехват, всплытие"?',
      slug: slugs.bubbling,
      tags: [
        levelTags.junior,
        javascriptTags.dom,
        javascriptTags.underTheHood,
      ],
      answer: [
        'Бабблинг — это механизм восходящего распространения событий от дочерних элементов к их родителям в DOM.',
        'В контексте событий в DOM есть три фазы: погружение (capture), цель (target), и всплытие (bubbling).',
        'Погружение — в этой фазе событие идет сверху вниз по иерархии DOM, начиная от корневого элемента к целевому ' +
        'элементу. Не все события поддерживают фазу погружения.',
        'Цель — событие достигло целевого элемента, на котором произошло событие, ' +
        'здесь срабатывает обработчик события, привязанный к целевому элементу',
        'Всплытие — в  этой фазе событие восходит от целевого элемента вверх по иерархии DOM к корневому элементу. ' +
        'Всплытие позволяет обработчикам событий, привязанным к родительским элементам, реагировать на событие, ' +
        'произошедшее на дочерних элементах',
        'Когда событие происходит, оно проходит через все три фазы, и обработчики могут быть установлены как на фазе ' +
        'всплытия, так и на фазе погружения, в зависимости от потребностей. Это называется моделью обработки событий.'
      ],
      references: [
        {
          name: 'MDN: Event Phase',
          link: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase',
        },
      ]
    },
    {
      name: 'Что такое делегирование событий?',
      slug: slugs.delegation,
      tags: [
        levelTags.junior,
        javascriptTags.dom,
      ],
      answer: [
        'В JavaScript делегирование событий означает использование одного обработчика событий ' +
        'для нескольких элементов через их общего родителя.',
      ],
      references: [
        {
          name: 'Learn Javascript: Делегирование событий',
          link: 'https://learn.javascript.ru/event-delegation',
        }
      ]
    },
    {
      name: 'Зачем нужно делегирование событий?',
      slug: slugs.whydelegation,
      tags: [
        levelTags.junior,
        javascriptTags.dom,
      ],
      references: [
        {
          name: 'Learn Javascript: Делегирование событий',
          link: 'https://learn.javascript.ru/event-delegation',
        }
      ],
      answer: [
        'Представим что у нас есть список из 100 элементов.',
        'При первоначальной отрисовке контента браузеру будет трудоемко устанавливать 100 обработчиков ' +
        'событий на каждый элемент списка. Мы сильно облегчим браузеру жизнь, если просто установим ' +
        'обработчик событий на родительский элемент'
      ]
    },
    {
      name: 'Чем отличается стрелочная функция от обычной?',
      slug: slugs['arrow-func'],
      answer: [
        'Стрелочная функция может быть записана только благодаря функциональному выражению, ' +
        'но никак не функциональному объявлению.',
        'У стрелочной функции нет собственного контекста this, в ней this ссылается на родительский контекст.',
      ],
      references: [
        {
          name: 'Дока: Функции',
          link: 'https://doka.guide/js/function/',
        }
      ],
      tags: [
        levelTags.junior,
        javascriptTags.es6,
        javascriptTags.function,
      ]
    },
    {
      name: 'Что такое IIFE?',
      slug: slugs.iife,
      answer: [
        'IIFE (Immediately Invoked Functional Expression) — функциональное выражение, которое ' +
        'после инициализации сразу же вызывается',
        'Самым простым примером является стрелочная функция обернутая в скобки и тут же вызванная: (() => {})()',
      ],
      references: [
        {
          name: 'Дока: Функции',
          link: 'https://doka.guide/js/function/',
        }
      ],
      tags: [
        levelTags.middle,
        javascriptTags.function,
      ]
    },
    {
      name: 'Что будет если обычную функцию (без this внутри) вызвать с оператором new?',
      slug: slugs['tricky-new'],
      tags: [
        levelTags.middle,
        javascriptTags.underTheHood,
        javascriptTags.function,
      ],
      answer: [
        'Функция вернет пустой объект, прототипом которого будет являться объект с использованной нам функцией',
      ],
      references: [
        {
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/questions/35702917/why-do-constructor-functions-return-objects-but-not-primitives-in-javascript',
        }
      ]
    },
    {
      name: 'Что такое каррирование функций? Приведите примеры',
      slug: slugs.carrying,
      tags: [
        levelTags.senior,
        javascriptTags.function,
        javascriptTags.underTheHood,
      ],
      answer: [
        'Каррирование — это преобразование функции с любым количеством аргументов в функцию только с одним аргументом.',
        'Самым простым примером является функция суммы двух чисел, данная функция будет отдавать другую функцию, ' +
        'которая будет отдавать сумму',
        'a => b => a + b',
      ],
      references: [
        {
          name: 'Habr: Каррирование функций в JavaScript',
          link: 'https://habr.com/ru/companies/ruvds/articles/427295/'
        }
      ]
    },
    {
      name: 'Что такое Event Loop?',
      slug: slugs['event-loop'],
      answer: [
        'Цикл событий отвечает за выполнение кода, сбор и обработку событий и выполнение подзадач из очереди. В Event ' +
        'Loop есть микро- и макро-задачи, работает сам Event Loop следующим образом: ',
        '1. Event Loop дожидается покуда все синхронные задачи выполнены (Call Stack пуст);',
        '2. После этого Event Loop выполняет ОДНУ макро-таску;',
        '3. Затем Event Loop смотрит есть ли у нас микро-таски и выполняет их все;',
        '4. Если нужно перерендерить страницу - происходит ререндер (все остальные задачи ждут ререндера);',
      ],
      references: [
        {
          name: 'Github: Event Loop Explainer',
          link: 'https://github.com/atotic/event-loop',
        },
        {
          name: 'MDN: Event Loop',
          link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Event_loop#%D0%A6%D0%B8%D0%BA%D0%BB*%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9',
        }
      ],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
      ]
    },
    {
      name: 'Что такое Call Stack?',
      slug: slugs['call-stack'],
      answer: [
        'Стек — это структура данных, в которой элементы упорядочены так, что последний элемент, который попадает ' +
        'в стек, выходит из него первым (LIFO: last in, first out).',
        'В стеке вызовов хранятся функции, до которых дошёл интерпретатор, и которые надо выполнить.',
      ],
      tags: [
        levelTags.junior,
        javascriptTags.underTheHood,
      ],
      references: [
        {
          name: 'Дока: Асинхронность в JS',
          link: 'https://doka.guide/js/async-in-js/',
        }
      ]
    },
    {
      name: 'Что такое микро- и макро-таски (задачи)?',
      slug: slugs.micromacro,
      tags: [
        levelTags.middle,
        javascriptTags.underTheHood,
      ],
      references: [
        {
          name: 'Learn JavaScript: Микрозадачи',
          link: 'https://learn.javascript.ru/microtask-queue',
        }
      ],
      answer: [
        'Микрозадачами являются задачи, которые нужно выполнить в немедленном порядке (все и сразу). ' +
        'Данная очередь была придумана в первую очередь для Promise.',
        'Макрозадачами являются все остальные асинхронные задачи.',
      ]
    },
    {
      name: 'Почему в NodeJS используется require() вместо import()?',
      tags: [
        levelTags.senior,
        javascriptTags.underTheHood,
        javascriptTags.es6,
      ],
      slug: slugs.requireimport,
      answer: [],
    }
  ]
};

export default javascriptQuestionCollection;
