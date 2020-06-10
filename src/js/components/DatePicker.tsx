import React, { Fragment, Component } from 'react'
import { SelectInput } from './Forms'
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownButton
} from '../stories/index'
import DatePickerItem from 'react-datepicker'
import range from 'lodash/range'
import getYear from 'date-fns/getYear'
import getMonth from 'date-fns/getMonth'

// import 'react-datepicker/dist/react-datepicker.css'
const years = range(1990, getYear(new Date()) + 1, 1)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

interface MoreState {
  startDate: any
}

interface MoreProps {
  className?: string
}

export default class DatePicker extends Component<MoreProps, MoreState> {
  state = {
    startDate: new Date(),
    year: ''
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  handleYearClick = () => {
    this.setState(state => ({
      year: "2099"
    }));
  }

  renderDateYear = (date, changeYear) => {
    return (
      <SelectInput
        className="year-dropdown"
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
      >
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    )
  }

  renderDateMonth = (date, changeMonth) => {
    return (
      <SelectInput
      className="month-dropdown"
      value={months[getMonth(date)]}
      onChange={({ target: { value } }) => changeMonth(value)}
      >
        {months.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    )
  }

  renderDropdown = (date, changeYear) => {
    return (
      <Dropdown>
        <DropdownButton className="text-white text-3xs tracking-wide">
          {this.state.year}
          <SelectInput
            className="year-dropdown"
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {/* {years.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))} */}
          </SelectInput>
        </DropdownButton>
        <DropdownList>
          {years.map(option => (
            <DropdownItem>
              <option key={option} value={option}>
                {option}
              </option>
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
    )
  }

  render() {
    return (
      <div className="max-w-datepicker-input">
        <DatePickerItem
          customInput={<SelectInput name={'input'} label={''} />}
          renderCustomHeader={({ date, changeYear, changeMonth }) => (
            <div className="year-month-dropdown">
              {this.renderDateMonth(date, changeMonth)}
              {/* {this.renderDateYear(date, changeYear)} */}
              {this.renderDropdown(date, changeYear)}
            </div>
          )}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
