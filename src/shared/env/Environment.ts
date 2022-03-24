export const Environment = {
    /**
     * This is the base api url
     */
    URL_API: process.env.REACT_APP_ENV === 'production' ? process.env.REACT_APP_URL_API : 'http://localhost:3333/',
    /**
     * Get if is running in production environment
     */
    IS_PRODUCTION: process.env.REACT_APP_ENV === 'production',
    /**
     * Get if is running in test environment
     */
    IS_TESTE: process.env.REACT_APP_ENV === 'test',
    /**
     * Get if is running in develop environment
     */
    IS_DEVELOPMENT: process.env.REACT_APP_ENV === 'development',
  };