export function getCurrentMonthWithAdjustment(startDate, dateVariable = 0) {
  const start = new Date(startDate)
  const now = new Date()

  // Diferencia en milisegundos
  let diffInMs = now - start

  // Sumamos o restamos los días de dateVariable
  diffInMs += dateVariable * 24 * 60 * 60 * 1000 // convertir días a ms

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  const month = Math.floor(diffInDays / 30) + 1 // Primer mes = 1

  return Math.min(Math.max(month, 1), 20) // limitar entre 1 y 20
}
