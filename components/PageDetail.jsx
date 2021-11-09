import React from 'react';
import DualColumnTemplate from './Page Templates/DualColumnTemplate';
import FullPageImageTemplate from './Page Templates/FullPageImageTemplate';
import GridTemplate from './Page Templates/GridTemplate';
import SingleColumnTemplate from './Page Templates/SingleColumnTemplate';

const PageDetail = ({ page }) => {

  return (
    <>
      {
        page.template === 'Grid' ?
            <GridTemplate page={page} />
        : page.template === 'SingleColumn' ?
            <SingleColumnTemplate page={page} />
        : page.template === 'DualColumn' ?
            <DualColumnTemplate page={page} />
        : page.template === 'FullPageImage' ?
            <FullPageImageTemplate page={page} />
        :null
      }
    </>
  );
};

export default PageDetail;