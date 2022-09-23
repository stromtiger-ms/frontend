// import * as ChartGeo from 'chartjs-chart-geo/build/index'
import {
    CategoryScale,
    Chart,
    Filler,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip
} from 'chart.js'
// import { ChoroplethController, ColorScale, GeoFeature, ProjectionScale } from 'chartjs-chart-geo'

Chart.register(CategoryScale)
Chart.register(LineController)
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)
Chart.register(Tooltip)
Chart.register(Filler)
Chart.register(Legend)

// Chart.register(ChoroplethController)
// Chart.register(ProjectionScale)
// Chart.register(ColorScale)
// Chart.register(GeoFeature)
// Chart.register(Tooltip)

export {
    Chart
    // ChartGeo
}