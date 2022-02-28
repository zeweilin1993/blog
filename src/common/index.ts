import { IItemsConfig } from '@/@types';

export const navsConfig: IItemsConfig[] = [
  {
    label: 'HOME',
    icon: require('@/img/icons/home.png'),
    path: '/home',
    meta: {
      type: 'NAV',
    },
  },
  {
    label: 'POSTS',
    icon: require('@/img/icons/posts.png'),
    path: '/posts',
    meta: {
      type: 'NAV',
    },
  },
  {
    label: 'PROJECTS',
    icon: require('@/img/icons/projects.png'),
    path: '/projects',
    meta: {
      type: 'NAV',
    },
  },
  {
    label: 'SHARE',
    icon: require('@/img/icons/share.png'),
    path: '/share',
    meta: {
      type: 'NAV',
    },
  },
  {
    label: 'ABOUT',
    icon: require('@/img/icons/about.png'),
    path: '/about',
    meta: {
      type: 'NAV',
    },
  },
];

export const itemsConfig: IItemsConfig[] = [
  {
    label: '微博',
    icon: require('@/img/icons/weibo.png'),
    path: 'https://weibo.com/u/3570559577',
    iconBlack: require('@/img/icons/weibo-black.png'),
  },
  {
    label: '知乎',
    icon: require('@/img/icons/zhihu.png'),
    path: 'https://www.zhihu.com/people/zev-28-61',
    iconBlack: require('@/img/icons/zhihu-black.png'),
  },
  {
    label: 'GitHub',
    icon: require('@/img/icons/github.png'),
    iconBlack: require('@/img/icons/github-black.png'),
    path: 'https://github.com/zeweilin1993',
  },
  {
    label: '掘金',
    icon: require('@/img/icons/juejin.png'),
    path: 'https://juejin.cn/user/2629687543869693',
    iconBlack: require('@/img/icons/juejin-black.png'),
  },
];
