import React from 'react';

import FilterForm from 'components/FilterForm';

import { MOBILE_HEADER_HEIGHT } from 'globalConstants';

import './MobileFilterForm.css';



const MobileFilterForm = () => {
  return (
    <div className="MobileFilterForm" style={{ marginTop: MOBILE_HEADER_HEIGHT }}>
      <FilterForm />
    </div>
  );
}

export default MobileFilterForm;