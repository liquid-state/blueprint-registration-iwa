import React, { Fragment } from 'react';
import { Button } from '@liquid-state/ui-kit';
import { Link } from '../../routing';

import Title from '../../components/Title';

export default () => (
  <Fragment>
    <Title>Terms & Conditions</Title>
    <p>
      Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Commodi cum saepe
      minima esse pariatur, reprehenderit
      soluta beatae quas architecto laboriosam
      tempore dolorem ipsam vitae necessitatibus
      cupiditate, nam, accusamus quisquam? Architecto?
    </p>

    <Button stretched type="inverted">
      <Link to="/register">DONE</Link>
    </Button>
  </Fragment>
);
