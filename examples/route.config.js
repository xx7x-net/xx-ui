import navConfig from './nav.config'
const registerRoute = (navConfig) => {
  const componentrRoute = []
  componentrRoute.push({
    path: `/component`,
    redirect: `/component/installation`,
    component: (resolve) => require(['./pages/component.vue'], resolve),
    children: []
  })
  navConfig.forEach(nav => {
    if (nav.href) return
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  function addRoute(page) {
    const child = {
      path: `/component${page.path}`,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: (resolve) => require([page.path === '/changelog' ? './pages/changelog.vue' : `./docs${page.path}.md`], resolve)
    }

    componentrRoute[0].children.push(child)
  }

  return componentrRoute
}

let route = registerRoute(navConfig)
console.log(route)
const generateMiscRoutes = [
  {
    path: '/',
    name: 'home',
    component: (resolve) => require(['./pages/index.vue'], resolve)
  }, {
    path: '/guide', // 指南
    redirect: '/guide/design',
    component: (resolve) => require(['./pages/guide.vue'], resolve),
    children: [{
      path: 'design', // 设计原则
      name: 'guide-design',
      component: (resolve) => require(['./pages/design.vue'], resolve)
    }, {
      path: 'nav', // 导航
      name: 'guide-nav',
      component: (resolve) => require(['./pages/nav.vue'], resolve)
    }]
  }
]

route = route.concat(generateMiscRoutes)

route.push({
  path: '/play',
  name: 'play',
  component: require('./play/index.vue')
})

route = route.concat([{
  path: '*',
  redirect: '/'
}])
export default route
