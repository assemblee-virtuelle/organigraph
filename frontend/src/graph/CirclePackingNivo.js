import React, { useState } from 'react';
import { CirclePacking } from '@nivo/circle-packing';
import { generateLibTree } from '@nivo/generators';

// const libTree = generateLibTree();
// console.log('libTree', libTree);

const data = {
  name: 'Assemblée Virtuelle',
  children: [
    {
      name: 'Cercle de coordination',
      children: [
        {
          name: 'Valorisation',
          value: 5,
        },
        {
          name: 'Facilitation',
          value: 5,
        },
        {
          name: 'Infoculture',
          value: 10,
        },
        {
          name: 'Admin / Compta',
          value: 15
        },
        {
          name: 'Partenaires',
          value: 3
        }
      ]
    },
    {
      name: 'Conseil d\'administration',
      value: 15
    },
    {
      name: 'Projets de l\'AV',
      value: 8,
      children: [
        {
          name: 'SemApps',
          value: 20
        },
        {
          name: 'Bus sémantique',
          value: 5
        },
        {
          name: 'Ontologie PAIR',
          value: 4
        }
      ]
    }
  ]
}

const HomePage = () => {
  const [zoomedId, setZoomedId] = useState(null)
  return (
    <CirclePacking
      width={900}
      height={500}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="loc"
      colors={{ scheme: 'blues' }}
      childColor={{ from: 'color', modifiers: [ [ 'brighter', 2 ] ] }}
      padding={4}
      enableLabels={true}
      labelsFilter={e => { console.log('label',e.node); return e.node.radius > 50}}
      // labelsSkipRadius={10}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'none',
          color: 'inherit',
          rotation: -45,
          lineWidth: 5,
          spacing: 8
        }
      ]}
      fill={[ { match: { depth: 1 }, id: 'lines' } ]}
      zoomedId={zoomedId}
      motionConfig="slow"
      onClick={node => {
        setZoomedId(zoomedId === node.id ? null : node.id)
      }}
    />
  );
}

export default HomePage;
