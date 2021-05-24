import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import FilterFormLabel from './FilterFormLabel'
import Dropdown from 'components/formComponents/Dropdown'

import { setFilterValue } from 'store/actions'

const formats = [
  { value: 'wild', label: 'Wild' },
  { value: 'standard', label: 'Standard' },
  { value: 'duels', label: 'Duels' }
]

function CardSetFilter({ sets, filter, setFilterValue }) {
  const options = []

  options.push({
    value: 'formats',
    label: '───── Formats ─────',
    disabled: true
  })
  options.push(...formats)
  options.push({ value: 'sets', label: '───── Sets ─────', disabled: true })
  options.push(...sets.map((set) => ({ value: set.slug, label: set.name })))

  return (
    <div>
      <FilterFormLabel label="CARD SET" />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue('cardSet', e.target.value)}
        value={filter.cardSet || ''}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sets: state.data.metadata.sets,
    filter: state.filter
  }
}

export default connect(mapStateToProps, { setFilterValue })(CardSetFilter)
