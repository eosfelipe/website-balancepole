import defaultImage from './assets/images/default.jpg';

const CONFIG = {
  name: 'Balance Pole Fitness',

  origin: 'https://balancepolefitness.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'Balance Pole Fitness',
  description: 'Primera escuela de Pole Fitness en Mérida Yucatán',
  defaultImage: defaultImage,
  phone: '9992181660',
  video: 'https://www.youtube.com/watch?v=Z7aLJjoyZoc',
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: 'UA-67579025-1', // or "UA-67579025-1",
  googleSiteVerificationId: 'iR3LWUsqqvs3IyWQIax9qC0pMkEloM9FE-BMGgki4Nk',

  blog: {
    disabled: true,
    postsPerPage: 4,

    list: {
      pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    post: {
      pathname: '', // empty for /some-post, value for /pathname/some-post
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // set empty to change from /category/some-category to /some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
