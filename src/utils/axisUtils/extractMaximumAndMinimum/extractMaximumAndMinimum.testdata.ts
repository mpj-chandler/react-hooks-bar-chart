import { SeriesData } from '../../../components/BarChart/types';

export const data: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        points: [
            {
                x: 0,
                y: 0.1,
            },
            {
                x: 1,
                y: -3.5,
            },
            {
                x: 2,
                y: 10.9,
            },
            {
                x: 3,
                y: -4.7,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        points: [
            {
                x: 0,
                y: 10.1,
            },
            {
                x: 1,
                y: 3.2,
            },
            {
                x: 2,
                y: -15.9,
            },
            {
                x: 3,
                y: 0.0,
            },
        ],
    },
    {
        seriesName: 'test-series-2',
        points: [
            {
                x: 0,
                y: 0.2,
            },
            {
                x: 1,
                y: 6.6,
            },
            {
                x: 2,
                y: -1.2,
            },
            {
                x: 3,
                y: 0.6,
            },
        ],
    },
];

const nullEntry: SeriesData = {
    seriesName: 'test-series-3',
    points: [
        {
            x: null,
            y: 0.2,
        },
        {
            x: 1,
            y: null,
        },
        {
            x: 2,
            y: -1.2,
        },
        {
            x: 3,
            y: 0.6,
        },
    ],
};

export const partiallyNullData: SeriesData[] = [ ...data, nullEntry ];

export const malformedData: SeriesData[] = [
    {
        seriesName: 'test-series-1',
        points: [
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
            {
                x: null,
                y: null,
            },
        ],
    },
];
