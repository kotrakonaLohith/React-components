import { storiesOf } from '@storybook/react'
import React, { FC } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownButton,
  ProfileHeader,
  StatusMarker,
  EditLink
} from '../../index'
import DownIcon from '../../../../img/icons/arrows/down.svg'
import LeftIcon from '../../../../img/icons/arrows/left.svg'
import sampleAvatar from '../../../../img/samples/avatar-image.png'
import Wrapper from '../../_wrapper'

const PageDropdown: FC<{ className?: string }> = ({ className }) => (
  <Dropdown>
    <DropdownButton className={`text-base text-left leading-normal ${className}`}>
      Viewing profile as{' '}
      <span className="text-dark-blue-400 border-b border-dashed border-dark-blue-400">
        Deepika
      </span>
      <DownIcon
        aria-hidden="true"
        className="text-dark-blue-400 rect-icon-xxs ml-10"
      />
    </DropdownButton>
    <DropdownList>
      <DropdownItem
        onSelect={() => {
          alert('handle selection')
        }}
      >
        Deepika
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          alert('handle selection')
        }}
      >
        Officers of My Club and District
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          alert('handle selection')
        }}
      >
        Members of My Club
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          alert('handle selection')
        }}
      >
        Members of My District
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          alert('handle selection')
        }}
      >
        All Rotary Members
      </DropdownItem>
    </DropdownList>
  </Dropdown>
)

storiesOf('components/pages', module).add('Members Profile', () => {
  return (
    <Wrapper>
      <div className="flex justify-between mb-24 md:mb-64">
        <a href="#" className="heading-topper">
          <LeftIcon aria-hidden="true" /> Members
        </a>

        <PageDropdown className="hidden md:block" />
      </div>

      <header className="relative border-b-6 border-dark-blue-400 pb-21 md:pb-60 mb-20">
        <EditLink href="#" className="absolute pin-t pin-r md:mt-4" />

        <ProfileHeader
          className="mb-24"
          locations="Delhi South Metropolitan, New Delhi, Delhi, India (Rotary Club)"
          name="Deepika Venkatesh"
          photo={sampleAvatar}
          role="Member"
        />
        <PageDropdown className="md:hidden" />
      </header>

      <section className="relative pt-20 border-b pb-28 mb-24 md:pt-0">
        <EditLink href="#" className="absolute pin-t pin-r md:mt-4" />

        <h2 className="heading-tertiary md:heading-secondary mb-32">Contact Info</h2>
        <dl className="desc-list mb-32">
          <dt>Email</dt>
          <dd>
            <p>
              <a href="#">deepika.venkatesh@gmail.com</a>
            </p>
          </dd>
          <dt>Phone (Personal)</dt>
          <dd>
            <p>
              <a href="tel:+911234567890">+91 123-456-7890</a>
            </p>
          </dd>
          <dt>Address (Home)</dt>
          <dd>
            <p>
              E/1 2nd. Flr.
              <br />
              Parsn Paradise Apts.
              <br />
              1234 G.N. Chetty Rd.
              <br />
              Madras, 600017, India <br />
              Tamil Nadu
            </p>
          </dd>
          <dt>Address (Business)</dt>
          <dd>
            <p>
              30 Prasnna Vinayagar Kovil Street
              <br />
              Besant Nagar
              <br />
              Madras, 600017, India
              <br />
              Tamil Nadu
            </p>
          </dd>
        </dl>
      </section>

      <section className="relative pt-20 border-b pb-28 mb-24 md:pt-0">
        <EditLink href="#" className="absolute pin-t pin-r md:mt-4" />
        <h2 className="heading-tertiary md:heading-secondary mb-32">Background</h2>
        <dl className="desc-list mb-32">
          <dt>About Me</dt>
          <dd className="c-mb-12">
            <p>
              Deepika is a skilled professional with an MBA in Corporate Finance
              & Strategy and has 8+ years’ experience in successfully leading
              and delivering strategic and FP&A changes in large organizations.
              She focuses on budget management, financial planning and
              forecasting, financial reporting, commercial management, inventory
              management, operational analysis, data manipulation, governance
            </p>
            <p>
              She is a quick-learner, thriving in challenging environment with
              calm, clarity and confidence. She has excellent written and oral
              communication and presentation skills. She has a hands-on-approach
              and is driven by out of the box strategic thinking, attention to
              detail, and forging strong cross-divisional relationships with
              internal and external clients resulting in delivering of
              innovative and workable solutions.
            </p>
          </dd>
        </dl>
      </section>

      <section className="relative pt-20 border-b pb-28 mb-24 md:pt-0">
        <EditLink href="#" className="absolute pin-t pin-r md:mt-4" disabled />
        <h2 className="heading-tertiary md:heading-secondary mb-32">Rotary Resume</h2>
        <h3 className="heading-alt text-sm mb-20 md:pl-40">Roles</h3>
        <dl className="desc-list mb-48">
          <dt>Rotary International</dt>
          <dd>
            <p>Training Leader (2017-18)</p>
            <p>Assistant Rotary Public Image Coordinator (2015-16)</p>
          </dd>
          <dt>The Rotary Foundation</dt>
          <dd>
            <p>Trustee Vice Chair (2010-11)</p>
          </dd>
        </dl>
        <h3 className="heading-alt text-sm mb-20 md:pl-40">
          Rotary Foundation Recognition
        </h3>
        <dl className="desc-list mb-32">
          <dt>Benefactor</dt>
          <dd>
            <p>Benefactor (2003)</p>
          </dd>
          <dt>Major Donor</dt>
          <dd>
            <p>Major Donor Level 3 (2013)</p>
            <p>Major Donor Level 2 (2010)</p>
            <p>Major Donor Level 1 (2009)</p>
          </dd>
        </dl>
      </section>

      <section className="relative pt-20 md:pt-0">
        <EditLink href="#" className="absolute pin-t pin-r md:mt-4" />
        <h2 className="heading-tertiary md:heading-secondary mb-32">Rotary Programs</h2>
        <h3 className="heading-alt text-sm mb-20 md:pl-40">Exchanges</h3>
        <dl className="desc-list mb-48">
          <dt>New Generations Service Exchange</dt>
          <dd>
            <p>Visiting: Congo, the Democratic Republic of</p>
            <p>From: United States</p>
            <p>Dates: 11/1/2018 - 3/1/2019</p>
            <StatusMarker className="mt-12" />
          </dd>
        </dl>
        <h3 className="heading-alt text-sm mb-20 md:pl-40">Scholarships</h3>
        <dl className="desc-list mb-32">
          <dt>Club Scholarship</dt>
          <dd>
            <p>Visiting: Congo, the Democratic Republic of</p>
            <p>From: United States</p>
            <p>Dates: 11/1/2018 - 3/1/2019</p>
            <StatusMarker verified className="mt-12" />
          </dd>
        </dl>
      </section>
    </Wrapper>
  )
})
