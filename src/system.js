/**
 * System.js creates the Design System Library.
 * Used both in dev environment and when exporting the system.
 */
import instance from "@/utils/vueInstance"

// Defines contexts to require
// (you should remove templates from this if not used in production)
const contexts = [
  require.context("@/elements/", true, /\.vue$/),
  require.context("@/patterns/", true, /\.vue$/),
  require.context("@/templates/", true, /\.vue$/),
  require.context("@/instructionals/", true, /\.vue$/),
]

const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

export default {
  install(Vue) {
    components.forEach(c => Vue.component(c.name, c))
  },
}

export { instance }
