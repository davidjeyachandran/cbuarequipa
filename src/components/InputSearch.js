import React from 'react'
import PropTypes from 'prop-types'

import CustomInput from 'components/CustomInput/CustomInput'
import InputAdornment from '@material-ui/core/InputAdornment'

import Search from '@material-ui/icons/Search'

const InputSearch = ({ handleChangeSearchBar, placeholder }) => {
  return (
    <CustomInput
      id="SearchInput"
      inputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        placeholder: { placeholder },
        onChange: handleChangeSearchBar,
      }}
    />
  )
}

export default InputSearch

InputSearch.propTypes = {
  handleChangeSearchBar: PropTypes.func,
  placeholder: PropTypes.string,
}

InputSearch.defaultProps = {
  handleChangeSearchBar: () => {},
  placeholder: '',
}
