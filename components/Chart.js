import {Dimensions} from "react-native"
import {LineChart} from "react-native-chart-kit"

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
}

const Chart = ({data = {}, config = chartConfig}) => {
    return <LineChart data={data} width={Dimensions.get("window").width} height={220} chartConfig={config} />
}

export default Chart