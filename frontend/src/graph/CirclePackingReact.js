import React, { useMemo, useRef, useCallback, useState, useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useListContext } from "react-admin";
import { makeStyles } from '@material-ui/core';
import CirclePack from 'circlepack-chart';
import fromKapsule from "react-kapsule";
import { useHistory, useLocation } from "react-router-dom";
import * as d3 from 'd3';

const CirclePackReact = fromKapsule(CirclePack, { methodNames: ['zoomToNode', 'zoomReset', 'zoomBy']});

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: 'calc(100vh - 101px)',
  },
  nodeCircle: {
    '& text': {
      fontSize: 17,
      fontWeight: 'bold'
    }
  },
  nodeRole: {
    '& text': {
      fontSize: 12,
      fontWeight: 'bold'
    }
  }
}));

const d3color = d3.scaleOrdinal(d3.schemePaired);

function searchTree(element, matchingId){
  if(element.id === matchingId) {
    return element;
  } else if (element.children){
    let i;
    let result = null;
    for(i=0; result == null && i < element.children.length; i++){
      result = searchTree(element.children[i], matchingId);
    }
    return result;
  }
  return null;
}

const CirclePackingReact = () => {
  const { width, height, ref: wrapper } = useResizeDetector();
  const chart = useRef();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { ids, data, loading, basePath } = useListContext();
  const [ selectedNode, setSelectedNode ] = useState(null);
  const [ waitChartLoad, setWaitChartLoad ] = useState(true);

  const root = useMemo(() => {
    if( !loading && ids.length > 0 ) {
      return d3.stratify()
        .id(d => d.id)
        .parentId(d => d['pair:partOf'])
        (Object.values(data));
    }
  }, [ids, data, loading]);

  const onClick = useCallback(node => {
    if( node ) {
      if( selectedNode && node.id === selectedNode.id ) {
        history.push(basePath + '/' + encodeURIComponent(root.id) + '/show');
      } else {
        history.push(basePath + '/' + encodeURIComponent(node.id) + '/show');
      }
    }
  }, [history, basePath, selectedNode, root]);

  const size = useCallback(node => node.depth === 1 ? 10 : node.data['og:accountabilities'] ? node.data['og:accountabilities']?.split(/\r\n|\r|\n/).length : 2, []);
  const label = useCallback(node => node.data['pair:label'], []);
  const color = useCallback(node => d3color(node ? node.depth : null), []);
  const nodeClassName = useCallback(node => node.depth === 1 ? classes.nodeCircle : classes.nodeRole, [classes])

  useEffect(() => {
    if( root ) {
      const paths = location.pathname.split('/');
      if( paths.length > 2 ) {
        const uri = decodeURIComponent(paths[2]);
        const node = searchTree(root, uri);
        if( node && node.id !== selectedNode?.id ) {
          setSelectedNode(node);
        }
      } else {
        history.push(basePath + '/' + encodeURIComponent(root.id) + '/show');
      }
    }
  }, [location, history, root, selectedNode, setSelectedNode, basePath]);

  useEffect(() => {
    if( selectedNode ) {
      if( waitChartLoad ) {
        // On first call, we wait a bit before zooming or it won't work (chart must be fully rendered first)
        setTimeout(() => setWaitChartLoad(false), 700);
      } else {
        chart.current.zoomToNode(selectedNode);
      }
    }
  }, [selectedNode, waitChartLoad, setWaitChartLoad]);

  return(
    <div className={classes.wrapper} ref={wrapper}>
      <CirclePackReact
        ref={chart}
        width={width}
        height={height}
        data={root}
        color={color}
        onClick={onClick}
        size={size}
        label={label}
        tooltipTitle={label}
        transitionDuration={500}
        nodeClassName={nodeClassName}
      />
    </div>
  );
};

export default CirclePackingReact;
