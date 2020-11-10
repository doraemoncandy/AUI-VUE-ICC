<script>
import { Line, mixins } from 'vue-chartjs';

export default {
	extends: Line,
	mixins: [mixins.reactiveProp],
	props: {
		options: {
			type: Object,
			default: null
		},
		chartData: {
			type: Object,
			default: null,
		}
	},
	watch: {
		options() {
			this.renderChart(this.chartData, this.options);
		},
	},
	methods: {
		getSpecificPointIndex(datasets, xValue) {
			const index = datasets[0].pointRadius.findIndex(point => point === xValue);
			return index;
		},
		getMetaData(chart, index) {
			const meta = chart.getDatasetMeta(0);
			if(!meta.data[index]) return null;
			const x = meta.data[index]._model.x;
			const y = meta.data[index]._model.y;
			return {x, y};
		},
		drawHorizontalLine(ctx, y, bound) {
			ctx.beginPath();
			ctx.setLineDash([6, 6]);
			ctx.moveTo(bound.left, y);
			ctx.lineTo(bound.right, y);
			ctx.stroke();
			console.log('in drawHoria');
		},
		drawVerticalLine(ctx, x, bound) {
			ctx.beginPath();
			ctx.setLineDash([]);
			ctx.moveTo(x, bound.top);
			ctx.lineTo(x, bound.bottom);
			ctx.stroke();
		},
		getLineValue(scale, index) {
			let lineValue = scale.getPixelForTick(index);

			return lineValue;
		},
		drawGridColor(chart) {
			const ctx = chart.ctx;
			const chartArea = chart.chartArea;
			const xScale = chart.scales['x-axis-0'];
			const gridLines = xScale.options.gridLines;
			const lineWidth = gridLines.lineWidth;
			const bgColor = xScale.options.gridLines.backgroundColor;
			let [x1, x2, y1, y2] = [0, 0, 0 ,0];

			let prevTick = {
				bgColor: 'rgba(20, 21, 25, 0.2)',
				x1: 40,
				x2: 40,
				y1: 7.3,
				y2: 7.3,
			};

			let currentBgColor = '';
			let remainLength = xScale.ticks.length;

			for (let i = 0; i <= remainLength; i +=1 ) {
				if (i == remainLength) {
					currentBgColor = 'differentFromPrevious';
				} else {
					currentBgColor = bgColor[i % bgColor.length];
				}

				if (currentBgColor != prevTick.bgColor) {
					var xLineValue = this.getLineValue(xScale, i, gridLines.offsetGridLines && xScale.ticks.length > 1);
					xLineValue += (lineWidth % 2 === 0) ? 0 : 0.5;
					x1 = x2 = xLineValue;
					y1 = chartArea.top;
					y2 = chartArea.bottom + lineWidth;
				}

				if (gridLines.drawOnChartArea && prevTick.bgColor != '') {
					ctx.save();
					ctx.fillStyle = prevTick.bgColor;
					
					ctx.fillRect(
						prevTick.x1, prevTick.y1,
						Math.abs(x2 - prevTick.x1), Math.abs(y2 - prevTick.y1)
					);
				}; // gl.drawonChartArea
				ctx.restore();

				// Save the new coordinates
				prevTick.bgColor = currentBgColor;
				prevTick.x1 = x1;
				prevTick.y1 = y1;
				prevTick.x2 = x2;
				prevTick.y2 = y2;
			}
		}
	},
	mounted() {
		const self = this;
		this.addPlugin({
			id: 'customAnnotation',
			afterDraw(chart, options) {
				// self.$refs.canvas.style.backgroundColor = '#1415194d';
				self.drawGridColor(chart);

				const datasets = chart.config.data.datasets;
				const opts = chart.config.options;
				const ctx = chart.ctx;
				const specificPointIndex = self.getSpecificPointIndex(datasets, 2);
				if (!self.getMetaData(chart, specificPointIndex)) return;
				const { x, y } = self.getMetaData(chart, specificPointIndex);
				const chartBound = chart.chartArea;
				
				ctx.lineWidth = 1;
				self.drawHorizontalLine(ctx, y, chartBound);
				self.drawVerticalLine(ctx, x, chartBound);
				// console.log(options);
			},
			// afterUpdate(chart, options) {
			// 	console.log('after update');
			// },
			// afterEvent(chart, options) {

			// 	if (options.type !== 'mousemove') return;
			// 	const datasets = chart.config.data.datasets;
			// 	const opts = chart.config.options;
			// 	const ctx = chart.ctx;
			// 	// const yVal = self.getSpecificPointYValue(datasets, 2);
			// }
		})
		this.renderChart(this.chartData, this.options);
	}
}
</script>