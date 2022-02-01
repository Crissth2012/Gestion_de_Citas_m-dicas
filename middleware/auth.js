const authMiddleware = ({ app, store, redirect, route: { path, fullPath, query } }) => {
  let mainPath = '/admin'
  if (path.startsWith('/admin')) {
    if (app.$cookies.get('tokenAdmin')) {
      if (path.includes('/login')) {
        redirect(query.redirect || mainPath)
      }
    } else if (!path.includes('/login')) {
      const options = {}
      if (mainPath !== path) { options.redirect = fullPath }
      if (mainPath === '/') { mainPath = '' }
      redirect(mainPath + '/login', options)
    }
  }
}

export default authMiddleware
