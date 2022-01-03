// Axios
import { get } from 'axios'
// Store
import store from '../store/index'
// Útils
import { locales } from '../utils/regions'

// API URL
// https://{region}.api.blizzard.com
const protocol = 'https://'
const host = '.api.blizzard.com/'

function getApiAccount ({ region, account }) {
  /**
   * Returns the specified account profile.
   * GET – /d3/profile/{account}
   * Los parámetros que hemos obtenido a través de la URL
   *  - @param region {String}
   *  - @param account {String}
   * @returns {Promise}
   */

  const resource = `d3/profile/${account}/`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}
/**
 * Returns a single hero
 * GET – /d3/profile/{account}/hero/{heroId}
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

/**
 * Returns a list of items for the specified hero.
 * GET – /d3/profile/{account}/hero/{heroId}/items
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 * @returns {Promise}
 */
function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

export {
  getApiAccount,
  getApiHero,
  getApiDetailedHeroItems
}
