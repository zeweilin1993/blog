export interface IProject {
  name: string;
  skills: string;
  url: string;
  desc: string;
  logo: string;
}

export const ProjectList: IProject[] = [
  {
    name: '三度云享家',
    skills: 'Vue + Vant + Webpack + cordova',
    url: 'http://www.sanduspace.com/',
    desc: '三度云享家是一款专业的“AI家居”设计软件，可在线实现房屋的自由设计、商品的一键试装，以及不同风格的一键装修等功能，是一款更高效的、全民通用的精品家居设计软件。',
    logo: require('@/img/empty-img.jpg'),
  },
  {
    name: '倍思智慧教学系统',
    skills: 'Vue + ElementUI + Webpack + Docker',
    url: 'https://www.basejy.com/',
    desc: '倍思智慧教学系统可以帮助教学管理的全流程、角色化、智慧型、大数据的特点助力学校提升管理效能，提高教学质量。',
    logo: require('@/pages/projects/img/www.basejy.com_.png'),
  },
  {
    name: '滴灌通生态平台',
    skills: 'Vue3 + Element-plus + Vite + Echarts + Keycloak + Vital',
    url: 'https://mcisaas.com/',
    desc: '滴灌通生态平台充分利用节点企业的数字化收入管控能力为投资赋能,共同开拓中国小微经济的投资蓝海。',
    logo: require('@/pages/projects/img/mcisaas.com_.png'),
  },
];
