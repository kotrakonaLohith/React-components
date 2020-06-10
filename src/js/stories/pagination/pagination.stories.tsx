import { storiesOf } from '@storybook/react'
import React, { Component } from 'react'
import Wrapper from '../_wrapper'
import { Pagination, PaginationItem } from '../index'
import PaginationDocs from './pagination.mdx'
import components from '../mdx-components'

class PaginationSample extends Component {
  state = {
    currentItem: 2
  }

  render() {
    const { currentItem } = this.state
    const items = ['#1', '#2', '#3', '#4', '#5', '#6']

    return (
      <Pagination
        className="mb-20"
        onSelect={this.setCurrentItem}
        currentItem={currentItem}
      >
        {items.map((item, index) => (
          <PaginationItem key={index} url={item}>
            {index + 1}
          </PaginationItem>
        ))}
      </Pagination>
    )
  }

  setCurrentItem = ({ index, url }: { index: number; url: string }) => {
    alert(url)
    this.setState({
      currentItem: index
    })
  }
}

storiesOf('parts/pagination', module)
  .add('Pagination', () => {
    return (
      <Wrapper title="Pagination">
        <PaginationSample />
      </Wrapper>
    )
  })
  .add('Pagination Docs', () => {
    return (
      <Wrapper>
        <PaginationDocs components={components} />
      </Wrapper>
    )
  })
