import { NotificationProgrammatic as Notification } from 'buefy'

/**
 * Retorna el mensaje de error
 */
export async function getMensajeError (err) {
  const result = err.response
    ? err.response.data.message || err.response.data
    : err.message
  if (result instanceof Blob) {
    try {
      const error = JSON.parse(await result.text())
      return error.message
    } catch {
      return result.text()
    }
  }
  return result
}

export async function showError (err) {
  const content = await getMensajeError(err)
  Notification.open({
    duration: 5000,
    message: content,
    position: 'is-top-right',
    type: 'is-danger'
  })
}
