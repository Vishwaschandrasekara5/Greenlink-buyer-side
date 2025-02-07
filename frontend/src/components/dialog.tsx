import * as React from "react"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  return open ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        {children}
        <button className="mt-4 text-sm text-gray-500" onClick={() => onOpenChange(false)}>
          Close
        </button>
      </div>
    </div>
  ) : null
}

const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>
}

const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border-b pb-2 mb-4 text-lg font-semibold">{children}</div>
}

const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export { Dialog, DialogContent, DialogHeader, DialogTitle }
