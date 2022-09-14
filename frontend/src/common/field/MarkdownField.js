import React from 'react';
import urlJoin from 'url-join';
import { Typography, makeStyles } from '@material-ui/core';
import { MarkdownField as SemAppsMarkdownField } from '@semapps/markdown-components';
import { Link, linkToRecord } from "react-admin";

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

const InternalLink = ({ title, href, children, ...rest }) => {
  if (title && title.startsWith('/u/')) {
    const splitTitle = title.split('/');
    return <Link to={linkToRecord('/Person', urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'users', splitTitle[2]) , 'show')} {...rest}>{children}</Link>;
  } else {
    return <a title={title} href={href} target="_blank" rel="noreferrer noopener" {...rest}>{children}</a>
  }
};

const InternalImage = ({ src, alt, ...rest }) => {
  if (src.startsWith('file-guid:')) {
    src = "https://grandjardin.jardiniersdunous.org/file/file/download?guid=" + src.substring(10)
  }
  return <img src={src} alt={alt} style={{ maxWidth: '100%' }} {...rest} />;
};

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
        a: InternalLink,
        img: InternalImage
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
