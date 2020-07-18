import React from 'react';
import { withStyles } from '@material-ui/styles';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';

import styles from './style';

const Bold = ({ children }) => <span className='bold'>{children}</span>;

const Text = ({ children }) => <p className='align-center'>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

type Props = {
  classes: Object,
  data: Object,
};

const BlogPost = ({ classes, data }: Props) => (
  <div className={classes.container}>
    <Img fluid={data.banner.fluid.srcSet} />
    <Typography variant='h2' color='textPrimary'>
      {data.title}
    </Typography>
    <Typography
      variant='body1'
      // dangerouslySetInnerHTML={{
      //   __html: data.content,
      // }}
    >
      {documentToReactComponents(data.content.json, options)}
    </Typography>
    {console.log(data)}
  </div>
);

export default withStyles(styles)(BlogPost);
