import React from 'react'
import Wrapper from '../_wrapper'

// UI Icons
import CheckIcon from '../../../img/icons/ui/check.svg'
import CloseIcon from '../../../img/icons/ui/close.svg'
import DownloadIcon from '../../../img/icons/ui/download.svg'
import EditIcon from '../../../img/icons/ui/edit.svg'
import ExporterIcon from '../../../img/icons/ui/exporter.svg'
import EyeIcon from '../../../img/icons/ui/eye.svg'
import FilterIcon from '../../../img/icons/ui/filter.svg'
import HamburgerIcon from '../../../img/icons/ui/hamburger.svg'
import MapPinIcon from '../../../img/icons/ui/map-pin.svg'
import OverflowIcon from '../../../img/icons/ui/overflow.svg'
import PagesIcon from '../../../img/icons/ui/pages.svg'
import PeopleIcon from '../../../img/icons/ui/people.svg'
import PlusIcon from '../../../img/icons/ui/plus.svg'
import SearchIcon from '../../../img/icons/ui/search.svg'
import TrashcanIcon from '../../../img/icons/ui/trashcan.svg'

export default () => {
  const classes = 'rect-icon m-8'
  return (
    <Wrapper title="UI Icons">
      <CheckIcon aria-hidden="true" className={classes} />
      <CloseIcon aria-hidden="true" className={classes}/>
      <DownloadIcon aria-hidden="true" className={classes}/>
      <EditIcon aria-hidden="true" className={classes}/>
      <ExporterIcon aria-hidden="true" className={classes}/>
      <EyeIcon aria-hidden="true" className={classes}/>
      <FilterIcon aria-hidden="true" className={classes}/>
      <HamburgerIcon aria-hidden="true" className={classes}/>
      <MapPinIcon aria-hidden="true" className={classes}/>
      <OverflowIcon aria-hidden="true" className={classes}/>
      <PagesIcon aria-hidden="true" className={classes}/>
      <PeopleIcon aria-hidden="true" className={classes}/>
      <PlusIcon aria-hidden="true" className={classes}/>
      <SearchIcon aria-hidden="true" className={classes}/>
      <TrashcanIcon aria-hidden="true" className={classes}/>
    </Wrapper>
  )
}
