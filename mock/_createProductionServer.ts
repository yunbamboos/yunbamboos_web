import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// @ts-ignore
const modules = import.meta.globEager('./**/*.ts')

const mockModules = []
Object.keys(modules).forEach(key => {
  mockModules.push(...modules[key].default)
})

console.log(mockModules);
/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
