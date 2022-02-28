import './styles/index.scss';

function Projects() {
  document.title = 'PROJECTS - 林泽伟的个人博客';
  return (
    <div className='projects padding-content'>
      <main className='main inner'>
        <p>
          - [Vue + Vant + Webpack + cordova]
          <a href='http://www.sanduspace.com/' rel='noreferrer' target='_blank'>
            (http://www.sanduspace.com/)
          </a>
        </p>
        <p className='desc'>
          三度云享家是一款专业的“AI家居”设计软件，可在线实现房屋的自由设计、商品的一键试装，以及不同风格的一键装修等功能，是一款更高效的、全民通用的精品家居设计软件。
        </p>
        <p>
          - [Vue + ElementUI + Webpack + Docker]
          <a href='https://www.basejy.com/' rel='noreferrer' target='_blank'>
            (https://www.basejy.com/)
          </a>
        </p>
        <p className='desc'>
          倍思智慧教学系统可以帮助教学管理的全流程、角色化、智慧型、大数据的特点助力学校提升管理效能，提高教学质量。
        </p>
        <p>
          - [Vue3 + Element-plus + Vite + Echarts + Keycloak + Vital]
          <a href='https://mcisaas.com/' rel='noreferrer' target='_blank'>
            (https://mcisaas.com/)
          </a>
        </p>
        <p className='desc'>
          滴灌通生态平台充分利用节点企业的数字化收入管控能力为投资赋能,共同开拓中国小微经济的投资蓝海。
        </p>
      </main>
    </div>
  );
}

export default Projects;
