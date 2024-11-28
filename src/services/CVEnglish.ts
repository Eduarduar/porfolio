// services/bills/getExcel.js
export const getCVEnglish = async () => {
  const response = await fetch(`/cv/CV_Profecional.pdf`, {
    method: 'GET',
    headers: {}
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const blob = await response.blob()
  return blob
}
