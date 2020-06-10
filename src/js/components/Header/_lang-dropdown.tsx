import React, { Component } from 'react'
import Dropdown, {
  DropdownItem,
  DropdownList,
  DropdownButton
} from '../Dropdown'
import DownIcon from '../../../img/icons/arrows/down.svg'

interface Props {
  className?: string
}

interface State {
  lang: string
}

export default class LangDropdown extends Component<Props, State> {
  state = {
    lang: 'English'
  }

  render() {
    const { className } = this.props
    const { lang } = this.state
    const langs = ['English', 'French', 'German', 'Italian', 'Spanish']

    return (
      <Dropdown>
        <DropdownButton className={className}>
          {lang} <DownIcon aria-hidden="true" className="text-white rect-icon-3xs ml-4" />
        </DropdownButton>
        <DropdownList>
          {langs.map(language => (
            <DropdownItem
              key={language}
              onSelect={() => {
                this.setLang(language)
              }}
            >
              {language}
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
    )
  }

  setLang(lang: string) {
    this.setState({
      lang
    })
  }
}
