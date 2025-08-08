import styled from "styled-components";
import Heading from "../../../shared/ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../../context/DarkModeContext";

const ChartWrapper = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-grey-200);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  grid-column: 3 / span 2;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .dark-mode & {
    background: rgba(30, 37, 50, 0.85);
    border: 1px solid var(--color-grey-700);
  }
`;

const CustomTooltipBox = styled.div`
  background: var(--color-grey-0);
  color: var(--color-grey-900);
  border: 1px solid var(--color-grey-200);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  .dark-mode & {
    background: rgba(40, 48, 60, 0.9);
    color: var(--color-grey-50);
    border-color: var(--color-grey-600);
  }
`;

const lightPalette = [
  "#FF6B6B",
  "#FF9F43",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9D4EDD",
  "#E36414",
  "#14B8A6",
];

const darkPalette = [
  "#B91C1C",
  "#C2410C",
  "#A16207",
  "#4D7C0F",
  "#15803D",
  "#0F766E",
  "#1D4ED8",
  "#7E22CE",
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipBox>
        <strong>{payload[0].name}</strong>: {payload[0].value} stays
      </CustomTooltipBox>
    );
  }
  return null;
}

function prepareData(baseColors, stays) {
  const durations = [
    "1 night",
    "2 nights",
    "3 nights",
    "4-5 nights",
    "6-7 nights",
    "8-14 nights",
    "15-21 nights",
    "21+ nights",
  ];

  const dataTemplate = durations.map((label, i) => ({
    duration: label,
    value: 0,
    color: baseColors[i],
  }));

  function incValue(arr, field) {
    return arr.map((item) =>
      item.duration === field ? { ...item, value: item.value + 1 } : item
    );
  }

  return stays
    .reduce((arr, cur) => {
      const n = cur.numNights;
      if (n === 1) return incValue(arr, "1 night");
      if (n === 2) return incValue(arr, "2 nights");
      if (n === 3) return incValue(arr, "3 nights");
      if ([4, 5].includes(n)) return incValue(arr, "4-5 nights");
      if ([6, 7].includes(n)) return incValue(arr, "6-7 nights");
      if (n >= 8 && n <= 14) return incValue(arr, "8-14 nights");
      if (n >= 15 && n <= 21) return incValue(arr, "15-21 nights");
      if (n >= 21) return incValue(arr, "21+ nights");
      return arr;
    }, dataTemplate)
    .filter((item) => item.value > 0);
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const palette = isDarkMode ? darkPalette : lightPalette;
  const data = prepareData(palette, confirmedStays);

  return (
    <ChartWrapper>
      <Heading as="h2">Stay Duration Overview</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
          >
            {data.map((entry) => (
              <Cell key={entry.duration} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={12}
            wrapperStyle={{ fontSize: "0.85rem", marginTop: "1rem" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default DurationChart;
