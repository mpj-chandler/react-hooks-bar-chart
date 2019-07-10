import { SeriesDataPoint } from "../BarChart/types";

export interface AxisRange {
    min: number;
    max: number;
}

export interface XAxisTickProps {
    points: SeriesDataPoint[];
    padding: number;
}