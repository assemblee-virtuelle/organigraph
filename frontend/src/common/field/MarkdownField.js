import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { MarkdownField as SemAppsMarkdownField } from '@semapps/markdown-components';

const useStyles = makeStyles((theme) => ({
  p: {
    // Make visible all return lines
    // See https://github.com/remarkjs/react-markdown/issues/273#issuecomment-683754992
    whiteSpace: 'pre-wrap',
    // '&:first-of-type': {
    //   marginTop: 10,
    // },
  },
  h: {
    marginTop: 15,
    marginBottom: 5,
  },
  ul: {
    margin: 0
  }
}));

const MarkdownField = (props) => {
  const classes = useStyles();
  return (
    <SemAppsMarkdownField
      overrides={{
        p: (props) => <Typography variant="body2" {...props} className={classes.p} />,
        span: (props) => <Typography variant="body2" {...props} className={classes.p} />,
        h1: (props) => <Typography variant="subtitle1" paragraph {...props} className={classes.h} />,
        h2: (props) => <Typography variant="subtitle2" paragraph {...props} className={classes.h} />,
        ul: (props) => <ul {...props} className={classes.ul} />,
        li: (props) => (
          <li>
            <Typography variant="body2" {...props} className={classes.p} />
          </li>
        ),
      }}
      className={classes.root}
      {...props}
    />
  );
};

MarkdownField.defaultProps = {
  addLabel: true,
};

export default MarkdownField;
