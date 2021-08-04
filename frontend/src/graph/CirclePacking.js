import React, { useLayoutEffect, useRef, useState } from 'react';
import { useListContext } from "react-admin";
import { makeStyles } from '@material-ui/core';
import CirclePack from 'circlepack-chart';
import { useHistory } from "react-router-dom";
import * as d3 from 'd3';

const dataFixed = {
  name: 'Cercle de coordination',
  children: [
    {
      name: 'Valorisation',
      value: 1
    },
    {
      name: 'Facilitation',
      value: 1
    },
    {
      name: 'Infoculture',
      value: 1
    }
  ]
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100vh - 180px)',
  },
  nodeCircle: {
    '& text': {
      fontSize: 22,
      fontWeight: 'bold'
    }
  },
  nodeRole: {
    '& text': {
      fontSize: 13,
      fontWeight: 'bold'
    }
  }
})

const color = d3.scaleOrdinal(d3.schemePaired);
let zoomedNode;

const CirclePacking = () => {
  const element = useRef();
  const classes = useStyles();
  const history = useHistory();
  const [ chart, setChart ] = useState();
  const { ids, data, loading, basePath } = useListContext();

  useLayoutEffect(() => {
    const chart = CirclePack()
      .width(element.current.clientWidth)
      .height(element.current.clientHeight)
      // .label(node => node.children ? undefined : node.name)
      .size(node => 1)
      .label(node => node.data['pair:label'])
      .excludeRoot(false)
      .color((d, parent) => color(parent ? parent.data.name : null))
      .tooltipTitle((node) => node.name)
      .transitionDuration(500)
      .nodeClassName(node => {
        if( node.children && node.children.length > 0 ) {
          return classes.nodeCircle;
        } else {
          return classes.nodeRole;
        }
      });
      // .tooltipContent((d, node) => `Size: <i>${node.value}</i>`);

    // chart.onClick((node, parent) => {
    //   console.log('parent', node);
    //   if( zoomedNode && node.name === zoomedNode.name ) {
    //     chart.zoomReset();
    //     zoomedNode = undefined;
    //     history.push('/Circle/' + encodeURIComponent(root.id) + '/show')
    //   } else {
    //     // if( !node.children || node.children.length === 0 ) {
    //     //   chart.zoomToNode(node);
    //     //   zoomedNode = node;
    //     //   history.push('/Circle/' + encodeURIComponent(node.id))
    //     // } else {
    //       chart.zoomToNode(node);
    //       zoomedNode = node;
    //       history.push('/Circle/' + encodeURIComponent(node.id) + '/show')
    //     // }
    //   }
    // });

    // element.current.addEventListener('resize', () => {
    //   console.log('div resized');
    // })

    console.log('chart called again')

    chart(element.current);

    setChart(chart);
  }, [setChart])

  useLayoutEffect(() => {
    if( !chart || loading || ids.length === 0 ) return;

    console.log('data', data, ids);

    const root = d3.stratify()
      .id(d => d.id)
      .parentId(d => d['pair:partOf'])
      (Object.values(data));

    console.log('root', root);
    console.log('element', element.current.data)

    chart.data(root)
  }, [element, loading, data, ids])


  return( <div ref={element} className={classes.root} /> );
};

export default CirclePacking;
