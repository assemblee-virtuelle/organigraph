import React from 'react';
import { CardContentInner, useTranslate, getFieldLabelTranslationArgs } from 'react-admin';
import { Box, makeStyles } from "@material-ui/core";
import FieldsListLabel from "./FieldsListLabel";

const sanitizeRestProps = ({ children, className, record, resource, basePath, version, initialValues, translate, ...rest }) => rest;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  field: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 10,
    '&:first-child': {
      paddingTop: 0,
    },
  },
  divider: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: '1px white solid',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}));

const FieldsList = ({ basePath, className, children, record, resource, version, ...rest }) => {
  const classes = useStyles();
  const translate = useTranslate();

  const fields = React.Children.toArray(children).filter(
    (field) => field && (record[field.props.source] || field.props.alwaysShow) && React.isValidElement(field)
  );

  return (
    <CardContentInner
      className={classes.root}
      key={version}
      {...sanitizeRestProps(rest)}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        {fields.map((field, i) => {
          return (
            <div key={i} className={classes.field}>
              {field.props.addLabel ? (
                <>
                  <FieldsListLabel>
                    {translate(
                      ...getFieldLabelTranslationArgs({
                        label: field.props.label,
                        resource,
                        source: field.props.source,
                      })
                    )}
                  </FieldsListLabel>
                  {React.cloneElement(field, {
                    record,
                    resource,
                    basePath,
                  })}
                </>
              ) : typeof field.type === 'string' ? (
                field
              ) : (
                React.cloneElement(field, {
                  record,
                  resource,
                  basePath,
                })
              )}
            </div>
          )
        })}
      </Box>
    </CardContentInner>
  );
}

export default FieldsList;
