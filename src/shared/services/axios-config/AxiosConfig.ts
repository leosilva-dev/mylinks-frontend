import axios from 'axios'
import { Environment } from '../../env/Environment'

export const Api = axios.create({
    baseURL: Environment.URL_API
})