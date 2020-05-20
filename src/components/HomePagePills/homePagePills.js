import React from 'react';
import './homePagePills.scss';
import Pills from '../Pills/Pills';
import chair from '../../components/utils/images/homepills/chair.jpg';
import loveseat from '../../components/utils/images/homepills/loveseat.jpg';
import recliner from '../../components/utils/images/homepills/recliner.jpg';
import sectional from '../../components/utils/images/homepills/sectional.jpg';
import sofa from '../../components/utils/images/homepills/sofa.jpg';
import { Link } from '@reach/router';

const PillBox = () => {
  return (
    <div className="PillBox">
      <div className="boxPills">
        <Pills props={sofa} categoryName={'Sofa & Loveseat'} link={'/SofaandLoveseat'} />
        <Pills props={loveseat} categoryName={'Accent chair'} link={'/AccentChair'} />
        <Pills props={chair} categoryName={'Chair'} link={'/Chair'} />
        <Pills props={recliner} categoryName={'Recliners'} link={'/Recliner'} />
        <Pills props={sectional} categoryName={'Sectionals'} link={'/Sectionals'} />

        {/* <div className="extraPill">
          <div>
            <Link to="/ViewAll">Shop all</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PillBox;
