import { storiesOf } from '@storybook/react'
import React from 'react'
import { PageNav, PageNavItem } from '../../index'
import Wrapper from '../../_wrapper'

storiesOf('components/Navigation', module).add(
  'Page Nav',
  () => {
    return (
      <Wrapper title="Page Nav">
        <PageNav active="#1">
          <PageNavItem href="#0">Clubs</PageNavItem>
          <PageNavItem href="#1">Members</PageNavItem>
          <PageNavItem href="#2">Finances</PageNavItem>
          <PageNavItem href="#3">Goals</PageNavItem>
          <PageNavItem href="#4">Reports</PageNavItem>
        </PageNav>
      </Wrapper>
    )
  }
)
