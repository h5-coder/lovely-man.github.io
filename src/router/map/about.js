const About = resolve => require(['@/views/about/'], resolve);

export default {
    path: '/about',
    component: About,
    name: '关于'
}
;
