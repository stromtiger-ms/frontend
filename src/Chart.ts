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
import Zoom from 'chartjs-plugin-zoom'

Chart.register(CategoryScale)
Chart.register(LineController)
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)
Chart.register(Tooltip)
Chart.register(Filler)
Chart.register(Legend)
Chart.register(Zoom)

export {
    Chart
}