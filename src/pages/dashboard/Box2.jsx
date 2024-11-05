import { Box, useTheme } from "@mui/material";
import FaxIcon from "@mui/icons-material/Fax";
import { ResponsivePie } from "@nivo/pie";
const data = [
  {
    id: "javascript",
    label: "javascript",
    value: 436,
    color: "hsl(180, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 488,
    color: "hsl(346, 70%, 50%)",
  },
];
function Box2() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "auto",
        my: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        width: "350px",
        height: "150px",
        display: "grid",
        gridTemplateColumns: "100px 200px ",
        gap: "60px",
        alignItems: "flex-start",
        borderRadius: "8px",
        boxShadow: " 1px 3px 4px #aaa",
      }}
    >
      <div className="text">
        <FaxIcon sx={{ color: "rgb(156, 39, 176)" }} />
        <h5>75,210</h5>
        <h5>Sales obtained</h5>
      </div>
      <div className="piechart" style={{ height: "200px" }}>
        <ResponsivePie
          theme={{
            text: {
              fontSize: 11,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: "#333333",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              wrapper: {},
              container: {
                background: "#ffffff",
                color: "#333333",
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
          data={data}
          margin={{ top: 20, right: 30, bottom: 110, left: 30 }}
          innerRadius={0.7}
          padAngle={1}
          cornerRadius={3}
          fit={false}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "dark2" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0"]],
          }}
          enableArcLinkLabels={false}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsOffset={-12}
          arcLinkLabelsDiagonalLength={0}
          arcLinkLabelsStraightLength={3}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color", modifiers: [] }}
          enableArcLabels={false}
          arcLabelsRadiusOffset={0.3}
          arcLabelsSkipAngle={9}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", "1.6"]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[]}
        />
      </div>
    </Box>
  );
}

export default Box2;
