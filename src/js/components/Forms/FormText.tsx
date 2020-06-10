import React, { FC } from 'react'

export const HelpText: FC = ({ children }) => {
  return !children ? null : <p className="text-gray-500 text-xs mt-4">{children}</p>
}

export const ErrorText: FC = ({ children }) => {
  return !children ? null : <p className="text-red-600 text-xs mt-4">{children}</p>
}
