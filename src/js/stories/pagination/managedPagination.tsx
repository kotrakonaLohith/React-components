import React, { useState } from 'react'
import { Pagination, PaginationItem } from '../index'

export default () => {
  const [current, setCurrent] = useState(0)

  return (
    <Pagination
      className="mb-20"
      currentItem={current}
      onSelect={({ index, url }) => {
        alert(url)
        setCurrent(index)
      }}
    >
      <PaginationItem url="#1">1</PaginationItem>
      <PaginationItem url="#2">2</PaginationItem>
      <PaginationItem url="#3">3</PaginationItem>
      <PaginationItem url="#4">4</PaginationItem>
      <PaginationItem url="#5">5</PaginationItem>
    </Pagination>
  )
}
