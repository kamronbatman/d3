/**
 * Set our display variables
 */

var v;

$(function(){
  v = {

    init: function(){
      v.stack = d3.layout.stack();
    }

    data: {},

    margin: { top: 20, right: 20, bottom: 20, left, 20 },
    width: v.totalWidth - v.margin.left - v.margin.right;
    height: v.totalHeight - v.margin.top - v.margin.bottom;
    totalWidth: 1024,
    totalHeight: 512,
    fCount: 512,
    levelMax: 256,

    xScale: d3.scale.ordinal()
        .domain([0, v.fCount/2])
        .rangeBands([0, v.width]),

    yScale: d3.scale.linear()
        .domain([0, v.levelMax])
        .range([v.height, 0]),

    ctx: new (window.AudioContext || window.webkitAudioContext)(),

    analyser: ctx.createAnalyser(), //Do we have an order issue?

    getFData: function(){
      return v.analyser.getByteFrequencyData(v.analyser.frequencyBinCount);
    },

  };
});