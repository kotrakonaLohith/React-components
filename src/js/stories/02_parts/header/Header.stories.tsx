import { storiesOf } from '@storybook/react'
import React from 'react'
import { MainHeader, LoggedOutHeader, NoEntitiesHeader } from './headers'

storiesOf('components/Header', module)
  .add('Header (entities)', () => {
    return <MainHeader />
  })
  .add('Header (no entities)', () => {
    return <NoEntitiesHeader />
  })
  .add('Header (logged out)', () => {
    return <LoggedOutHeader />
  })
