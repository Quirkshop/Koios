import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';

type Props = {
  to: string;
  [x: string]: any;
};
const Link = (props: Props) => (
  <MuiLink color='inherit' component={GatsbyLink} {...props}>
    {props.children}
  </MuiLink>
);
export default Link;
