import type {QuestionTag} from "@/types/question.types.ts";
import {map} from "nanostores";

interface FilterStoreState {
  tags: QuestionTag[];
  search: string;
}

const $filterStore = map<FilterStoreState>({
  tags: [],
  search: '',
});

const filterStore = {
  state: $filterStore,
  tags: {
    toggle(tag: QuestionTag) {
      const store = $filterStore.get();

      if (store.tags.some(item => item.slug === tag.slug)) {
        this.remove(tag.slug);
        return;
      }

      this.add(tag);
    },
    add(tag: QuestionTag) {
      const store = $filterStore.get();
      $filterStore.setKey('tags', [...store.tags, tag]);
    },
    remove(id: QuestionTag['slug']) {
      const store = $filterStore.get();
      $filterStore.setKey('tags', store.tags.filter(tag => tag.slug !== id));
    }
  },
  search: {
    update(value: string) {
      $filterStore.setKey('search', value);
    },
    clear() {
      $filterStore.setKey('search', '');
    }
  }
}

export default filterStore;
