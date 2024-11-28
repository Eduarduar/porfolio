// services/bills/getExcel.js
export const getCVSpanish = async () => {
  const response = await fetch(`/cv/Profecional_CV.pdf`, {
    method: 'GET',
    headers: {}
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const blob = await response.blob()
  return blob
}
