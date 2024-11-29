import React, { useEffect, useState } from 'react'

interface PDFRedirectProps {
  pdfUrl: string
}

const PDFRedirect: React.FC<PDFRedirectProps> = ({ pdfUrl }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      {loading ? (
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading PDF...</p>
        </div>
      ) : (
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          style={{ border: 'none' }}
          title="PDF Document"
        ></iframe>
      )}
    </div>
  )
}

export default PDFRedirect
