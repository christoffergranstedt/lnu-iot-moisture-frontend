import * as React from "react"

import { ResponsiveLine } from "@nivo/line"

export interface HeadingProps {
  incomingData: any
}


export const LineChart: React.FC<HeadingProps> = ({ incomingData }) => {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    setData([])
  }, [data])

  if (data) {
    return (
      <div style={{ height: 420, maxWidth: "100%" }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
          animate={true}
          enableSlices={"x"}
          yScale={{
            type: "linear",
            stacked: true,
            min: 0,
            max: 1000
          }}
          lineWidth={3}
          curve="linear"
          colors={["#028ee6", "#774dd7"]}
          enableGridX={false}
          pointSize={12}
          pointColor="white"
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          layers={[
            "grid",
            "markers",
            "areas",
            "lines",
            "slices",
            "axes",
            "points",
            "legends"
          ]}
          theme={{
            crosshair: {
              line: {
                strokeWidth: 2,
                stroke: "#774dd7",
                strokeOpacity: 1
              }
            }
          }}
        />
      </div>
    )
  } else {
    return null
  }
}

