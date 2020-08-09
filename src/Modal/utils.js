export const warnLog = (message, type) => console.warn(`[simple-react-modal]  (${type}) : ${message}`)
export const errorLog = (message, type) => console.error(`[simple-react-modal] (${type}) : ${message}`)
export const startTimer = (callback, time) => setTimeout(callback, time)