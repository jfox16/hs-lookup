import React from 'react'
import { connect } from 'react-redux'

import FilterFormLabel from './FilterFormLabel'
import FilterFormNumeric from './FilterFormNumeric'
import './NumericFilters.css'

import { setFilterValue } from 'store/actions'

function NumericFilters({ filter, setFilterValue }) {
  return (
    <div className="NumericFilters">
      <div>
        <FilterFormLabel label="Mana" />
        <FilterFormNumeric
          value={filter.manaCost}
          setValue={(value) => setFilterValue('manaCost', value)}
        />
      </div>
      <div>
        <FilterFormLabel label="Attack" />
        <FilterFormNumeric
          value={filter.attack}
          setValue={(value) => setFilterValue('attack', value)}
        />
      </div>
      <div>
        <FilterFormLabel label="Health" />
        <FilterFormNumeric
          value={filter.health}
          setValue={(value) => setFilterValue('health', value)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, { setFilterValue })(NumericFilters)
