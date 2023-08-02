import './Properties.css';
import { properties } from '../../../constants/constants';

import React from 'react'
import CardBoxSlide from '../../../components/CardBoxSlide/CardBoxSlide';

const Properties = () => {
  return (
    <div>
      <CardBoxSlide data={properties} />
    </div>
  )
}

export default Properties