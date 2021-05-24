import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Dropdown from 'components/formComponents/Dropdown'
import FilterFormLabel from './FilterFormLabel'

import { setFilterValue } from 'store/actions'

function SpellSchoolFilter({ metadata, filter, setFilterValue }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (metadata.spellSchools) {
      const newOptions = metadata.spellSchools
        .sort((a, b) => a.name > b.name)
        .map((spellSchool) => ({
          label: spellSchool.name,
          value: spellSchool.slug
        }))
      newOptions.unshift({ label: 'Any', value: '' })
      setOptions(newOptions)
    }
  }, [metadata])

  return (
    <div>
      <FilterFormLabel label="SPELL SCHOOL" />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue('spellSchool', e.target.value)}
        value={filter.spellSchool || ''}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    metadata: state.data.metadata,
    filter: state.filter
  }
}

export default connect(mapStateToProps, { setFilterValue })(SpellSchoolFilter)
