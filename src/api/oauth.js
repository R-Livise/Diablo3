// oauth.js

// libreria
import { post } from 'axios'

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  /**
   * About battle.net documentation
   */

  // Conjunto de pares clave/valor
  const body = new FormData()

  // clave 'grant_type',valor 'client_credentials'
  body.append('grant_type', 'client_credentials')

  // Parámetros de configuración
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    // Datos de cliente para OAuth
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
