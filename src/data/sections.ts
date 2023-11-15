import type {Section} from "@/types/sections.types.ts";

const getSectionUrl = (slug: string): `/${string}` => {
  return `/browse/${slug}`;
};

const sections: Section[] = [
  {
    name: 'Frontend',
    link: getSectionUrl('frontend'),
    icon: 'fe:coffee',
  },
  {
    name: 'Backend',
    link: getSectionUrl('backend'),
    icon: 'fe:terminal'
  },
  {
    name: 'QA',
    link: getSectionUrl('qa'),
    icon: 'fe:question',
  },
];

export default sections;
