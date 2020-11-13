import { PokedexInstance, handleError } from './utils'

export const getEggGroupsList = async () => {
  try {
    const response = await PokedexInstance.getEggGroupsList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getEggGroupsList()', error)
    return handleError(error)
  }
}

export const getEggGroupByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getEggGroupByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getEggGroupByName(${name})`, error)
    return handleError(error)
  }
}