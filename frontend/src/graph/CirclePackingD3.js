import React, { useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';


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

const color = d3.scaleLinear()
  .domain([0, 5])
  .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
  .interpolate(d3.interpolateHcl)

const height = 500;
const width = 500;

const pack = data => d3.pack()
  .size([width, height])
  .padding(3)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value));

const HomePage = () => {
  const d3element = useRef();

  useLayoutEffect(() => {
    const root = pack(data);
    let focus = root;
    let view;

    const svg = d3.select(d3element.current)
      .append('svg')
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "0 -14px")
      .style("background", color(0))
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

    const node = svg.append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
      .attr("fill", d => d.children ? color(d.depth) : "white")
      .attr("pointer-events", d => !d.children ? "none" : null)
      .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
      .on("mouseout", function() { d3.select(this).attr("stroke", null); })
      .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

    const label = svg.append("g")
      .style("font", "10px sans-serif")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .text(d => d.data.name);

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("r", d => d.r * k);
    }

    function zoom(event, d) {
      const focus0 = focus;

      focus = d;

      const transition = svg.transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

      label
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }
  }, [d3element])

  return( <div ref={d3element} /> );
};

export default HomePage;
