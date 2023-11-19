type Status = 'Active' | 'Pending' | 'Inactive';
type Sector = 'Technology' | 'Energy' | 'Healthcare' | 'Education' | 'Automotive' | 'Food' | 'Fitness' | 'Media' | 'Finance' | 'Travel';
type Region = 'Asia' | 'Australia' | 'Europe' | 'North America' | 'South America';

export interface MonthlyData {
    date: string;
    Revenue: number;
    Expenses: number;
    Profit: number;
}

export interface Entity {
  id: number;
  company: string;
  industry: string;
  location: string;
  employee_count: number;
  year_founded: number;
  status: Status;
  region: Region;
  sector: Sector;
  monthlyData: MonthlyData[];
}

const data: Entity[] = [
    {
        "id": 1,
        "company": "FinSecure 1",
        "industry": "Food",
        "location": "S\u00e3o Paulo",
        "employee_count": 252,
        "year_founded": 2008,
        "status": "Active",
        "region": "Europe",
        "sector": "Food",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 44889.98,
                "Expenses": 19926.11,
                "Profit": 15381.42
            },
            {
                "date": "2023-10",
                "Revenue": 18093.04,
                "Expenses": 47966.08,
                "Profit": 32737.47
            },
            {
                "date": "2023-09",
                "Revenue": 46263.72,
                "Expenses": 39900.81,
                "Profit": 39413.23
            },
            {
                "date": "2023-08",
                "Revenue": 24870.55,
                "Expenses": 31927.77,
                "Profit": 38232.41
            },
            {
                "date": "2023-07",
                "Revenue": 3667.65,
                "Expenses": 31115.16,
                "Profit": 13669.45
            },
            {
                "date": "2023-06",
                "Revenue": 24119.65,
                "Expenses": 18129.32,
                "Profit": 46328.93
            },
            {
                "date": "2023-05",
                "Revenue": 37333.81,
                "Expenses": 20844.63,
                "Profit": 11741.46
            },
            {
                "date": "2023-04",
                "Revenue": 45849.01,
                "Expenses": 31806.9,
                "Profit": 46282.71
            },
            {
                "date": "2023-03",
                "Revenue": 37845.24,
                "Expenses": 18192.24,
                "Profit": 28392.21
            },
            {
                "date": "2023-02",
                "Revenue": 3025.35,
                "Expenses": 29366.86,
                "Profit": 23356.01
            },
            {
                "date": "2023-01",
                "Revenue": 8520.04,
                "Expenses": 15724.65,
                "Profit": 12967.12
            },
            {
                "date": "2022-12",
                "Revenue": 40358.08,
                "Expenses": 9046.86,
                "Profit": 33387.8
            },
            {
                "date": "2022-11",
                "Revenue": 23787.24,
                "Expenses": 38344.62,
                "Profit": 33823.66
            },
            {
                "date": "2022-10",
                "Revenue": 27065.12,
                "Expenses": 39683.85,
                "Profit": 36755.05
            },
            {
                "date": "2022-09",
                "Revenue": 5793.35,
                "Expenses": 13634.38,
                "Profit": 36752.82
            },
            {
                "date": "2022-08",
                "Revenue": 29825.01,
                "Expenses": 39412.99,
                "Profit": 12092.99
            },
            {
                "date": "2022-07",
                "Revenue": 48189.43,
                "Expenses": 49613.51,
                "Profit": 21535.17
            },
            {
                "date": "2022-06",
                "Revenue": 20783.98,
                "Expenses": 23484.75,
                "Profit": 6858.96
            },
            {
                "date": "2022-05",
                "Revenue": 18430.75,
                "Expenses": 18586.86,
                "Profit": 2703.95
            },
            {
                "date": "2022-04",
                "Revenue": 45473.79,
                "Expenses": 49642.99,
                "Profit": 43226.6
            },
            {
                "date": "2022-03",
                "Revenue": 24660.55,
                "Expenses": 8108.49,
                "Profit": 30109.97
            },
            {
                "date": "2022-02",
                "Revenue": 25961.31,
                "Expenses": 45385.91,
                "Profit": 33323.83
            },
            {
                "date": "2022-01",
                "Revenue": 6748.61,
                "Expenses": 41495.34,
                "Profit": 34639.42
            },
            {
                "date": "2021-12",
                "Revenue": 20486.65,
                "Expenses": 26622.11,
                "Profit": 1618.09
            }
        ]
    },
    {
        "id": 2,
        "company": "GreenEnergy 2",
        "industry": "Technology",
        "location": "Berlin",
        "employee_count": 4365,
        "year_founded": 2006,
        "status": "Inactive",
        "region": "South America",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 29583.46,
                "Expenses": 31879.13,
                "Profit": 41942.89
            },
            {
                "date": "2023-10",
                "Revenue": 36346.91,
                "Expenses": 9837.11,
                "Profit": 39160.32
            },
            {
                "date": "2023-09",
                "Revenue": 19834.54,
                "Expenses": 38121.68,
                "Profit": 45336.24
            },
            {
                "date": "2023-08",
                "Revenue": 28632.27,
                "Expenses": 8849.77,
                "Profit": 17221.77
            },
            {
                "date": "2023-07",
                "Revenue": 27743.22,
                "Expenses": 42507.66,
                "Profit": 16052.45
            },
            {
                "date": "2023-06",
                "Revenue": 14982.33,
                "Expenses": 18455.6,
                "Profit": 11489.88
            },
            {
                "date": "2023-05",
                "Revenue": 29476.26,
                "Expenses": 22900.79,
                "Profit": 5295.03
            },
            {
                "date": "2023-04",
                "Revenue": 14886.93,
                "Expenses": 6958.48,
                "Profit": 21372.0
            },
            {
                "date": "2023-03",
                "Revenue": 40277.97,
                "Expenses": 43162.22,
                "Profit": 39667.14
            },
            {
                "date": "2023-02",
                "Revenue": 39027.03,
                "Expenses": 8646.53,
                "Profit": 35966.24
            },
            {
                "date": "2023-01",
                "Revenue": 21246.16,
                "Expenses": 7363.12,
                "Profit": 37500.61
            },
            {
                "date": "2022-12",
                "Revenue": 15231.5,
                "Expenses": 47302.29,
                "Profit": 5447.34
            },
            {
                "date": "2022-11",
                "Revenue": 36566.8,
                "Expenses": 23345.27,
                "Profit": 33040.42
            },
            {
                "date": "2022-10",
                "Revenue": 14274.7,
                "Expenses": 13840.71,
                "Profit": 14113.46
            },
            {
                "date": "2022-09",
                "Revenue": 10784.63,
                "Expenses": 21496.72,
                "Profit": 43773.72
            },
            {
                "date": "2022-08",
                "Revenue": 7968.43,
                "Expenses": 18972.51,
                "Profit": 37785.76
            },
            {
                "date": "2022-07",
                "Revenue": 34210.98,
                "Expenses": 39897.55,
                "Profit": 37607.38
            },
            {
                "date": "2022-06",
                "Revenue": 11660.16,
                "Expenses": 23257.27,
                "Profit": 8878.03
            },
            {
                "date": "2022-05",
                "Revenue": 16976.78,
                "Expenses": 37514.38,
                "Profit": 15577.11
            },
            {
                "date": "2022-04",
                "Revenue": 6703.56,
                "Expenses": 19985.4,
                "Profit": 19874.54
            },
            {
                "date": "2022-03",
                "Revenue": 48138.06,
                "Expenses": 37134.23,
                "Profit": 45923.33
            },
            {
                "date": "2022-02",
                "Revenue": 48022.35,
                "Expenses": 7414.45,
                "Profit": 7001.96
            },
            {
                "date": "2022-01",
                "Revenue": 16854.5,
                "Expenses": 15487.99,
                "Profit": 43218.59
            },
            {
                "date": "2021-12",
                "Revenue": 27604.85,
                "Expenses": 16891.28,
                "Profit": 41386.64
            }
        ]
    },
    {
        "id": 3,
        "company": "TechCorp 3",
        "industry": "Fitness",
        "location": "San Francisco",
        "employee_count": 3984,
        "year_founded": 1993,
        "status": "Inactive",
        "region": "Europe",
        "sector": "Fitness",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 3246.23,
                "Expenses": 41391.2,
                "Profit": 1364.58
            },
            {
                "date": "2023-10",
                "Revenue": 21069.6,
                "Expenses": 6927.48,
                "Profit": 42749.92
            },
            {
                "date": "2023-09",
                "Revenue": 7868.98,
                "Expenses": 2537.76,
                "Profit": 6674.88
            },
            {
                "date": "2023-08",
                "Revenue": 1466.32,
                "Expenses": 36164.51,
                "Profit": 23338.6
            },
            {
                "date": "2023-07",
                "Revenue": 31838.08,
                "Expenses": 26499.56,
                "Profit": 36001.05
            },
            {
                "date": "2023-06",
                "Revenue": 17188.42,
                "Expenses": 10757.52,
                "Profit": 11780.44
            },
            {
                "date": "2023-05",
                "Revenue": 46246.49,
                "Expenses": 47348.31,
                "Profit": 25917.02
            },
            {
                "date": "2023-04",
                "Revenue": 37244.53,
                "Expenses": 33514.47,
                "Profit": 33849.67
            },
            {
                "date": "2023-03",
                "Revenue": 49934.76,
                "Expenses": 44030.81,
                "Profit": 38520.14
            },
            {
                "date": "2023-02",
                "Revenue": 2548.97,
                "Expenses": 39350.51,
                "Profit": 9188.12
            },
            {
                "date": "2023-01",
                "Revenue": 44717.21,
                "Expenses": 21223.04,
                "Profit": 42176.56
            },
            {
                "date": "2022-12",
                "Revenue": 1038.87,
                "Expenses": 26659.03,
                "Profit": 12099.32
            },
            {
                "date": "2022-11",
                "Revenue": 24476.44,
                "Expenses": 6103.91,
                "Profit": 25215.42
            },
            {
                "date": "2022-10",
                "Revenue": 17223.96,
                "Expenses": 38062.58,
                "Profit": 38594.74
            },
            {
                "date": "2022-09",
                "Revenue": 33325.52,
                "Expenses": 46844.53,
                "Profit": 19444.85
            },
            {
                "date": "2022-08",
                "Revenue": 47061.25,
                "Expenses": 4770.65,
                "Profit": 47454.93
            },
            {
                "date": "2022-07",
                "Revenue": 39858.39,
                "Expenses": 27779.25,
                "Profit": 3411.03
            },
            {
                "date": "2022-06",
                "Revenue": 21300.93,
                "Expenses": 13086.21,
                "Profit": 22691.5
            },
            {
                "date": "2022-05",
                "Revenue": 33538.65,
                "Expenses": 44185.44,
                "Profit": 22494.17
            },
            {
                "date": "2022-04",
                "Revenue": 34252.87,
                "Expenses": 49125.06,
                "Profit": 48432.53
            },
            {
                "date": "2022-03",
                "Revenue": 2270.52,
                "Expenses": 6401.47,
                "Profit": 34170.8
            },
            {
                "date": "2022-02",
                "Revenue": 10925.81,
                "Expenses": 25305.33,
                "Profit": 46965.41
            },
            {
                "date": "2022-01",
                "Revenue": 42533.96,
                "Expenses": 30724.79,
                "Profit": 5963.12
            },
            {
                "date": "2021-12",
                "Revenue": 39677.43,
                "Expenses": 27653.56,
                "Profit": 11826.45
            }
        ]
    },
    {
        "id": 4,
        "company": "FinSecure 4",
        "industry": "Healthcare",
        "location": "San Francisco",
        "employee_count": 1189,
        "year_founded": 2009,
        "status": "Inactive",
        "region": "Africa",
        "sector": "Education",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 30893.01,
                "Expenses": 13776.08,
                "Profit": 42335.93
            },
            {
                "date": "2023-10",
                "Revenue": 32408.63,
                "Expenses": 16310.97,
                "Profit": 31749.02
            },
            {
                "date": "2023-09",
                "Revenue": 3534.61,
                "Expenses": 22972.85,
                "Profit": 17218.43
            },
            {
                "date": "2023-08",
                "Revenue": 34627.29,
                "Expenses": 10027.28,
                "Profit": 46411.96
            },
            {
                "date": "2023-07",
                "Revenue": 16836.47,
                "Expenses": 37310.74,
                "Profit": 10974.43
            },
            {
                "date": "2023-06",
                "Revenue": 49719.32,
                "Expenses": 32921.16,
                "Profit": 18256.78
            },
            {
                "date": "2023-05",
                "Revenue": 36545.44,
                "Expenses": 16197.89,
                "Profit": 39145.82
            },
            {
                "date": "2023-04",
                "Revenue": 38081.12,
                "Expenses": 14986.82,
                "Profit": 6861.24
            },
            {
                "date": "2023-03",
                "Revenue": 22669.55,
                "Expenses": 43736.93,
                "Profit": 41201.45
            },
            {
                "date": "2023-02",
                "Revenue": 14058.94,
                "Expenses": 27255.65,
                "Profit": 19078.63
            },
            {
                "date": "2023-01",
                "Revenue": 46155.34,
                "Expenses": 16688.21,
                "Profit": 12754.33
            },
            {
                "date": "2022-12",
                "Revenue": 34376.46,
                "Expenses": 18876.92,
                "Profit": 11209.64
            },
            {
                "date": "2022-11",
                "Revenue": 19125.36,
                "Expenses": 2421.1,
                "Profit": 11534.79
            },
            {
                "date": "2022-10",
                "Revenue": 44196.94,
                "Expenses": 5703.32,
                "Profit": 37710.15
            },
            {
                "date": "2022-09",
                "Revenue": 2410.3,
                "Expenses": 17757.36,
                "Profit": 27577.91
            },
            {
                "date": "2022-08",
                "Revenue": 20844.12,
                "Expenses": 38408.38,
                "Profit": 30445.85
            },
            {
                "date": "2022-07",
                "Revenue": 49796.75,
                "Expenses": 48640.18,
                "Profit": 10088.85
            },
            {
                "date": "2022-06",
                "Revenue": 29086.76,
                "Expenses": 17640.6,
                "Profit": 9968.38
            },
            {
                "date": "2022-05",
                "Revenue": 44168.67,
                "Expenses": 5233.73,
                "Profit": 9620.58
            },
            {
                "date": "2022-04",
                "Revenue": 26433.95,
                "Expenses": 44870.51,
                "Profit": 39243.08
            },
            {
                "date": "2022-03",
                "Revenue": 8299.44,
                "Expenses": 16695.32,
                "Profit": 34313.18
            },
            {
                "date": "2022-02",
                "Revenue": 45901.23,
                "Expenses": 39695.6,
                "Profit": 1931.81
            },
            {
                "date": "2022-01",
                "Revenue": 14909.68,
                "Expenses": 7040.94,
                "Profit": 22076.73
            },
            {
                "date": "2021-12",
                "Revenue": 32209.43,
                "Expenses": 5487.35,
                "Profit": 47695.0
            }
        ]
    },
    {
        "id": 5,
        "company": "HealthPlus 5",
        "industry": "Food",
        "location": "Singapore",
        "employee_count": 4472,
        "year_founded": 2006,
        "status": "Pending",
        "region": "Europe",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 14628.67,
                "Expenses": 8400.73,
                "Profit": 26825.47
            },
            {
                "date": "2023-10",
                "Revenue": 45834.12,
                "Expenses": 38627.59,
                "Profit": 18646.93
            },
            {
                "date": "2023-09",
                "Revenue": 5054.09,
                "Expenses": 24214.81,
                "Profit": 19935.24
            },
            {
                "date": "2023-08",
                "Revenue": 22744.4,
                "Expenses": 9129.19,
                "Profit": 36111.1
            },
            {
                "date": "2023-07",
                "Revenue": 47677.35,
                "Expenses": 42136.52,
                "Profit": 23599.22
            },
            {
                "date": "2023-06",
                "Revenue": 45892.5,
                "Expenses": 5280.02,
                "Profit": 26392.34
            },
            {
                "date": "2023-05",
                "Revenue": 32589.71,
                "Expenses": 26523.22,
                "Profit": 47023.39
            },
            {
                "date": "2023-04",
                "Revenue": 43699.98,
                "Expenses": 14180.78,
                "Profit": 19908.67
            },
            {
                "date": "2023-03",
                "Revenue": 31452.81,
                "Expenses": 12870.08,
                "Profit": 40118.61
            },
            {
                "date": "2023-02",
                "Revenue": 39514.56,
                "Expenses": 27052.72,
                "Profit": 49621.93
            },
            {
                "date": "2023-01",
                "Revenue": 24891.22,
                "Expenses": 26455.43,
                "Profit": 9575.6
            },
            {
                "date": "2022-12",
                "Revenue": 5862.42,
                "Expenses": 1807.63,
                "Profit": 43663.0
            },
            {
                "date": "2022-11",
                "Revenue": 44432.3,
                "Expenses": 11139.15,
                "Profit": 27788.74
            },
            {
                "date": "2022-10",
                "Revenue": 48591.4,
                "Expenses": 17289.78,
                "Profit": 41793.8
            },
            {
                "date": "2022-09",
                "Revenue": 30792.65,
                "Expenses": 9009.1,
                "Profit": 38260.76
            },
            {
                "date": "2022-08",
                "Revenue": 9205.22,
                "Expenses": 12850.15,
                "Profit": 29418.95
            },
            {
                "date": "2022-07",
                "Revenue": 34352.87,
                "Expenses": 6771.05,
                "Profit": 2186.79
            },
            {
                "date": "2022-06",
                "Revenue": 12984.22,
                "Expenses": 30265.13,
                "Profit": 23548.42
            },
            {
                "date": "2022-05",
                "Revenue": 17745.68,
                "Expenses": 34715.57,
                "Profit": 37368.08
            },
            {
                "date": "2022-04",
                "Revenue": 40989.49,
                "Expenses": 18397.64,
                "Profit": 41840.61
            },
            {
                "date": "2022-03",
                "Revenue": 25907.22,
                "Expenses": 19733.34,
                "Profit": 5617.41
            },
            {
                "date": "2022-02",
                "Revenue": 24961.89,
                "Expenses": 41574.65,
                "Profit": 33907.06
            },
            {
                "date": "2022-01",
                "Revenue": 40786.39,
                "Expenses": 36586.8,
                "Profit": 30830.43
            },
            {
                "date": "2021-12",
                "Revenue": 28142.52,
                "Expenses": 24425.78,
                "Profit": 28493.26
            }
        ]
    },
    {
        "id": 6,
        "company": "GreenEnergy 6",
        "industry": "Education",
        "location": "Berlin",
        "employee_count": 671,
        "year_founded": 2013,
        "status": "Pending",
        "region": "South America",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 12441.96,
                "Expenses": 1639.66,
                "Profit": 22694.15
            },
            {
                "date": "2023-10",
                "Revenue": 21046.2,
                "Expenses": 17047.2,
                "Profit": 6091.42
            },
            {
                "date": "2023-09",
                "Revenue": 21791.68,
                "Expenses": 45883.49,
                "Profit": 21703.81
            },
            {
                "date": "2023-08",
                "Revenue": 47811.0,
                "Expenses": 34396.96,
                "Profit": 17586.78
            },
            {
                "date": "2023-07",
                "Revenue": 16491.11,
                "Expenses": 10380.83,
                "Profit": 7355.18
            },
            {
                "date": "2023-06",
                "Revenue": 33709.76,
                "Expenses": 40319.9,
                "Profit": 5274.21
            },
            {
                "date": "2023-05",
                "Revenue": 28300.49,
                "Expenses": 3044.1,
                "Profit": 26068.63
            },
            {
                "date": "2023-04",
                "Revenue": 33485.1,
                "Expenses": 19126.03,
                "Profit": 41756.89
            },
            {
                "date": "2023-03",
                "Revenue": 17216.74,
                "Expenses": 36496.54,
                "Profit": 24232.08
            },
            {
                "date": "2023-02",
                "Revenue": 9534.54,
                "Expenses": 13844.9,
                "Profit": 6770.35
            },
            {
                "date": "2023-01",
                "Revenue": 36681.31,
                "Expenses": 31778.6,
                "Profit": 27652.34
            },
            {
                "date": "2022-12",
                "Revenue": 25715.05,
                "Expenses": 11641.55,
                "Profit": 23640.24
            },
            {
                "date": "2022-11",
                "Revenue": 39084.69,
                "Expenses": 45090.23,
                "Profit": 48896.44
            },
            {
                "date": "2022-10",
                "Revenue": 43518.66,
                "Expenses": 46274.73,
                "Profit": 13533.01
            },
            {
                "date": "2022-09",
                "Revenue": 35755.56,
                "Expenses": 30315.26,
                "Profit": 40379.24
            },
            {
                "date": "2022-08",
                "Revenue": 24671.88,
                "Expenses": 9332.2,
                "Profit": 24494.78
            },
            {
                "date": "2022-07",
                "Revenue": 38344.54,
                "Expenses": 37726.33,
                "Profit": 44287.68
            },
            {
                "date": "2022-06",
                "Revenue": 38071.76,
                "Expenses": 5967.26,
                "Profit": 10391.86
            },
            {
                "date": "2022-05",
                "Revenue": 36839.05,
                "Expenses": 47768.59,
                "Profit": 17408.21
            },
            {
                "date": "2022-04",
                "Revenue": 31044.75,
                "Expenses": 1822.24,
                "Profit": 30506.69
            },
            {
                "date": "2022-03",
                "Revenue": 42173.37,
                "Expenses": 30219.37,
                "Profit": 23456.23
            },
            {
                "date": "2022-02",
                "Revenue": 15667.69,
                "Expenses": 18429.32,
                "Profit": 5872.31
            },
            {
                "date": "2022-01",
                "Revenue": 10988.54,
                "Expenses": 5616.22,
                "Profit": 29856.06
            },
            {
                "date": "2021-12",
                "Revenue": 23646.67,
                "Expenses": 4949.99,
                "Profit": 40185.39
            }
        ]
    },
    {
        "id": 7,
        "company": "HealthPlus 7",
        "industry": "Finance",
        "location": "S\u00e3o Paulo",
        "employee_count": 623,
        "year_founded": 2011,
        "status": "Active",
        "region": "Europe",
        "sector": "Education",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 35746.35,
                "Expenses": 44968.71,
                "Profit": 15861.17
            },
            {
                "date": "2023-10",
                "Revenue": 16634.46,
                "Expenses": 22051.18,
                "Profit": 36325.03
            },
            {
                "date": "2023-09",
                "Revenue": 26399.38,
                "Expenses": 33014.49,
                "Profit": 40034.76
            },
            {
                "date": "2023-08",
                "Revenue": 5067.08,
                "Expenses": 37173.91,
                "Profit": 21637.47
            },
            {
                "date": "2023-07",
                "Revenue": 48460.16,
                "Expenses": 45160.02,
                "Profit": 1711.44
            },
            {
                "date": "2023-06",
                "Revenue": 32651.17,
                "Expenses": 13478.59,
                "Profit": 27342.12
            },
            {
                "date": "2023-05",
                "Revenue": 18050.96,
                "Expenses": 1047.06,
                "Profit": 15367.04
            },
            {
                "date": "2023-04",
                "Revenue": 47086.43,
                "Expenses": 21748.24,
                "Profit": 19243.46
            },
            {
                "date": "2023-03",
                "Revenue": 38995.68,
                "Expenses": 1639.59,
                "Profit": 45163.7
            },
            {
                "date": "2023-02",
                "Revenue": 40647.25,
                "Expenses": 23622.1,
                "Profit": 16630.15
            },
            {
                "date": "2023-01",
                "Revenue": 29138.21,
                "Expenses": 27685.09,
                "Profit": 23015.79
            },
            {
                "date": "2022-12",
                "Revenue": 3567.58,
                "Expenses": 18515.89,
                "Profit": 31393.63
            },
            {
                "date": "2022-11",
                "Revenue": 47044.75,
                "Expenses": 17830.99,
                "Profit": 8581.39
            },
            {
                "date": "2022-10",
                "Revenue": 39359.47,
                "Expenses": 26128.3,
                "Profit": 44657.57
            },
            {
                "date": "2022-09",
                "Revenue": 39938.26,
                "Expenses": 15619.54,
                "Profit": 5200.16
            },
            {
                "date": "2022-08",
                "Revenue": 48855.97,
                "Expenses": 18069.1,
                "Profit": 31795.45
            },
            {
                "date": "2022-07",
                "Revenue": 10882.14,
                "Expenses": 18564.11,
                "Profit": 30922.79
            },
            {
                "date": "2022-06",
                "Revenue": 19450.32,
                "Expenses": 8424.04,
                "Profit": 13358.81
            },
            {
                "date": "2022-05",
                "Revenue": 6960.47,
                "Expenses": 41727.14,
                "Profit": 17380.2
            },
            {
                "date": "2022-04",
                "Revenue": 17754.3,
                "Expenses": 15002.07,
                "Profit": 27288.14
            },
            {
                "date": "2022-03",
                "Revenue": 35697.07,
                "Expenses": 45314.26,
                "Profit": 42346.52
            },
            {
                "date": "2022-02",
                "Revenue": 49849.42,
                "Expenses": 18013.15,
                "Profit": 8675.64
            },
            {
                "date": "2022-01",
                "Revenue": 10674.18,
                "Expenses": 13450.65,
                "Profit": 38280.04
            },
            {
                "date": "2021-12",
                "Revenue": 42270.8,
                "Expenses": 1072.84,
                "Profit": 23924.91
            }
        ]
    },
    {
        "id": 8,
        "company": "SportFit 8",
        "industry": "Finance",
        "location": "S\u00e3o Paulo",
        "employee_count": 513,
        "year_founded": 2011,
        "status": "Pending",
        "region": "North America",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 42427.52,
                "Expenses": 21167.41,
                "Profit": 4775.84
            },
            {
                "date": "2023-10",
                "Revenue": 15540.47,
                "Expenses": 38516.73,
                "Profit": 46290.16
            },
            {
                "date": "2023-09",
                "Revenue": 33404.28,
                "Expenses": 37998.17,
                "Profit": 7005.94
            },
            {
                "date": "2023-08",
                "Revenue": 1650.27,
                "Expenses": 34249.74,
                "Profit": 23429.49
            },
            {
                "date": "2023-07",
                "Revenue": 31301.9,
                "Expenses": 17745.06,
                "Profit": 27176.19
            },
            {
                "date": "2023-06",
                "Revenue": 6395.07,
                "Expenses": 45345.98,
                "Profit": 19769.12
            },
            {
                "date": "2023-05",
                "Revenue": 11203.61,
                "Expenses": 10180.06,
                "Profit": 46235.04
            },
            {
                "date": "2023-04",
                "Revenue": 8392.89,
                "Expenses": 12177.04,
                "Profit": 47003.65
            },
            {
                "date": "2023-03",
                "Revenue": 3150.66,
                "Expenses": 46848.95,
                "Profit": 15445.33
            },
            {
                "date": "2023-02",
                "Revenue": 12093.44,
                "Expenses": 2799.27,
                "Profit": 21167.3
            },
            {
                "date": "2023-01",
                "Revenue": 37508.06,
                "Expenses": 47649.62,
                "Profit": 7152.68
            },
            {
                "date": "2022-12",
                "Revenue": 19427.29,
                "Expenses": 16477.44,
                "Profit": 41147.49
            },
            {
                "date": "2022-11",
                "Revenue": 37623.46,
                "Expenses": 32644.64,
                "Profit": 41112.41
            },
            {
                "date": "2022-10",
                "Revenue": 49852.18,
                "Expenses": 6674.77,
                "Profit": 7673.65
            },
            {
                "date": "2022-09",
                "Revenue": 23077.9,
                "Expenses": 21989.52,
                "Profit": 31461.3
            },
            {
                "date": "2022-08",
                "Revenue": 4363.8,
                "Expenses": 3243.4,
                "Profit": 24636.72
            },
            {
                "date": "2022-07",
                "Revenue": 2149.48,
                "Expenses": 20623.38,
                "Profit": 17542.8
            },
            {
                "date": "2022-06",
                "Revenue": 49847.37,
                "Expenses": 31648.24,
                "Profit": 8061.9
            },
            {
                "date": "2022-05",
                "Revenue": 6284.13,
                "Expenses": 42971.1,
                "Profit": 39716.11
            },
            {
                "date": "2022-04",
                "Revenue": 17682.05,
                "Expenses": 45125.18,
                "Profit": 25645.87
            },
            {
                "date": "2022-03",
                "Revenue": 8129.68,
                "Expenses": 29145.76,
                "Profit": 31632.35
            },
            {
                "date": "2022-02",
                "Revenue": 15508.5,
                "Expenses": 33043.53,
                "Profit": 45716.75
            },
            {
                "date": "2022-01",
                "Revenue": 19709.62,
                "Expenses": 11382.4,
                "Profit": 15569.78
            },
            {
                "date": "2021-12",
                "Revenue": 24829.29,
                "Expenses": 2851.02,
                "Profit": 38118.11
            }
        ]
    },
    {
        "id": 9,
        "company": "GlobalTravel 9",
        "industry": "Finance",
        "location": "Sydney",
        "employee_count": 4267,
        "year_founded": 2007,
        "status": "Active",
        "region": "Asia",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 49524.3,
                "Expenses": 25423.42,
                "Profit": 1224.96
            },
            {
                "date": "2023-10",
                "Revenue": 42273.62,
                "Expenses": 26338.1,
                "Profit": 23911.89
            },
            {
                "date": "2023-09",
                "Revenue": 29000.16,
                "Expenses": 15410.46,
                "Profit": 28107.36
            },
            {
                "date": "2023-08",
                "Revenue": 49253.35,
                "Expenses": 7029.43,
                "Profit": 31754.76
            },
            {
                "date": "2023-07",
                "Revenue": 21724.62,
                "Expenses": 1125.39,
                "Profit": 25227.66
            },
            {
                "date": "2023-06",
                "Revenue": 2471.35,
                "Expenses": 22500.03,
                "Profit": 37136.06
            },
            {
                "date": "2023-05",
                "Revenue": 29734.82,
                "Expenses": 40184.83,
                "Profit": 44023.43
            },
            {
                "date": "2023-04",
                "Revenue": 18640.0,
                "Expenses": 6786.81,
                "Profit": 34025.1
            },
            {
                "date": "2023-03",
                "Revenue": 9796.31,
                "Expenses": 28207.07,
                "Profit": 48159.86
            },
            {
                "date": "2023-02",
                "Revenue": 6918.99,
                "Expenses": 1715.18,
                "Profit": 16794.97
            },
            {
                "date": "2023-01",
                "Revenue": 2415.37,
                "Expenses": 11285.81,
                "Profit": 49786.42
            },
            {
                "date": "2022-12",
                "Revenue": 32621.52,
                "Expenses": 21619.71,
                "Profit": 11760.64
            },
            {
                "date": "2022-11",
                "Revenue": 10358.52,
                "Expenses": 38492.93,
                "Profit": 28370.02
            },
            {
                "date": "2022-10",
                "Revenue": 24737.52,
                "Expenses": 30054.59,
                "Profit": 17309.65
            },
            {
                "date": "2022-09",
                "Revenue": 15070.88,
                "Expenses": 43367.85,
                "Profit": 45107.92
            },
            {
                "date": "2022-08",
                "Revenue": 9069.2,
                "Expenses": 42263.66,
                "Profit": 48660.63
            },
            {
                "date": "2022-07",
                "Revenue": 7973.15,
                "Expenses": 5139.01,
                "Profit": 35669.46
            },
            {
                "date": "2022-06",
                "Revenue": 46009.45,
                "Expenses": 13181.56,
                "Profit": 17892.03
            },
            {
                "date": "2022-05",
                "Revenue": 46542.52,
                "Expenses": 4059.81,
                "Profit": 36010.2
            },
            {
                "date": "2022-04",
                "Revenue": 32639.29,
                "Expenses": 40809.71,
                "Profit": 39711.32
            },
            {
                "date": "2022-03",
                "Revenue": 27560.77,
                "Expenses": 48030.87,
                "Profit": 24870.84
            },
            {
                "date": "2022-02",
                "Revenue": 23737.34,
                "Expenses": 47192.53,
                "Profit": 19450.02
            },
            {
                "date": "2022-01",
                "Revenue": 22793.89,
                "Expenses": 29952.37,
                "Profit": 26976.44
            },
            {
                "date": "2021-12",
                "Revenue": 17564.28,
                "Expenses": 13831.45,
                "Profit": 38396.16
            }
        ]
    },
    {
        "id": 10,
        "company": "SportFit 10",
        "industry": "Food",
        "location": "San Francisco",
        "employee_count": 1247,
        "year_founded": 1997,
        "status": "Inactive",
        "region": "Europe",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 34430.74,
                "Expenses": 35292.41,
                "Profit": 49196.69
            },
            {
                "date": "2023-10",
                "Revenue": 10152.35,
                "Expenses": 34248.75,
                "Profit": 9404.44
            },
            {
                "date": "2023-09",
                "Revenue": 31262.86,
                "Expenses": 9772.15,
                "Profit": 25739.44
            },
            {
                "date": "2023-08",
                "Revenue": 29638.59,
                "Expenses": 14246.94,
                "Profit": 38184.93
            },
            {
                "date": "2023-07",
                "Revenue": 18559.01,
                "Expenses": 26777.49,
                "Profit": 8979.07
            },
            {
                "date": "2023-06",
                "Revenue": 21308.21,
                "Expenses": 4080.96,
                "Profit": 26071.77
            },
            {
                "date": "2023-05",
                "Revenue": 1977.85,
                "Expenses": 43215.88,
                "Profit": 9368.81
            },
            {
                "date": "2023-04",
                "Revenue": 39707.57,
                "Expenses": 32504.65,
                "Profit": 31001.18
            },
            {
                "date": "2023-03",
                "Revenue": 34585.39,
                "Expenses": 35771.58,
                "Profit": 15538.47
            },
            {
                "date": "2023-02",
                "Revenue": 4695.85,
                "Expenses": 38447.41,
                "Profit": 15087.85
            },
            {
                "date": "2023-01",
                "Revenue": 26857.36,
                "Expenses": 1680.36,
                "Profit": 10297.22
            },
            {
                "date": "2022-12",
                "Revenue": 42554.24,
                "Expenses": 12840.21,
                "Profit": 1224.65
            },
            {
                "date": "2022-11",
                "Revenue": 1457.57,
                "Expenses": 8521.61,
                "Profit": 33248.93
            },
            {
                "date": "2022-10",
                "Revenue": 21864.33,
                "Expenses": 18475.45,
                "Profit": 41651.02
            },
            {
                "date": "2022-09",
                "Revenue": 19199.07,
                "Expenses": 48756.21,
                "Profit": 37160.05
            },
            {
                "date": "2022-08",
                "Revenue": 40278.21,
                "Expenses": 3229.78,
                "Profit": 47403.61
            },
            {
                "date": "2022-07",
                "Revenue": 25146.62,
                "Expenses": 14775.92,
                "Profit": 8091.11
            },
            {
                "date": "2022-06",
                "Revenue": 41988.07,
                "Expenses": 31864.95,
                "Profit": 29226.29
            },
            {
                "date": "2022-05",
                "Revenue": 22574.54,
                "Expenses": 40024.79,
                "Profit": 49303.39
            },
            {
                "date": "2022-04",
                "Revenue": 19652.75,
                "Expenses": 19472.25,
                "Profit": 10894.41
            },
            {
                "date": "2022-03",
                "Revenue": 43009.08,
                "Expenses": 31574.92,
                "Profit": 31877.24
            },
            {
                "date": "2022-02",
                "Revenue": 41535.53,
                "Expenses": 7824.69,
                "Profit": 3090.12
            },
            {
                "date": "2022-01",
                "Revenue": 30423.22,
                "Expenses": 46041.54,
                "Profit": 20391.37
            },
            {
                "date": "2021-12",
                "Revenue": 13295.32,
                "Expenses": 44043.15,
                "Profit": 38451.23
            }
        ]
    },
    {
        "id": 11,
        "company": "MediaNet 11",
        "industry": "Finance",
        "location": "New York",
        "employee_count": 1869,
        "year_founded": 2013,
        "status": "Pending",
        "region": "Asia",
        "sector": "Food",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 4422.73,
                "Expenses": 43600.58,
                "Profit": 26591.35
            },
            {
                "date": "2023-10",
                "Revenue": 12461.09,
                "Expenses": 40875.27,
                "Profit": 34466.76
            },
            {
                "date": "2023-09",
                "Revenue": 42070.57,
                "Expenses": 15727.39,
                "Profit": 15759.01
            },
            {
                "date": "2023-08",
                "Revenue": 22507.85,
                "Expenses": 27520.41,
                "Profit": 34572.26
            },
            {
                "date": "2023-07",
                "Revenue": 5203.2,
                "Expenses": 27096.84,
                "Profit": 19047.65
            },
            {
                "date": "2023-06",
                "Revenue": 31577.91,
                "Expenses": 38971.07,
                "Profit": 26066.5
            },
            {
                "date": "2023-05",
                "Revenue": 10165.73,
                "Expenses": 7411.61,
                "Profit": 26923.76
            },
            {
                "date": "2023-04",
                "Revenue": 46893.69,
                "Expenses": 49630.37,
                "Profit": 42875.43
            },
            {
                "date": "2023-03",
                "Revenue": 13629.17,
                "Expenses": 36558.92,
                "Profit": 12454.14
            },
            {
                "date": "2023-02",
                "Revenue": 1845.83,
                "Expenses": 12771.0,
                "Profit": 27574.31
            },
            {
                "date": "2023-01",
                "Revenue": 39198.62,
                "Expenses": 41762.74,
                "Profit": 6074.26
            },
            {
                "date": "2022-12",
                "Revenue": 22370.22,
                "Expenses": 44098.05,
                "Profit": 2927.99
            },
            {
                "date": "2022-11",
                "Revenue": 26378.8,
                "Expenses": 4458.53,
                "Profit": 3406.93
            },
            {
                "date": "2022-10",
                "Revenue": 13541.71,
                "Expenses": 33313.22,
                "Profit": 39279.47
            },
            {
                "date": "2022-09",
                "Revenue": 15190.12,
                "Expenses": 7652.61,
                "Profit": 24764.79
            },
            {
                "date": "2022-08",
                "Revenue": 29120.99,
                "Expenses": 40987.66,
                "Profit": 20799.18
            },
            {
                "date": "2022-07",
                "Revenue": 33724.49,
                "Expenses": 11878.03,
                "Profit": 19396.13
            },
            {
                "date": "2022-06",
                "Revenue": 34711.93,
                "Expenses": 26040.55,
                "Profit": 1667.97
            },
            {
                "date": "2022-05",
                "Revenue": 40940.21,
                "Expenses": 44281.63,
                "Profit": 43517.21
            },
            {
                "date": "2022-04",
                "Revenue": 36904.63,
                "Expenses": 15976.47,
                "Profit": 21781.52
            },
            {
                "date": "2022-03",
                "Revenue": 39114.96,
                "Expenses": 46641.41,
                "Profit": 43545.15
            },
            {
                "date": "2022-02",
                "Revenue": 3120.68,
                "Expenses": 1412.23,
                "Profit": 24311.85
            },
            {
                "date": "2022-01",
                "Revenue": 49947.25,
                "Expenses": 33602.87,
                "Profit": 12959.77
            },
            {
                "date": "2021-12",
                "Revenue": 28349.34,
                "Expenses": 31049.21,
                "Profit": 32440.76
            }
        ]
    },
    {
        "id": 12,
        "company": "MediaNet 12",
        "industry": "Healthcare",
        "location": "Sydney",
        "employee_count": 3043,
        "year_founded": 2001,
        "status": "Active",
        "region": "Europe",
        "sector": "Food",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 10923.49,
                "Expenses": 46142.39,
                "Profit": 25422.67
            },
            {
                "date": "2023-10",
                "Revenue": 10788.24,
                "Expenses": 15267.4,
                "Profit": 25651.06
            },
            {
                "date": "2023-09",
                "Revenue": 45157.89,
                "Expenses": 19881.74,
                "Profit": 36415.55
            },
            {
                "date": "2023-08",
                "Revenue": 1651.31,
                "Expenses": 43314.27,
                "Profit": 35078.29
            },
            {
                "date": "2023-07",
                "Revenue": 13841.99,
                "Expenses": 11674.28,
                "Profit": 27467.21
            },
            {
                "date": "2023-06",
                "Revenue": 13445.45,
                "Expenses": 26098.69,
                "Profit": 44419.2
            },
            {
                "date": "2023-05",
                "Revenue": 1575.79,
                "Expenses": 21909.52,
                "Profit": 36916.25
            },
            {
                "date": "2023-04",
                "Revenue": 6388.47,
                "Expenses": 15108.93,
                "Profit": 28977.02
            },
            {
                "date": "2023-03",
                "Revenue": 6806.36,
                "Expenses": 42471.77,
                "Profit": 29378.09
            },
            {
                "date": "2023-02",
                "Revenue": 23197.06,
                "Expenses": 23734.28,
                "Profit": 4897.61
            },
            {
                "date": "2023-01",
                "Revenue": 3604.05,
                "Expenses": 6490.98,
                "Profit": 46811.55
            },
            {
                "date": "2022-12",
                "Revenue": 21220.53,
                "Expenses": 16016.03,
                "Profit": 44583.04
            },
            {
                "date": "2022-11",
                "Revenue": 41409.65,
                "Expenses": 22575.92,
                "Profit": 4038.3
            },
            {
                "date": "2022-10",
                "Revenue": 5692.98,
                "Expenses": 23678.58,
                "Profit": 49103.43
            },
            {
                "date": "2022-09",
                "Revenue": 23404.43,
                "Expenses": 20054.74,
                "Profit": 23385.34
            },
            {
                "date": "2022-08",
                "Revenue": 4292.39,
                "Expenses": 15868.06,
                "Profit": 17880.37
            },
            {
                "date": "2022-07",
                "Revenue": 26414.6,
                "Expenses": 32130.68,
                "Profit": 18879.65
            },
            {
                "date": "2022-06",
                "Revenue": 1791.7,
                "Expenses": 33430.37,
                "Profit": 10179.23
            },
            {
                "date": "2022-05",
                "Revenue": 10501.89,
                "Expenses": 24403.07,
                "Profit": 21550.09
            },
            {
                "date": "2022-04",
                "Revenue": 24810.8,
                "Expenses": 47277.98,
                "Profit": 7611.55
            },
            {
                "date": "2022-03",
                "Revenue": 34293.97,
                "Expenses": 9235.35,
                "Profit": 43697.41
            },
            {
                "date": "2022-02",
                "Revenue": 29748.85,
                "Expenses": 30997.63,
                "Profit": 43808.33
            },
            {
                "date": "2022-01",
                "Revenue": 38984.92,
                "Expenses": 11364.08,
                "Profit": 35909.6
            },
            {
                "date": "2021-12",
                "Revenue": 28033.85,
                "Expenses": 8912.28,
                "Profit": 17997.59
            }
        ]
    },
    {
        "id": 13,
        "company": "SportFit 13",
        "industry": "Media",
        "location": "Tokyo",
        "employee_count": 4348,
        "year_founded": 2007,
        "status": "Pending",
        "region": "Europe",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 47553.23,
                "Expenses": 29674.58,
                "Profit": 48270.71
            },
            {
                "date": "2023-10",
                "Revenue": 29631.03,
                "Expenses": 15014.94,
                "Profit": 14093.96
            },
            {
                "date": "2023-09",
                "Revenue": 16941.53,
                "Expenses": 35575.39,
                "Profit": 36194.81
            },
            {
                "date": "2023-08",
                "Revenue": 18406.57,
                "Expenses": 27579.48,
                "Profit": 33351.8
            },
            {
                "date": "2023-07",
                "Revenue": 24920.88,
                "Expenses": 36415.66,
                "Profit": 49509.77
            },
            {
                "date": "2023-06",
                "Revenue": 4509.41,
                "Expenses": 23346.33,
                "Profit": 9941.9
            },
            {
                "date": "2023-05",
                "Revenue": 29840.93,
                "Expenses": 27289.08,
                "Profit": 49275.2
            },
            {
                "date": "2023-04",
                "Revenue": 41783.63,
                "Expenses": 2752.19,
                "Profit": 34288.65
            },
            {
                "date": "2023-03",
                "Revenue": 32317.98,
                "Expenses": 47088.62,
                "Profit": 43751.46
            },
            {
                "date": "2023-02",
                "Revenue": 5108.33,
                "Expenses": 12177.24,
                "Profit": 13013.22
            },
            {
                "date": "2023-01",
                "Revenue": 8320.63,
                "Expenses": 42575.78,
                "Profit": 48363.08
            },
            {
                "date": "2022-12",
                "Revenue": 45385.39,
                "Expenses": 13543.47,
                "Profit": 18592.78
            },
            {
                "date": "2022-11",
                "Revenue": 6589.46,
                "Expenses": 9937.95,
                "Profit": 40830.81
            },
            {
                "date": "2022-10",
                "Revenue": 26062.4,
                "Expenses": 25785.9,
                "Profit": 13613.36
            },
            {
                "date": "2022-09",
                "Revenue": 3266.24,
                "Expenses": 1103.38,
                "Profit": 27550.73
            },
            {
                "date": "2022-08",
                "Revenue": 42627.43,
                "Expenses": 19908.69,
                "Profit": 25462.14
            },
            {
                "date": "2022-07",
                "Revenue": 32022.19,
                "Expenses": 25542.23,
                "Profit": 45074.11
            },
            {
                "date": "2022-06",
                "Revenue": 40403.94,
                "Expenses": 2886.96,
                "Profit": 31830.82
            },
            {
                "date": "2022-05",
                "Revenue": 25269.58,
                "Expenses": 37443.28,
                "Profit": 41911.22
            },
            {
                "date": "2022-04",
                "Revenue": 19515.08,
                "Expenses": 13739.49,
                "Profit": 10260.24
            },
            {
                "date": "2022-03",
                "Revenue": 24535.33,
                "Expenses": 5998.13,
                "Profit": 23785.99
            },
            {
                "date": "2022-02",
                "Revenue": 2205.58,
                "Expenses": 28916.44,
                "Profit": 24850.37
            },
            {
                "date": "2022-01",
                "Revenue": 39246.93,
                "Expenses": 35725.71,
                "Profit": 34946.58
            },
            {
                "date": "2021-12",
                "Revenue": 35316.14,
                "Expenses": 46581.74,
                "Profit": 19974.74
            }
        ]
    },
    {
        "id": 14,
        "company": "AutoDrive 14",
        "industry": "Fitness",
        "location": "Dubai",
        "employee_count": 133,
        "year_founded": 2014,
        "status": "Inactive",
        "region": "Asia",
        "sector": "Education",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 28286.98,
                "Expenses": 18377.34,
                "Profit": 13454.97
            },
            {
                "date": "2023-10",
                "Revenue": 1964.5,
                "Expenses": 5700.33,
                "Profit": 17991.03
            },
            {
                "date": "2023-09",
                "Revenue": 31091.42,
                "Expenses": 14009.42,
                "Profit": 31516.87
            },
            {
                "date": "2023-08",
                "Revenue": 26944.47,
                "Expenses": 20435.73,
                "Profit": 26143.62
            },
            {
                "date": "2023-07",
                "Revenue": 2564.02,
                "Expenses": 33510.03,
                "Profit": 46785.43
            },
            {
                "date": "2023-06",
                "Revenue": 11873.37,
                "Expenses": 28474.41,
                "Profit": 31469.78
            },
            {
                "date": "2023-05",
                "Revenue": 1644.62,
                "Expenses": 36386.79,
                "Profit": 16129.26
            },
            {
                "date": "2023-04",
                "Revenue": 34491.71,
                "Expenses": 23765.52,
                "Profit": 16130.05
            },
            {
                "date": "2023-03",
                "Revenue": 30787.25,
                "Expenses": 45292.99,
                "Profit": 28542.46
            },
            {
                "date": "2023-02",
                "Revenue": 19845.89,
                "Expenses": 23351.04,
                "Profit": 43911.82
            },
            {
                "date": "2023-01",
                "Revenue": 38584.86,
                "Expenses": 34451.14,
                "Profit": 16639.1
            },
            {
                "date": "2022-12",
                "Revenue": 22171.3,
                "Expenses": 38130.87,
                "Profit": 15488.34
            },
            {
                "date": "2022-11",
                "Revenue": 10571.06,
                "Expenses": 15835.13,
                "Profit": 27509.03
            },
            {
                "date": "2022-10",
                "Revenue": 36001.48,
                "Expenses": 1241.4,
                "Profit": 4969.01
            },
            {
                "date": "2022-09",
                "Revenue": 17318.22,
                "Expenses": 37492.83,
                "Profit": 19930.58
            },
            {
                "date": "2022-08",
                "Revenue": 24454.42,
                "Expenses": 13711.6,
                "Profit": 22030.45
            },
            {
                "date": "2022-07",
                "Revenue": 8203.02,
                "Expenses": 29048.8,
                "Profit": 5905.28
            },
            {
                "date": "2022-06",
                "Revenue": 13901.4,
                "Expenses": 13152.53,
                "Profit": 21521.69
            },
            {
                "date": "2022-05",
                "Revenue": 31663.91,
                "Expenses": 32840.48,
                "Profit": 14252.45
            },
            {
                "date": "2022-04",
                "Revenue": 32538.46,
                "Expenses": 12903.14,
                "Profit": 13339.5
            },
            {
                "date": "2022-03",
                "Revenue": 6042.46,
                "Expenses": 14136.76,
                "Profit": 24687.33
            },
            {
                "date": "2022-02",
                "Revenue": 21161.03,
                "Expenses": 6977.11,
                "Profit": 40882.24
            },
            {
                "date": "2022-01",
                "Revenue": 9492.29,
                "Expenses": 12410.89,
                "Profit": 26775.48
            },
            {
                "date": "2021-12",
                "Revenue": 20383.72,
                "Expenses": 29790.72,
                "Profit": 15787.7
            }
        ]
    },
    {
        "id": 15,
        "company": "TechCorp 15",
        "industry": "Healthcare",
        "location": "Dubai",
        "employee_count": 4926,
        "year_founded": 1991,
        "status": "Pending",
        "region": "South America",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 43692.17,
                "Expenses": 11244.96,
                "Profit": 18114.43
            },
            {
                "date": "2023-10",
                "Revenue": 40559.65,
                "Expenses": 29899.25,
                "Profit": 7077.45
            },
            {
                "date": "2023-09",
                "Revenue": 47824.39,
                "Expenses": 16491.81,
                "Profit": 35836.15
            },
            {
                "date": "2023-08",
                "Revenue": 46536.56,
                "Expenses": 30542.76,
                "Profit": 15532.13
            },
            {
                "date": "2023-07",
                "Revenue": 21652.69,
                "Expenses": 38423.62,
                "Profit": 31792.96
            },
            {
                "date": "2023-06",
                "Revenue": 22954.38,
                "Expenses": 25720.16,
                "Profit": 20219.32
            },
            {
                "date": "2023-05",
                "Revenue": 40327.01,
                "Expenses": 14823.15,
                "Profit": 13403.39
            },
            {
                "date": "2023-04",
                "Revenue": 14252.0,
                "Expenses": 24983.26,
                "Profit": 3614.91
            },
            {
                "date": "2023-03",
                "Revenue": 47385.29,
                "Expenses": 25443.85,
                "Profit": 22579.57
            },
            {
                "date": "2023-02",
                "Revenue": 46937.89,
                "Expenses": 7494.19,
                "Profit": 32815.48
            },
            {
                "date": "2023-01",
                "Revenue": 46215.4,
                "Expenses": 13115.53,
                "Profit": 32225.72
            },
            {
                "date": "2022-12",
                "Revenue": 22979.09,
                "Expenses": 20654.44,
                "Profit": 11514.18
            },
            {
                "date": "2022-11",
                "Revenue": 30053.43,
                "Expenses": 49140.31,
                "Profit": 25657.26
            },
            {
                "date": "2022-10",
                "Revenue": 21285.05,
                "Expenses": 30085.93,
                "Profit": 45650.58
            },
            {
                "date": "2022-09",
                "Revenue": 42785.68,
                "Expenses": 22898.97,
                "Profit": 12865.15
            },
            {
                "date": "2022-08",
                "Revenue": 30723.41,
                "Expenses": 4842.08,
                "Profit": 11577.29
            },
            {
                "date": "2022-07",
                "Revenue": 10412.94,
                "Expenses": 39686.53,
                "Profit": 44620.14
            },
            {
                "date": "2022-06",
                "Revenue": 33916.54,
                "Expenses": 17331.29,
                "Profit": 42095.55
            },
            {
                "date": "2022-05",
                "Revenue": 48856.42,
                "Expenses": 15915.33,
                "Profit": 33500.5
            },
            {
                "date": "2022-04",
                "Revenue": 23214.83,
                "Expenses": 9979.63,
                "Profit": 30787.49
            },
            {
                "date": "2022-03",
                "Revenue": 12668.52,
                "Expenses": 38376.03,
                "Profit": 29568.98
            },
            {
                "date": "2022-02",
                "Revenue": 33839.3,
                "Expenses": 6041.11,
                "Profit": 6058.77
            },
            {
                "date": "2022-01",
                "Revenue": 16365.04,
                "Expenses": 22334.78,
                "Profit": 19982.62
            },
            {
                "date": "2021-12",
                "Revenue": 45272.31,
                "Expenses": 7147.58,
                "Profit": 17780.23
            }
        ]
    },
    {
        "id": 16,
        "company": "TechCorp 16",
        "industry": "Fitness",
        "location": "New York",
        "employee_count": 1052,
        "year_founded": 1994,
        "status": "Active",
        "region": "Africa",
        "sector": "Food",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 29401.25,
                "Expenses": 12379.56,
                "Profit": 10560.95
            },
            {
                "date": "2023-10",
                "Revenue": 30330.26,
                "Expenses": 42956.29,
                "Profit": 38908.5
            },
            {
                "date": "2023-09",
                "Revenue": 43463.63,
                "Expenses": 16877.83,
                "Profit": 6605.84
            },
            {
                "date": "2023-08",
                "Revenue": 34094.03,
                "Expenses": 13977.28,
                "Profit": 49655.1
            },
            {
                "date": "2023-07",
                "Revenue": 26299.47,
                "Expenses": 17605.2,
                "Profit": 45813.3
            },
            {
                "date": "2023-06",
                "Revenue": 27318.34,
                "Expenses": 46811.22,
                "Profit": 6909.39
            },
            {
                "date": "2023-05",
                "Revenue": 33090.24,
                "Expenses": 48989.81,
                "Profit": 34057.49
            },
            {
                "date": "2023-04",
                "Revenue": 17107.71,
                "Expenses": 30273.24,
                "Profit": 21730.41
            },
            {
                "date": "2023-03",
                "Revenue": 5204.55,
                "Expenses": 29202.6,
                "Profit": 49121.73
            },
            {
                "date": "2023-02",
                "Revenue": 40469.3,
                "Expenses": 47349.12,
                "Profit": 44019.55
            },
            {
                "date": "2023-01",
                "Revenue": 11556.57,
                "Expenses": 49299.57,
                "Profit": 27477.64
            },
            {
                "date": "2022-12",
                "Revenue": 18339.56,
                "Expenses": 6259.21,
                "Profit": 22173.58
            },
            {
                "date": "2022-11",
                "Revenue": 1573.68,
                "Expenses": 47934.82,
                "Profit": 28463.22
            },
            {
                "date": "2022-10",
                "Revenue": 23243.18,
                "Expenses": 1338.93,
                "Profit": 7865.06
            },
            {
                "date": "2022-09",
                "Revenue": 3639.81,
                "Expenses": 18112.26,
                "Profit": 37777.16
            },
            {
                "date": "2022-08",
                "Revenue": 1885.39,
                "Expenses": 15583.9,
                "Profit": 47736.75
            },
            {
                "date": "2022-07",
                "Revenue": 36921.57,
                "Expenses": 8174.26,
                "Profit": 21222.39
            },
            {
                "date": "2022-06",
                "Revenue": 41255.13,
                "Expenses": 8833.91,
                "Profit": 23854.24
            },
            {
                "date": "2022-05",
                "Revenue": 25303.46,
                "Expenses": 48824.44,
                "Profit": 12937.05
            },
            {
                "date": "2022-04",
                "Revenue": 2563.32,
                "Expenses": 13466.95,
                "Profit": 8371.74
            },
            {
                "date": "2022-03",
                "Revenue": 49852.76,
                "Expenses": 7741.52,
                "Profit": 4178.71
            },
            {
                "date": "2022-02",
                "Revenue": 48859.71,
                "Expenses": 43025.27,
                "Profit": 4637.12
            },
            {
                "date": "2022-01",
                "Revenue": 1414.45,
                "Expenses": 31574.41,
                "Profit": 17116.15
            },
            {
                "date": "2021-12",
                "Revenue": 40019.61,
                "Expenses": 11408.7,
                "Profit": 10533.21
            }
        ]
    },
    {
        "id": 17,
        "company": "FinSecure 17",
        "industry": "Education",
        "location": "Tokyo",
        "employee_count": 4258,
        "year_founded": 2015,
        "status": "Active",
        "region": "Australia",
        "sector": "Technology",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 30871.89,
                "Expenses": 6522.0,
                "Profit": 23345.13
            },
            {
                "date": "2023-10",
                "Revenue": 28621.07,
                "Expenses": 22548.08,
                "Profit": 39484.39
            },
            {
                "date": "2023-09",
                "Revenue": 34025.71,
                "Expenses": 5515.79,
                "Profit": 5200.49
            },
            {
                "date": "2023-08",
                "Revenue": 43129.65,
                "Expenses": 9829.54,
                "Profit": 15864.45
            },
            {
                "date": "2023-07",
                "Revenue": 13354.6,
                "Expenses": 27153.63,
                "Profit": 37321.09
            },
            {
                "date": "2023-06",
                "Revenue": 17366.43,
                "Expenses": 30539.6,
                "Profit": 6526.57
            },
            {
                "date": "2023-05",
                "Revenue": 31464.44,
                "Expenses": 2148.41,
                "Profit": 39480.61
            },
            {
                "date": "2023-04",
                "Revenue": 40938.53,
                "Expenses": 39354.34,
                "Profit": 15215.55
            },
            {
                "date": "2023-03",
                "Revenue": 10884.95,
                "Expenses": 15072.09,
                "Profit": 23435.71
            },
            {
                "date": "2023-02",
                "Revenue": 7996.06,
                "Expenses": 28700.3,
                "Profit": 18826.19
            },
            {
                "date": "2023-01",
                "Revenue": 4960.1,
                "Expenses": 18315.99,
                "Profit": 40921.16
            },
            {
                "date": "2022-12",
                "Revenue": 1519.76,
                "Expenses": 44523.71,
                "Profit": 16919.85
            },
            {
                "date": "2022-11",
                "Revenue": 9401.68,
                "Expenses": 7557.27,
                "Profit": 39466.11
            },
            {
                "date": "2022-10",
                "Revenue": 18995.21,
                "Expenses": 10530.62,
                "Profit": 3754.47
            },
            {
                "date": "2022-09",
                "Revenue": 36079.05,
                "Expenses": 16307.41,
                "Profit": 4011.21
            },
            {
                "date": "2022-08",
                "Revenue": 48327.7,
                "Expenses": 30909.87,
                "Profit": 15627.16
            },
            {
                "date": "2022-07",
                "Revenue": 31224.65,
                "Expenses": 49592.25,
                "Profit": 33701.1
            },
            {
                "date": "2022-06",
                "Revenue": 36962.99,
                "Expenses": 26198.13,
                "Profit": 27117.29
            },
            {
                "date": "2022-05",
                "Revenue": 7646.0,
                "Expenses": 41476.38,
                "Profit": 1456.88
            },
            {
                "date": "2022-04",
                "Revenue": 29598.67,
                "Expenses": 36282.67,
                "Profit": 49709.51
            },
            {
                "date": "2022-03",
                "Revenue": 5938.28,
                "Expenses": 46276.85,
                "Profit": 20062.57
            },
            {
                "date": "2022-02",
                "Revenue": 25636.3,
                "Expenses": 45380.69,
                "Profit": 25585.84
            },
            {
                "date": "2022-01",
                "Revenue": 2193.21,
                "Expenses": 4934.02,
                "Profit": 13197.69
            },
            {
                "date": "2021-12",
                "Revenue": 7932.6,
                "Expenses": 40057.62,
                "Profit": 45966.96
            }
        ]
    },
    {
        "id": 18,
        "company": "FoodWorks 18",
        "industry": "Energy",
        "location": "Singapore",
        "employee_count": 2900,
        "year_founded": 1993,
        "status": "Active",
        "region": "North America",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 19939.87,
                "Expenses": 3438.09,
                "Profit": 22088.85
            },
            {
                "date": "2023-10",
                "Revenue": 24509.68,
                "Expenses": 37562.15,
                "Profit": 32605.2
            },
            {
                "date": "2023-09",
                "Revenue": 37173.9,
                "Expenses": 48600.29,
                "Profit": 33488.54
            },
            {
                "date": "2023-08",
                "Revenue": 8720.03,
                "Expenses": 31595.0,
                "Profit": 34101.9
            },
            {
                "date": "2023-07",
                "Revenue": 40216.7,
                "Expenses": 27959.08,
                "Profit": 47055.61
            },
            {
                "date": "2023-06",
                "Revenue": 23647.23,
                "Expenses": 26285.69,
                "Profit": 22027.15
            },
            {
                "date": "2023-05",
                "Revenue": 34370.4,
                "Expenses": 29354.76,
                "Profit": 24521.27
            },
            {
                "date": "2023-04",
                "Revenue": 21771.88,
                "Expenses": 19074.84,
                "Profit": 31620.25
            },
            {
                "date": "2023-03",
                "Revenue": 18464.24,
                "Expenses": 25119.44,
                "Profit": 31309.63
            },
            {
                "date": "2023-02",
                "Revenue": 24796.61,
                "Expenses": 23635.61,
                "Profit": 25358.82
            },
            {
                "date": "2023-01",
                "Revenue": 15299.05,
                "Expenses": 11880.44,
                "Profit": 7274.22
            },
            {
                "date": "2022-12",
                "Revenue": 11400.96,
                "Expenses": 48982.22,
                "Profit": 16500.21
            },
            {
                "date": "2022-11",
                "Revenue": 35182.49,
                "Expenses": 8088.77,
                "Profit": 43068.74
            },
            {
                "date": "2022-10",
                "Revenue": 22428.93,
                "Expenses": 32154.38,
                "Profit": 6365.85
            },
            {
                "date": "2022-09",
                "Revenue": 47965.34,
                "Expenses": 16371.55,
                "Profit": 42292.68
            },
            {
                "date": "2022-08",
                "Revenue": 36498.41,
                "Expenses": 20739.13,
                "Profit": 15193.18
            },
            {
                "date": "2022-07",
                "Revenue": 23019.01,
                "Expenses": 6205.68,
                "Profit": 18054.6
            },
            {
                "date": "2022-06",
                "Revenue": 35027.63,
                "Expenses": 43891.56,
                "Profit": 11654.41
            },
            {
                "date": "2022-05",
                "Revenue": 18115.2,
                "Expenses": 10045.79,
                "Profit": 3421.18
            },
            {
                "date": "2022-04",
                "Revenue": 25622.27,
                "Expenses": 12597.63,
                "Profit": 38375.24
            },
            {
                "date": "2022-03",
                "Revenue": 10540.21,
                "Expenses": 26195.78,
                "Profit": 27189.32
            },
            {
                "date": "2022-02",
                "Revenue": 41827.81,
                "Expenses": 47986.84,
                "Profit": 3063.4
            },
            {
                "date": "2022-01",
                "Revenue": 42310.69,
                "Expenses": 20091.27,
                "Profit": 5850.98
            },
            {
                "date": "2021-12",
                "Revenue": 23677.33,
                "Expenses": 10919.61,
                "Profit": 14828.71
            }
        ]
    },
    {
        "id": 19,
        "company": "FoodWorks 19",
        "industry": "Travel",
        "location": "New York",
        "employee_count": 4518,
        "year_founded": 2010,
        "status": "Active",
        "region": "Europe",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 34211.37,
                "Expenses": 10156.25,
                "Profit": 24155.94
            },
            {
                "date": "2023-10",
                "Revenue": 2776.62,
                "Expenses": 8651.44,
                "Profit": 23138.23
            },
            {
                "date": "2023-09",
                "Revenue": 47892.19,
                "Expenses": 37013.16,
                "Profit": 20817.06
            },
            {
                "date": "2023-08",
                "Revenue": 48600.41,
                "Expenses": 14363.86,
                "Profit": 10759.27
            },
            {
                "date": "2023-07",
                "Revenue": 22603.26,
                "Expenses": 38471.82,
                "Profit": 29127.74
            },
            {
                "date": "2023-06",
                "Revenue": 31683.17,
                "Expenses": 49140.75,
                "Profit": 41518.21
            },
            {
                "date": "2023-05",
                "Revenue": 16701.62,
                "Expenses": 38377.6,
                "Profit": 9781.37
            },
            {
                "date": "2023-04",
                "Revenue": 46518.82,
                "Expenses": 19303.61,
                "Profit": 43257.09
            },
            {
                "date": "2023-03",
                "Revenue": 9691.33,
                "Expenses": 44357.85,
                "Profit": 14644.25
            },
            {
                "date": "2023-02",
                "Revenue": 13483.75,
                "Expenses": 19708.69,
                "Profit": 2470.98
            },
            {
                "date": "2023-01",
                "Revenue": 14658.49,
                "Expenses": 17708.16,
                "Profit": 24922.18
            },
            {
                "date": "2022-12",
                "Revenue": 2869.62,
                "Expenses": 22697.47,
                "Profit": 24946.76
            },
            {
                "date": "2022-11",
                "Revenue": 2221.86,
                "Expenses": 43758.29,
                "Profit": 21783.68
            },
            {
                "date": "2022-10",
                "Revenue": 7301.59,
                "Expenses": 9597.22,
                "Profit": 12837.62
            },
            {
                "date": "2022-09",
                "Revenue": 39093.7,
                "Expenses": 15481.34,
                "Profit": 29629.52
            },
            {
                "date": "2022-08",
                "Revenue": 2636.48,
                "Expenses": 3482.01,
                "Profit": 26352.51
            },
            {
                "date": "2022-07",
                "Revenue": 12447.68,
                "Expenses": 8755.31,
                "Profit": 46625.04
            },
            {
                "date": "2022-06",
                "Revenue": 45449.23,
                "Expenses": 14623.37,
                "Profit": 19943.87
            },
            {
                "date": "2022-05",
                "Revenue": 5888.77,
                "Expenses": 33373.83,
                "Profit": 20051.04
            },
            {
                "date": "2022-04",
                "Revenue": 16778.69,
                "Expenses": 48036.76,
                "Profit": 35799.36
            },
            {
                "date": "2022-03",
                "Revenue": 42638.3,
                "Expenses": 36070.86,
                "Profit": 11992.83
            },
            {
                "date": "2022-02",
                "Revenue": 46904.57,
                "Expenses": 28013.43,
                "Profit": 38691.93
            },
            {
                "date": "2022-01",
                "Revenue": 19274.39,
                "Expenses": 28811.82,
                "Profit": 38284.03
            },
            {
                "date": "2021-12",
                "Revenue": 19779.68,
                "Expenses": 32210.81,
                "Profit": 12263.67
            }
        ]
    },
    {
        "id": 20,
        "company": "GlobalTravel 20",
        "industry": "Food",
        "location": "Dubai",
        "employee_count": 1988,
        "year_founded": 1992,
        "status": "Inactive",
        "region": "Australia",
        "sector": "Technology",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 46763.14,
                "Expenses": 16298.39,
                "Profit": 46076.03
            },
            {
                "date": "2023-10",
                "Revenue": 48632.35,
                "Expenses": 31388.89,
                "Profit": 24196.18
            },
            {
                "date": "2023-09",
                "Revenue": 26372.86,
                "Expenses": 27664.21,
                "Profit": 17880.8
            },
            {
                "date": "2023-08",
                "Revenue": 14923.62,
                "Expenses": 41518.79,
                "Profit": 22638.14
            },
            {
                "date": "2023-07",
                "Revenue": 44335.22,
                "Expenses": 15828.48,
                "Profit": 35644.03
            },
            {
                "date": "2023-06",
                "Revenue": 20382.73,
                "Expenses": 23776.96,
                "Profit": 3846.54
            },
            {
                "date": "2023-05",
                "Revenue": 31513.6,
                "Expenses": 17149.33,
                "Profit": 27427.71
            },
            {
                "date": "2023-04",
                "Revenue": 26598.79,
                "Expenses": 15448.56,
                "Profit": 16344.32
            },
            {
                "date": "2023-03",
                "Revenue": 47804.51,
                "Expenses": 3226.66,
                "Profit": 49643.28
            },
            {
                "date": "2023-02",
                "Revenue": 12924.78,
                "Expenses": 42367.61,
                "Profit": 44412.44
            },
            {
                "date": "2023-01",
                "Revenue": 40304.36,
                "Expenses": 28474.97,
                "Profit": 15100.18
            },
            {
                "date": "2022-12",
                "Revenue": 6353.38,
                "Expenses": 19992.29,
                "Profit": 38408.96
            },
            {
                "date": "2022-11",
                "Revenue": 14512.66,
                "Expenses": 7335.01,
                "Profit": 28817.33
            },
            {
                "date": "2022-10",
                "Revenue": 42818.83,
                "Expenses": 13132.05,
                "Profit": 15529.31
            },
            {
                "date": "2022-09",
                "Revenue": 27248.26,
                "Expenses": 39292.5,
                "Profit": 16632.49
            },
            {
                "date": "2022-08",
                "Revenue": 33873.64,
                "Expenses": 3693.68,
                "Profit": 22369.67
            },
            {
                "date": "2022-07",
                "Revenue": 17855.12,
                "Expenses": 44640.0,
                "Profit": 35548.26
            },
            {
                "date": "2022-06",
                "Revenue": 38090.04,
                "Expenses": 29893.44,
                "Profit": 40903.43
            },
            {
                "date": "2022-05",
                "Revenue": 8712.49,
                "Expenses": 37919.67,
                "Profit": 38140.89
            },
            {
                "date": "2022-04",
                "Revenue": 7739.72,
                "Expenses": 11414.46,
                "Profit": 46210.81
            },
            {
                "date": "2022-03",
                "Revenue": 3104.04,
                "Expenses": 39327.99,
                "Profit": 21081.71
            },
            {
                "date": "2022-02",
                "Revenue": 1937.32,
                "Expenses": 5115.67,
                "Profit": 39382.86
            },
            {
                "date": "2022-01",
                "Revenue": 25089.46,
                "Expenses": 24268.83,
                "Profit": 31697.95
            },
            {
                "date": "2021-12",
                "Revenue": 44952.48,
                "Expenses": 18594.97,
                "Profit": 45041.06
            }
        ]
    },
    {
        "id": 21,
        "company": "GlobalTravel 21",
        "industry": "Media",
        "location": "S\u00e3o Paulo",
        "employee_count": 525,
        "year_founded": 2006,
        "status": "Pending",
        "region": "Australia",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 29051.32,
                "Expenses": 5438.72,
                "Profit": 39147.94
            },
            {
                "date": "2023-10",
                "Revenue": 10801.73,
                "Expenses": 26705.83,
                "Profit": 27465.72
            },
            {
                "date": "2023-09",
                "Revenue": 14606.88,
                "Expenses": 47376.04,
                "Profit": 14632.85
            },
            {
                "date": "2023-08",
                "Revenue": 47625.42,
                "Expenses": 46354.8,
                "Profit": 16474.5
            },
            {
                "date": "2023-07",
                "Revenue": 39899.06,
                "Expenses": 43025.94,
                "Profit": 1001.44
            },
            {
                "date": "2023-06",
                "Revenue": 34609.85,
                "Expenses": 25947.28,
                "Profit": 11462.74
            },
            {
                "date": "2023-05",
                "Revenue": 29082.07,
                "Expenses": 25711.89,
                "Profit": 23014.92
            },
            {
                "date": "2023-04",
                "Revenue": 3219.76,
                "Expenses": 17007.3,
                "Profit": 40731.06
            },
            {
                "date": "2023-03",
                "Revenue": 1643.71,
                "Expenses": 26716.39,
                "Profit": 21964.77
            },
            {
                "date": "2023-02",
                "Revenue": 9660.48,
                "Expenses": 43447.02,
                "Profit": 35589.4
            },
            {
                "date": "2023-01",
                "Revenue": 34415.0,
                "Expenses": 38021.25,
                "Profit": 15907.66
            },
            {
                "date": "2022-12",
                "Revenue": 49813.19,
                "Expenses": 10385.11,
                "Profit": 49355.42
            },
            {
                "date": "2022-11",
                "Revenue": 14197.2,
                "Expenses": 19615.43,
                "Profit": 27551.86
            },
            {
                "date": "2022-10",
                "Revenue": 47054.38,
                "Expenses": 28802.11,
                "Profit": 44972.34
            },
            {
                "date": "2022-09",
                "Revenue": 9160.35,
                "Expenses": 47202.72,
                "Profit": 45631.45
            },
            {
                "date": "2022-08",
                "Revenue": 44068.12,
                "Expenses": 38201.69,
                "Profit": 28248.91
            },
            {
                "date": "2022-07",
                "Revenue": 36902.44,
                "Expenses": 15489.66,
                "Profit": 17716.77
            },
            {
                "date": "2022-06",
                "Revenue": 4015.99,
                "Expenses": 27021.12,
                "Profit": 10833.88
            },
            {
                "date": "2022-05",
                "Revenue": 7741.99,
                "Expenses": 32668.3,
                "Profit": 9738.45
            },
            {
                "date": "2022-04",
                "Revenue": 27211.17,
                "Expenses": 14629.2,
                "Profit": 47037.73
            },
            {
                "date": "2022-03",
                "Revenue": 37410.44,
                "Expenses": 35985.96,
                "Profit": 17892.62
            },
            {
                "date": "2022-02",
                "Revenue": 31883.41,
                "Expenses": 46152.34,
                "Profit": 24347.45
            },
            {
                "date": "2022-01",
                "Revenue": 47955.36,
                "Expenses": 8006.59,
                "Profit": 45323.08
            },
            {
                "date": "2021-12",
                "Revenue": 25366.57,
                "Expenses": 42244.94,
                "Profit": 2876.57
            }
        ]
    },
    {
        "id": 22,
        "company": "FoodWorks 22",
        "industry": "Healthcare",
        "location": "S\u00e3o Paulo",
        "employee_count": 3780,
        "year_founded": 2012,
        "status": "Active",
        "region": "South America",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 6641.49,
                "Expenses": 33116.3,
                "Profit": 7864.57
            },
            {
                "date": "2023-10",
                "Revenue": 1424.8,
                "Expenses": 26469.47,
                "Profit": 6727.59
            },
            {
                "date": "2023-09",
                "Revenue": 3063.37,
                "Expenses": 5219.21,
                "Profit": 7964.95
            },
            {
                "date": "2023-08",
                "Revenue": 10275.92,
                "Expenses": 41696.37,
                "Profit": 18775.99
            },
            {
                "date": "2023-07",
                "Revenue": 6172.47,
                "Expenses": 17227.27,
                "Profit": 5139.85
            },
            {
                "date": "2023-06",
                "Revenue": 29201.38,
                "Expenses": 5483.82,
                "Profit": 47246.86
            },
            {
                "date": "2023-05",
                "Revenue": 18960.22,
                "Expenses": 45357.41,
                "Profit": 37852.11
            },
            {
                "date": "2023-04",
                "Revenue": 39193.85,
                "Expenses": 26554.29,
                "Profit": 22717.38
            },
            {
                "date": "2023-03",
                "Revenue": 25384.99,
                "Expenses": 34377.81,
                "Profit": 5078.85
            },
            {
                "date": "2023-02",
                "Revenue": 20119.86,
                "Expenses": 9090.85,
                "Profit": 15025.25
            },
            {
                "date": "2023-01",
                "Revenue": 36810.8,
                "Expenses": 45438.33,
                "Profit": 34600.4
            },
            {
                "date": "2022-12",
                "Revenue": 11249.86,
                "Expenses": 39178.98,
                "Profit": 2944.45
            },
            {
                "date": "2022-11",
                "Revenue": 8317.12,
                "Expenses": 4367.09,
                "Profit": 34670.11
            },
            {
                "date": "2022-10",
                "Revenue": 44119.84,
                "Expenses": 9085.87,
                "Profit": 2848.44
            },
            {
                "date": "2022-09",
                "Revenue": 25642.01,
                "Expenses": 24530.98,
                "Profit": 24494.8
            },
            {
                "date": "2022-08",
                "Revenue": 29819.6,
                "Expenses": 47294.82,
                "Profit": 27412.1
            },
            {
                "date": "2022-07",
                "Revenue": 16329.3,
                "Expenses": 34782.42,
                "Profit": 6446.43
            },
            {
                "date": "2022-06",
                "Revenue": 10667.02,
                "Expenses": 19953.1,
                "Profit": 8615.56
            },
            {
                "date": "2022-05",
                "Revenue": 38122.39,
                "Expenses": 15494.57,
                "Profit": 27665.03
            },
            {
                "date": "2022-04",
                "Revenue": 18763.13,
                "Expenses": 14957.92,
                "Profit": 13903.48
            },
            {
                "date": "2022-03",
                "Revenue": 2030.47,
                "Expenses": 2030.47,
                "Profit": 41838.95
            },
            {
                "date": "2022-02",
                "Revenue": 28096.59,
                "Expenses": 23250.29,
                "Profit": 37868.03
            },
            {
                "date": "2022-01",
                "Revenue": 13983.74,
                "Expenses": 30914.83,
                "Profit": 49716.66
            },
            {
                "date": "2021-12",
                "Revenue": 47601.95,
                "Expenses": 6620.61,
                "Profit": 34357.48
            }
        ]
    },
    {
        "id": 23,
        "company": "AutoDrive 23",
        "industry": "Finance",
        "location": "Toronto",
        "employee_count": 4490,
        "year_founded": 2005,
        "status": "Active",
        "region": "Asia",
        "sector": "Healthcare",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 43850.31,
                "Expenses": 47194.89,
                "Profit": 15815.58
            },
            {
                "date": "2023-10",
                "Revenue": 46117.07,
                "Expenses": 49162.11,
                "Profit": 39197.27
            },
            {
                "date": "2023-09",
                "Revenue": 23738.45,
                "Expenses": 4518.65,
                "Profit": 14754.16
            },
            {
                "date": "2023-08",
                "Revenue": 7197.46,
                "Expenses": 10263.18,
                "Profit": 48839.13
            },
            {
                "date": "2023-07",
                "Revenue": 31598.14,
                "Expenses": 3277.01,
                "Profit": 23260.43
            },
            {
                "date": "2023-06",
                "Revenue": 29352.58,
                "Expenses": 13073.01,
                "Profit": 29089.18
            },
            {
                "date": "2023-05",
                "Revenue": 16150.26,
                "Expenses": 13085.78,
                "Profit": 36584.79
            },
            {
                "date": "2023-04",
                "Revenue": 36474.14,
                "Expenses": 4291.77,
                "Profit": 9479.9
            },
            {
                "date": "2023-03",
                "Revenue": 7079.93,
                "Expenses": 45574.66,
                "Profit": 10377.16
            },
            {
                "date": "2023-02",
                "Revenue": 47788.21,
                "Expenses": 10186.69,
                "Profit": 34397.98
            },
            {
                "date": "2023-01",
                "Revenue": 22610.49,
                "Expenses": 10971.97,
                "Profit": 15959.81
            },
            {
                "date": "2022-12",
                "Revenue": 4706.44,
                "Expenses": 24504.09,
                "Profit": 9641.11
            },
            {
                "date": "2022-11",
                "Revenue": 48652.2,
                "Expenses": 10706.49,
                "Profit": 28577.14
            },
            {
                "date": "2022-10",
                "Revenue": 36072.29,
                "Expenses": 6445.6,
                "Profit": 19676.82
            },
            {
                "date": "2022-09",
                "Revenue": 21172.71,
                "Expenses": 3918.16,
                "Profit": 38475.7
            },
            {
                "date": "2022-08",
                "Revenue": 31374.85,
                "Expenses": 29719.01,
                "Profit": 34639.02
            },
            {
                "date": "2022-07",
                "Revenue": 26632.19,
                "Expenses": 21107.88,
                "Profit": 43212.57
            },
            {
                "date": "2022-06",
                "Revenue": 45544.04,
                "Expenses": 31406.49,
                "Profit": 30381.98
            },
            {
                "date": "2022-05",
                "Revenue": 28873.69,
                "Expenses": 43262.46,
                "Profit": 42161.14
            },
            {
                "date": "2022-04",
                "Revenue": 24597.26,
                "Expenses": 49989.36,
                "Profit": 3816.63
            },
            {
                "date": "2022-03",
                "Revenue": 17791.81,
                "Expenses": 49916.98,
                "Profit": 3429.64
            },
            {
                "date": "2022-02",
                "Revenue": 45721.51,
                "Expenses": 19942.38,
                "Profit": 28241.93
            },
            {
                "date": "2022-01",
                "Revenue": 8029.58,
                "Expenses": 14701.94,
                "Profit": 8636.65
            },
            {
                "date": "2021-12",
                "Revenue": 38237.39,
                "Expenses": 23226.22,
                "Profit": 35943.42
            }
        ]
    },
    {
        "id": 24,
        "company": "GreenEnergy 24",
        "industry": "Food",
        "location": "San Francisco",
        "employee_count": 3308,
        "year_founded": 1999,
        "status": "Pending",
        "region": "Asia",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 37741.04,
                "Expenses": 43241.93,
                "Profit": 3691.41
            },
            {
                "date": "2023-10",
                "Revenue": 38406.99,
                "Expenses": 16218.05,
                "Profit": 37701.96
            },
            {
                "date": "2023-09",
                "Revenue": 34620.46,
                "Expenses": 49267.18,
                "Profit": 36152.63
            },
            {
                "date": "2023-08",
                "Revenue": 7052.44,
                "Expenses": 18622.38,
                "Profit": 34693.87
            },
            {
                "date": "2023-07",
                "Revenue": 17066.4,
                "Expenses": 11890.56,
                "Profit": 30427.7
            },
            {
                "date": "2023-06",
                "Revenue": 12079.27,
                "Expenses": 11462.37,
                "Profit": 23406.94
            },
            {
                "date": "2023-05",
                "Revenue": 46934.19,
                "Expenses": 11330.63,
                "Profit": 41787.02
            },
            {
                "date": "2023-04",
                "Revenue": 46087.64,
                "Expenses": 23054.27,
                "Profit": 19231.15
            },
            {
                "date": "2023-03",
                "Revenue": 10531.06,
                "Expenses": 14337.43,
                "Profit": 30480.28
            },
            {
                "date": "2023-02",
                "Revenue": 9820.17,
                "Expenses": 7838.33,
                "Profit": 8027.11
            },
            {
                "date": "2023-01",
                "Revenue": 39625.92,
                "Expenses": 30396.4,
                "Profit": 23717.2
            },
            {
                "date": "2022-12",
                "Revenue": 10607.24,
                "Expenses": 5324.98,
                "Profit": 22611.55
            },
            {
                "date": "2022-11",
                "Revenue": 13810.09,
                "Expenses": 23862.7,
                "Profit": 10148.28
            },
            {
                "date": "2022-10",
                "Revenue": 16215.36,
                "Expenses": 29708.43,
                "Profit": 39291.07
            },
            {
                "date": "2022-09",
                "Revenue": 22450.18,
                "Expenses": 36026.59,
                "Profit": 32604.13
            },
            {
                "date": "2022-08",
                "Revenue": 41374.82,
                "Expenses": 8661.73,
                "Profit": 35801.84
            },
            {
                "date": "2022-07",
                "Revenue": 26508.41,
                "Expenses": 47603.87,
                "Profit": 36079.67
            },
            {
                "date": "2022-06",
                "Revenue": 5666.87,
                "Expenses": 23540.18,
                "Profit": 43312.68
            },
            {
                "date": "2022-05",
                "Revenue": 36438.39,
                "Expenses": 46494.69,
                "Profit": 17559.76
            },
            {
                "date": "2022-04",
                "Revenue": 38108.87,
                "Expenses": 47865.02,
                "Profit": 44685.96
            },
            {
                "date": "2022-03",
                "Revenue": 15665.87,
                "Expenses": 1522.66,
                "Profit": 4477.6
            },
            {
                "date": "2022-02",
                "Revenue": 5522.22,
                "Expenses": 14500.08,
                "Profit": 20206.66
            },
            {
                "date": "2022-01",
                "Revenue": 46783.11,
                "Expenses": 45683.48,
                "Profit": 3915.94
            },
            {
                "date": "2021-12",
                "Revenue": 37680.73,
                "Expenses": 43427.82,
                "Profit": 46147.62
            }
        ]
    },
    {
        "id": 25,
        "company": "AutoDrive 25",
        "industry": "Media",
        "location": "London",
        "employee_count": 4546,
        "year_founded": 1998,
        "status": "Active",
        "region": "Africa",
        "sector": "Healthcare",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 34516.83,
                "Expenses": 27134.88,
                "Profit": 36528.28
            },
            {
                "date": "2023-10",
                "Revenue": 25207.0,
                "Expenses": 29758.77,
                "Profit": 37615.69
            },
            {
                "date": "2023-09",
                "Revenue": 9680.29,
                "Expenses": 33930.94,
                "Profit": 28506.21
            },
            {
                "date": "2023-08",
                "Revenue": 28422.29,
                "Expenses": 30503.1,
                "Profit": 33344.67
            },
            {
                "date": "2023-07",
                "Revenue": 32370.44,
                "Expenses": 28648.52,
                "Profit": 10430.41
            },
            {
                "date": "2023-06",
                "Revenue": 25714.06,
                "Expenses": 2093.95,
                "Profit": 15960.69
            },
            {
                "date": "2023-05",
                "Revenue": 14143.41,
                "Expenses": 29238.46,
                "Profit": 21182.62
            },
            {
                "date": "2023-04",
                "Revenue": 43409.32,
                "Expenses": 39615.26,
                "Profit": 39746.88
            },
            {
                "date": "2023-03",
                "Revenue": 35563.16,
                "Expenses": 19951.87,
                "Profit": 39134.88
            },
            {
                "date": "2023-02",
                "Revenue": 29290.17,
                "Expenses": 44197.78,
                "Profit": 25306.65
            },
            {
                "date": "2023-01",
                "Revenue": 29250.47,
                "Expenses": 29085.65,
                "Profit": 10552.84
            },
            {
                "date": "2022-12",
                "Revenue": 8091.96,
                "Expenses": 22005.98,
                "Profit": 13049.56
            },
            {
                "date": "2022-11",
                "Revenue": 7272.35,
                "Expenses": 15400.69,
                "Profit": 47563.24
            },
            {
                "date": "2022-10",
                "Revenue": 37001.59,
                "Expenses": 13643.21,
                "Profit": 41273.85
            },
            {
                "date": "2022-09",
                "Revenue": 28901.92,
                "Expenses": 46867.11,
                "Profit": 26821.13
            },
            {
                "date": "2022-08",
                "Revenue": 26361.87,
                "Expenses": 3633.75,
                "Profit": 14941.57
            },
            {
                "date": "2022-07",
                "Revenue": 11189.92,
                "Expenses": 12297.69,
                "Profit": 9170.73
            },
            {
                "date": "2022-06",
                "Revenue": 25614.52,
                "Expenses": 9425.3,
                "Profit": 49340.93
            },
            {
                "date": "2022-05",
                "Revenue": 32044.44,
                "Expenses": 25234.28,
                "Profit": 5437.8
            },
            {
                "date": "2022-04",
                "Revenue": 2653.21,
                "Expenses": 43651.57,
                "Profit": 39683.84
            },
            {
                "date": "2022-03",
                "Revenue": 34346.83,
                "Expenses": 7261.53,
                "Profit": 42626.16
            },
            {
                "date": "2022-02",
                "Revenue": 42807.84,
                "Expenses": 7015.08,
                "Profit": 49586.33
            },
            {
                "date": "2022-01",
                "Revenue": 46112.66,
                "Expenses": 33833.98,
                "Profit": 5742.6
            },
            {
                "date": "2021-12",
                "Revenue": 13754.21,
                "Expenses": 7715.41,
                "Profit": 35244.47
            }
        ]
    },
    {
        "id": 26,
        "company": "FoodWorks 26",
        "industry": "Energy",
        "location": "Berlin",
        "employee_count": 145,
        "year_founded": 2004,
        "status": "Pending",
        "region": "Asia",
        "sector": "Healthcare",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 21319.3,
                "Expenses": 41490.98,
                "Profit": 35092.02
            },
            {
                "date": "2023-10",
                "Revenue": 43924.26,
                "Expenses": 7037.02,
                "Profit": 11210.93
            },
            {
                "date": "2023-09",
                "Revenue": 9316.52,
                "Expenses": 21106.11,
                "Profit": 47900.79
            },
            {
                "date": "2023-08",
                "Revenue": 13798.13,
                "Expenses": 20218.79,
                "Profit": 13145.12
            },
            {
                "date": "2023-07",
                "Revenue": 27526.54,
                "Expenses": 20753.71,
                "Profit": 46387.1
            },
            {
                "date": "2023-06",
                "Revenue": 40496.43,
                "Expenses": 8150.73,
                "Profit": 29070.95
            },
            {
                "date": "2023-05",
                "Revenue": 35451.95,
                "Expenses": 2670.67,
                "Profit": 25650.62
            },
            {
                "date": "2023-04",
                "Revenue": 43477.02,
                "Expenses": 21572.58,
                "Profit": 33398.77
            },
            {
                "date": "2023-03",
                "Revenue": 5821.91,
                "Expenses": 5917.18,
                "Profit": 5922.41
            },
            {
                "date": "2023-02",
                "Revenue": 36628.73,
                "Expenses": 33851.13,
                "Profit": 45170.15
            },
            {
                "date": "2023-01",
                "Revenue": 6332.46,
                "Expenses": 22403.21,
                "Profit": 37347.79
            },
            {
                "date": "2022-12",
                "Revenue": 18383.56,
                "Expenses": 45789.56,
                "Profit": 27907.07
            },
            {
                "date": "2022-11",
                "Revenue": 14782.72,
                "Expenses": 25271.83,
                "Profit": 45382.76
            },
            {
                "date": "2022-10",
                "Revenue": 40600.99,
                "Expenses": 3791.78,
                "Profit": 35628.44
            },
            {
                "date": "2022-09",
                "Revenue": 45363.49,
                "Expenses": 27589.0,
                "Profit": 7369.5
            },
            {
                "date": "2022-08",
                "Revenue": 25229.15,
                "Expenses": 47157.89,
                "Profit": 31851.85
            },
            {
                "date": "2022-07",
                "Revenue": 2946.55,
                "Expenses": 42602.61,
                "Profit": 3905.93
            },
            {
                "date": "2022-06",
                "Revenue": 45504.33,
                "Expenses": 16860.34,
                "Profit": 8810.06
            },
            {
                "date": "2022-05",
                "Revenue": 39462.23,
                "Expenses": 48696.48,
                "Profit": 23569.0
            },
            {
                "date": "2022-04",
                "Revenue": 15541.45,
                "Expenses": 1202.35,
                "Profit": 8146.59
            },
            {
                "date": "2022-03",
                "Revenue": 18963.83,
                "Expenses": 15944.75,
                "Profit": 45846.8
            },
            {
                "date": "2022-02",
                "Revenue": 6698.85,
                "Expenses": 45351.91,
                "Profit": 27510.51
            },
            {
                "date": "2022-01",
                "Revenue": 26651.29,
                "Expenses": 7550.51,
                "Profit": 4609.07
            },
            {
                "date": "2021-12",
                "Revenue": 19355.51,
                "Expenses": 8661.17,
                "Profit": 32456.95
            }
        ]
    },
    {
        "id": 27,
        "company": "TechCorp 27",
        "industry": "Energy",
        "location": "London",
        "employee_count": 760,
        "year_founded": 2013,
        "status": "Inactive",
        "region": "Asia",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 14870.34,
                "Expenses": 19949.16,
                "Profit": 12852.11
            },
            {
                "date": "2023-10",
                "Revenue": 5596.7,
                "Expenses": 13576.64,
                "Profit": 49599.86
            },
            {
                "date": "2023-09",
                "Revenue": 11480.22,
                "Expenses": 34034.4,
                "Profit": 41103.02
            },
            {
                "date": "2023-08",
                "Revenue": 5968.05,
                "Expenses": 40765.47,
                "Profit": 24878.31
            },
            {
                "date": "2023-07",
                "Revenue": 26914.76,
                "Expenses": 25470.92,
                "Profit": 48481.72
            },
            {
                "date": "2023-06",
                "Revenue": 43968.93,
                "Expenses": 1254.77,
                "Profit": 21216.39
            },
            {
                "date": "2023-05",
                "Revenue": 13137.69,
                "Expenses": 2215.51,
                "Profit": 41067.88
            },
            {
                "date": "2023-04",
                "Revenue": 45618.56,
                "Expenses": 12425.32,
                "Profit": 2934.6
            },
            {
                "date": "2023-03",
                "Revenue": 14176.69,
                "Expenses": 21662.04,
                "Profit": 27464.3
            },
            {
                "date": "2023-02",
                "Revenue": 24118.76,
                "Expenses": 33027.15,
                "Profit": 34959.72
            },
            {
                "date": "2023-01",
                "Revenue": 43718.48,
                "Expenses": 48716.74,
                "Profit": 10010.45
            },
            {
                "date": "2022-12",
                "Revenue": 3992.49,
                "Expenses": 38347.36,
                "Profit": 3282.79
            },
            {
                "date": "2022-11",
                "Revenue": 2903.84,
                "Expenses": 6470.63,
                "Profit": 29119.69
            },
            {
                "date": "2022-10",
                "Revenue": 28643.5,
                "Expenses": 15484.91,
                "Profit": 18971.45
            },
            {
                "date": "2022-09",
                "Revenue": 20595.96,
                "Expenses": 49955.79,
                "Profit": 20976.15
            },
            {
                "date": "2022-08",
                "Revenue": 8385.04,
                "Expenses": 48412.56,
                "Profit": 4695.25
            },
            {
                "date": "2022-07",
                "Revenue": 22822.9,
                "Expenses": 8799.72,
                "Profit": 38855.76
            },
            {
                "date": "2022-06",
                "Revenue": 41179.61,
                "Expenses": 30038.96,
                "Profit": 4541.24
            },
            {
                "date": "2022-05",
                "Revenue": 40437.99,
                "Expenses": 42829.0,
                "Profit": 28582.35
            },
            {
                "date": "2022-04",
                "Revenue": 43431.06,
                "Expenses": 36544.1,
                "Profit": 20793.21
            },
            {
                "date": "2022-03",
                "Revenue": 7521.16,
                "Expenses": 15293.62,
                "Profit": 27365.08
            },
            {
                "date": "2022-02",
                "Revenue": 34641.88,
                "Expenses": 28630.53,
                "Profit": 22991.08
            },
            {
                "date": "2022-01",
                "Revenue": 25164.42,
                "Expenses": 6184.31,
                "Profit": 40138.66
            },
            {
                "date": "2021-12",
                "Revenue": 34502.54,
                "Expenses": 27152.51,
                "Profit": 18586.17
            }
        ]
    },
    {
        "id": 28,
        "company": "GlobalTravel 28",
        "industry": "Food",
        "location": "S\u00e3o Paulo",
        "employee_count": 2269,
        "year_founded": 1993,
        "status": "Pending",
        "region": "Africa",
        "sector": "Travel",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 2896.85,
                "Expenses": 31177.12,
                "Profit": 1317.35
            },
            {
                "date": "2023-10",
                "Revenue": 41514.63,
                "Expenses": 3333.87,
                "Profit": 48145.85
            },
            {
                "date": "2023-09",
                "Revenue": 19315.39,
                "Expenses": 32726.66,
                "Profit": 10301.05
            },
            {
                "date": "2023-08",
                "Revenue": 20708.97,
                "Expenses": 1797.01,
                "Profit": 28844.88
            },
            {
                "date": "2023-07",
                "Revenue": 48931.05,
                "Expenses": 45580.94,
                "Profit": 8601.04
            },
            {
                "date": "2023-06",
                "Revenue": 13283.97,
                "Expenses": 43798.8,
                "Profit": 25145.56
            },
            {
                "date": "2023-05",
                "Revenue": 17559.24,
                "Expenses": 3388.3,
                "Profit": 28211.59
            },
            {
                "date": "2023-04",
                "Revenue": 49718.73,
                "Expenses": 41465.97,
                "Profit": 3042.19
            },
            {
                "date": "2023-03",
                "Revenue": 45594.77,
                "Expenses": 23232.35,
                "Profit": 1830.31
            },
            {
                "date": "2023-02",
                "Revenue": 9899.79,
                "Expenses": 19518.55,
                "Profit": 38386.05
            },
            {
                "date": "2023-01",
                "Revenue": 34769.14,
                "Expenses": 10941.37,
                "Profit": 1888.32
            },
            {
                "date": "2022-12",
                "Revenue": 6887.0,
                "Expenses": 15778.54,
                "Profit": 2208.99
            },
            {
                "date": "2022-11",
                "Revenue": 18863.4,
                "Expenses": 7820.79,
                "Profit": 36877.37
            },
            {
                "date": "2022-10",
                "Revenue": 19708.83,
                "Expenses": 19814.43,
                "Profit": 8868.12
            },
            {
                "date": "2022-09",
                "Revenue": 48289.95,
                "Expenses": 38808.51,
                "Profit": 2760.45
            },
            {
                "date": "2022-08",
                "Revenue": 17106.65,
                "Expenses": 12085.1,
                "Profit": 32661.68
            },
            {
                "date": "2022-07",
                "Revenue": 44466.08,
                "Expenses": 19899.61,
                "Profit": 39008.12
            },
            {
                "date": "2022-06",
                "Revenue": 33732.96,
                "Expenses": 40681.98,
                "Profit": 5122.78
            },
            {
                "date": "2022-05",
                "Revenue": 11847.58,
                "Expenses": 35144.2,
                "Profit": 31209.59
            },
            {
                "date": "2022-04",
                "Revenue": 27546.8,
                "Expenses": 5226.05,
                "Profit": 35362.31
            },
            {
                "date": "2022-03",
                "Revenue": 11069.55,
                "Expenses": 19651.68,
                "Profit": 1773.97
            },
            {
                "date": "2022-02",
                "Revenue": 15761.37,
                "Expenses": 21607.59,
                "Profit": 33251.19
            },
            {
                "date": "2022-01",
                "Revenue": 31043.28,
                "Expenses": 23289.03,
                "Profit": 38394.69
            },
            {
                "date": "2021-12",
                "Revenue": 26839.27,
                "Expenses": 14254.38,
                "Profit": 45564.53
            }
        ]
    },
    {
        "id": 29,
        "company": "SportFit 29",
        "industry": "Automotive",
        "location": "Toronto",
        "employee_count": 4948,
        "year_founded": 2015,
        "status": "Inactive",
        "region": "Asia",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 30888.99,
                "Expenses": 43167.34,
                "Profit": 7964.74
            },
            {
                "date": "2023-10",
                "Revenue": 34159.85,
                "Expenses": 6859.98,
                "Profit": 12373.61
            },
            {
                "date": "2023-09",
                "Revenue": 20749.79,
                "Expenses": 41719.9,
                "Profit": 46624.05
            },
            {
                "date": "2023-08",
                "Revenue": 41318.54,
                "Expenses": 21342.57,
                "Profit": 43037.03
            },
            {
                "date": "2023-07",
                "Revenue": 30311.92,
                "Expenses": 47992.69,
                "Profit": 20445.06
            },
            {
                "date": "2023-06",
                "Revenue": 47884.34,
                "Expenses": 2783.67,
                "Profit": 49276.51
            },
            {
                "date": "2023-05",
                "Revenue": 17250.14,
                "Expenses": 48623.78,
                "Profit": 25714.97
            },
            {
                "date": "2023-04",
                "Revenue": 37671.14,
                "Expenses": 6807.47,
                "Profit": 37328.9
            },
            {
                "date": "2023-03",
                "Revenue": 17502.94,
                "Expenses": 17442.4,
                "Profit": 16835.66
            },
            {
                "date": "2023-02",
                "Revenue": 1706.74,
                "Expenses": 36775.58,
                "Profit": 2243.01
            },
            {
                "date": "2023-01",
                "Revenue": 8325.17,
                "Expenses": 46623.13,
                "Profit": 42069.48
            },
            {
                "date": "2022-12",
                "Revenue": 37120.36,
                "Expenses": 13272.04,
                "Profit": 43127.1
            },
            {
                "date": "2022-11",
                "Revenue": 27381.53,
                "Expenses": 49073.51,
                "Profit": 41152.17
            },
            {
                "date": "2022-10",
                "Revenue": 4804.96,
                "Expenses": 3430.92,
                "Profit": 16617.02
            },
            {
                "date": "2022-09",
                "Revenue": 17767.48,
                "Expenses": 8263.08,
                "Profit": 47229.51
            },
            {
                "date": "2022-08",
                "Revenue": 13799.58,
                "Expenses": 14463.3,
                "Profit": 49188.8
            },
            {
                "date": "2022-07",
                "Revenue": 17391.59,
                "Expenses": 46221.3,
                "Profit": 8497.84
            },
            {
                "date": "2022-06",
                "Revenue": 7800.4,
                "Expenses": 49750.37,
                "Profit": 37134.45
            },
            {
                "date": "2022-05",
                "Revenue": 1497.56,
                "Expenses": 26222.98,
                "Profit": 2290.68
            },
            {
                "date": "2022-04",
                "Revenue": 28461.52,
                "Expenses": 6101.35,
                "Profit": 48915.06
            },
            {
                "date": "2022-03",
                "Revenue": 27266.0,
                "Expenses": 1895.87,
                "Profit": 22776.49
            },
            {
                "date": "2022-02",
                "Revenue": 46142.4,
                "Expenses": 42018.04,
                "Profit": 28669.45
            },
            {
                "date": "2022-01",
                "Revenue": 42330.25,
                "Expenses": 34814.53,
                "Profit": 18303.5
            },
            {
                "date": "2021-12",
                "Revenue": 14958.35,
                "Expenses": 43454.63,
                "Profit": 33512.21
            }
        ]
    },
    {
        "id": 30,
        "company": "EduSmart 30",
        "industry": "Food",
        "location": "S\u00e3o Paulo",
        "employee_count": 1939,
        "year_founded": 2001,
        "status": "Pending",
        "region": "Asia",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 10468.02,
                "Expenses": 9285.78,
                "Profit": 19716.89
            },
            {
                "date": "2023-10",
                "Revenue": 15151.99,
                "Expenses": 25829.3,
                "Profit": 29290.43
            },
            {
                "date": "2023-09",
                "Revenue": 13298.49,
                "Expenses": 12422.87,
                "Profit": 20413.62
            },
            {
                "date": "2023-08",
                "Revenue": 30795.1,
                "Expenses": 48942.47,
                "Profit": 6893.66
            },
            {
                "date": "2023-07",
                "Revenue": 37058.63,
                "Expenses": 2966.82,
                "Profit": 19783.31
            },
            {
                "date": "2023-06",
                "Revenue": 15808.52,
                "Expenses": 8583.23,
                "Profit": 21084.16
            },
            {
                "date": "2023-05",
                "Revenue": 20226.79,
                "Expenses": 17597.53,
                "Profit": 2238.14
            },
            {
                "date": "2023-04",
                "Revenue": 7978.42,
                "Expenses": 47436.27,
                "Profit": 38232.79
            },
            {
                "date": "2023-03",
                "Revenue": 8493.36,
                "Expenses": 1961.88,
                "Profit": 23042.79
            },
            {
                "date": "2023-02",
                "Revenue": 8376.85,
                "Expenses": 20986.97,
                "Profit": 17101.67
            },
            {
                "date": "2023-01",
                "Revenue": 36274.72,
                "Expenses": 6342.54,
                "Profit": 49239.2
            },
            {
                "date": "2022-12",
                "Revenue": 43807.28,
                "Expenses": 32148.26,
                "Profit": 25248.25
            },
            {
                "date": "2022-11",
                "Revenue": 38031.36,
                "Expenses": 18043.09,
                "Profit": 41685.21
            },
            {
                "date": "2022-10",
                "Revenue": 46863.42,
                "Expenses": 13008.37,
                "Profit": 6156.22
            },
            {
                "date": "2022-09",
                "Revenue": 46389.07,
                "Expenses": 22374.44,
                "Profit": 48627.9
            },
            {
                "date": "2022-08",
                "Revenue": 30878.11,
                "Expenses": 2273.87,
                "Profit": 38633.84
            },
            {
                "date": "2022-07",
                "Revenue": 17269.76,
                "Expenses": 38100.74,
                "Profit": 18698.21
            },
            {
                "date": "2022-06",
                "Revenue": 4888.2,
                "Expenses": 24854.92,
                "Profit": 3138.79
            },
            {
                "date": "2022-05",
                "Revenue": 1710.14,
                "Expenses": 17326.83,
                "Profit": 14007.69
            },
            {
                "date": "2022-04",
                "Revenue": 42922.74,
                "Expenses": 25669.78,
                "Profit": 31750.63
            },
            {
                "date": "2022-03",
                "Revenue": 38805.51,
                "Expenses": 17369.21,
                "Profit": 6681.32
            },
            {
                "date": "2022-02",
                "Revenue": 11169.84,
                "Expenses": 15288.75,
                "Profit": 27272.07
            },
            {
                "date": "2022-01",
                "Revenue": 38528.92,
                "Expenses": 25870.08,
                "Profit": 10892.59
            },
            {
                "date": "2021-12",
                "Revenue": 43756.61,
                "Expenses": 15162.81,
                "Profit": 42865.6
            }
        ]
    },
    {
        "id": 31,
        "company": "TechCorp 31",
        "industry": "Travel",
        "location": "Dubai",
        "employee_count": 2135,
        "year_founded": 2002,
        "status": "Active",
        "region": "Africa",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 7085.37,
                "Expenses": 1783.01,
                "Profit": 36793.96
            },
            {
                "date": "2023-10",
                "Revenue": 15683.21,
                "Expenses": 23618.59,
                "Profit": 22702.22
            },
            {
                "date": "2023-09",
                "Revenue": 28723.38,
                "Expenses": 12988.66,
                "Profit": 17554.07
            },
            {
                "date": "2023-08",
                "Revenue": 46406.67,
                "Expenses": 29800.3,
                "Profit": 38015.43
            },
            {
                "date": "2023-07",
                "Revenue": 7309.91,
                "Expenses": 16348.52,
                "Profit": 1567.01
            },
            {
                "date": "2023-06",
                "Revenue": 24051.49,
                "Expenses": 2516.48,
                "Profit": 44263.89
            },
            {
                "date": "2023-05",
                "Revenue": 23778.25,
                "Expenses": 48378.57,
                "Profit": 14294.26
            },
            {
                "date": "2023-04",
                "Revenue": 32801.07,
                "Expenses": 21906.83,
                "Profit": 47305.08
            },
            {
                "date": "2023-03",
                "Revenue": 3146.11,
                "Expenses": 2866.2,
                "Profit": 46089.66
            },
            {
                "date": "2023-02",
                "Revenue": 36977.07,
                "Expenses": 5506.12,
                "Profit": 1571.27
            },
            {
                "date": "2023-01",
                "Revenue": 47133.21,
                "Expenses": 43790.97,
                "Profit": 19444.45
            },
            {
                "date": "2022-12",
                "Revenue": 17682.52,
                "Expenses": 39074.76,
                "Profit": 34145.5
            },
            {
                "date": "2022-11",
                "Revenue": 30892.87,
                "Expenses": 28743.94,
                "Profit": 33889.53
            },
            {
                "date": "2022-10",
                "Revenue": 33961.39,
                "Expenses": 23748.25,
                "Profit": 14637.0
            },
            {
                "date": "2022-09",
                "Revenue": 16626.73,
                "Expenses": 45748.15,
                "Profit": 3138.37
            },
            {
                "date": "2022-08",
                "Revenue": 16651.92,
                "Expenses": 16204.26,
                "Profit": 17466.42
            },
            {
                "date": "2022-07",
                "Revenue": 39103.12,
                "Expenses": 34828.55,
                "Profit": 20972.24
            },
            {
                "date": "2022-06",
                "Revenue": 40228.76,
                "Expenses": 34571.97,
                "Profit": 47273.16
            },
            {
                "date": "2022-05",
                "Revenue": 40946.53,
                "Expenses": 26485.45,
                "Profit": 45059.44
            },
            {
                "date": "2022-04",
                "Revenue": 40474.07,
                "Expenses": 9269.96,
                "Profit": 42316.92
            },
            {
                "date": "2022-03",
                "Revenue": 14121.92,
                "Expenses": 12289.37,
                "Profit": 9786.05
            },
            {
                "date": "2022-02",
                "Revenue": 18535.95,
                "Expenses": 41649.28,
                "Profit": 45513.99
            },
            {
                "date": "2022-01",
                "Revenue": 30740.15,
                "Expenses": 29437.47,
                "Profit": 24266.99
            },
            {
                "date": "2021-12",
                "Revenue": 46855.5,
                "Expenses": 25163.81,
                "Profit": 19729.12
            }
        ]
    },
    {
        "id": 32,
        "company": "HealthPlus 32",
        "industry": "Travel",
        "location": "Singapore",
        "employee_count": 4403,
        "year_founded": 1992,
        "status": "Inactive",
        "region": "Africa",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 45330.43,
                "Expenses": 28186.54,
                "Profit": 2681.17
            },
            {
                "date": "2023-10",
                "Revenue": 18896.45,
                "Expenses": 45084.41,
                "Profit": 27740.34
            },
            {
                "date": "2023-09",
                "Revenue": 16949.05,
                "Expenses": 48628.92,
                "Profit": 17260.77
            },
            {
                "date": "2023-08",
                "Revenue": 34233.56,
                "Expenses": 27870.47,
                "Profit": 5881.98
            },
            {
                "date": "2023-07",
                "Revenue": 24832.41,
                "Expenses": 31236.23,
                "Profit": 17884.58
            },
            {
                "date": "2023-06",
                "Revenue": 8133.34,
                "Expenses": 40789.67,
                "Profit": 41539.7
            },
            {
                "date": "2023-05",
                "Revenue": 31244.58,
                "Expenses": 44069.44,
                "Profit": 9283.04
            },
            {
                "date": "2023-04",
                "Revenue": 12884.55,
                "Expenses": 9493.85,
                "Profit": 42804.56
            },
            {
                "date": "2023-03",
                "Revenue": 4085.14,
                "Expenses": 47989.58,
                "Profit": 13475.07
            },
            {
                "date": "2023-02",
                "Revenue": 46872.91,
                "Expenses": 44796.09,
                "Profit": 13812.41
            },
            {
                "date": "2023-01",
                "Revenue": 30430.75,
                "Expenses": 34049.92,
                "Profit": 13457.78
            },
            {
                "date": "2022-12",
                "Revenue": 20616.99,
                "Expenses": 15969.57,
                "Profit": 26431.83
            },
            {
                "date": "2022-11",
                "Revenue": 30865.11,
                "Expenses": 13404.91,
                "Profit": 25246.97
            },
            {
                "date": "2022-10",
                "Revenue": 15679.45,
                "Expenses": 30840.64,
                "Profit": 9514.96
            },
            {
                "date": "2022-09",
                "Revenue": 27769.58,
                "Expenses": 24890.93,
                "Profit": 42244.77
            },
            {
                "date": "2022-08",
                "Revenue": 28021.5,
                "Expenses": 45545.6,
                "Profit": 4324.36
            },
            {
                "date": "2022-07",
                "Revenue": 15872.74,
                "Expenses": 35244.31,
                "Profit": 24741.74
            },
            {
                "date": "2022-06",
                "Revenue": 11776.61,
                "Expenses": 16572.89,
                "Profit": 27734.38
            },
            {
                "date": "2022-05",
                "Revenue": 11762.1,
                "Expenses": 32596.81,
                "Profit": 35810.47
            },
            {
                "date": "2022-04",
                "Revenue": 45290.93,
                "Expenses": 32251.08,
                "Profit": 4263.75
            },
            {
                "date": "2022-03",
                "Revenue": 39545.17,
                "Expenses": 22622.39,
                "Profit": 28046.64
            },
            {
                "date": "2022-02",
                "Revenue": 9651.83,
                "Expenses": 12027.46,
                "Profit": 25331.45
            },
            {
                "date": "2022-01",
                "Revenue": 1802.0,
                "Expenses": 4343.85,
                "Profit": 2002.9
            },
            {
                "date": "2021-12",
                "Revenue": 5192.65,
                "Expenses": 31574.9,
                "Profit": 30648.48
            }
        ]
    },
    {
        "id": 33,
        "company": "FinSecure 33",
        "industry": "Travel",
        "location": "Tokyo",
        "employee_count": 1365,
        "year_founded": 2007,
        "status": "Inactive",
        "region": "Europe",
        "sector": "Education",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 16190.56,
                "Expenses": 27770.0,
                "Profit": 13366.27
            },
            {
                "date": "2023-10",
                "Revenue": 45970.82,
                "Expenses": 36968.69,
                "Profit": 13800.21
            },
            {
                "date": "2023-09",
                "Revenue": 31981.58,
                "Expenses": 7942.55,
                "Profit": 32814.35
            },
            {
                "date": "2023-08",
                "Revenue": 10878.54,
                "Expenses": 24252.36,
                "Profit": 7574.79
            },
            {
                "date": "2023-07",
                "Revenue": 38410.97,
                "Expenses": 24605.26,
                "Profit": 48934.63
            },
            {
                "date": "2023-06",
                "Revenue": 45748.75,
                "Expenses": 33659.82,
                "Profit": 32159.89
            },
            {
                "date": "2023-05",
                "Revenue": 43063.26,
                "Expenses": 20977.16,
                "Profit": 13122.3
            },
            {
                "date": "2023-04",
                "Revenue": 25999.21,
                "Expenses": 15726.42,
                "Profit": 20228.78
            },
            {
                "date": "2023-03",
                "Revenue": 40031.17,
                "Expenses": 45830.53,
                "Profit": 46401.38
            },
            {
                "date": "2023-02",
                "Revenue": 43376.67,
                "Expenses": 46287.09,
                "Profit": 48063.44
            },
            {
                "date": "2023-01",
                "Revenue": 36112.81,
                "Expenses": 41349.85,
                "Profit": 17486.11
            },
            {
                "date": "2022-12",
                "Revenue": 45610.42,
                "Expenses": 25664.65,
                "Profit": 34744.88
            },
            {
                "date": "2022-11",
                "Revenue": 25415.76,
                "Expenses": 31825.02,
                "Profit": 42004.57
            },
            {
                "date": "2022-10",
                "Revenue": 16368.8,
                "Expenses": 23138.97,
                "Profit": 19072.94
            },
            {
                "date": "2022-09",
                "Revenue": 22373.1,
                "Expenses": 41421.41,
                "Profit": 14783.24
            },
            {
                "date": "2022-08",
                "Revenue": 13838.6,
                "Expenses": 38574.04,
                "Profit": 22164.1
            },
            {
                "date": "2022-07",
                "Revenue": 11123.7,
                "Expenses": 10558.89,
                "Profit": 49040.62
            },
            {
                "date": "2022-06",
                "Revenue": 13114.46,
                "Expenses": 18948.09,
                "Profit": 37454.33
            },
            {
                "date": "2022-05",
                "Revenue": 2271.02,
                "Expenses": 26160.56,
                "Profit": 2007.14
            },
            {
                "date": "2022-04",
                "Revenue": 18039.68,
                "Expenses": 47705.07,
                "Profit": 16666.05
            },
            {
                "date": "2022-03",
                "Revenue": 16570.36,
                "Expenses": 13455.51,
                "Profit": 5656.37
            },
            {
                "date": "2022-02",
                "Revenue": 40900.64,
                "Expenses": 22597.45,
                "Profit": 38549.51
            },
            {
                "date": "2022-01",
                "Revenue": 16633.92,
                "Expenses": 45488.73,
                "Profit": 3097.77
            },
            {
                "date": "2021-12",
                "Revenue": 25825.77,
                "Expenses": 48928.82,
                "Profit": 20338.25
            }
        ]
    },
    {
        "id": 34,
        "company": "MediaNet 34",
        "industry": "Education",
        "location": "Singapore",
        "employee_count": 944,
        "year_founded": 2007,
        "status": "Pending",
        "region": "Asia",
        "sector": "Healthcare",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 27721.66,
                "Expenses": 14216.67,
                "Profit": 26372.99
            },
            {
                "date": "2023-10",
                "Revenue": 33117.19,
                "Expenses": 8232.2,
                "Profit": 37698.66
            },
            {
                "date": "2023-09",
                "Revenue": 12932.23,
                "Expenses": 15260.64,
                "Profit": 38603.09
            },
            {
                "date": "2023-08",
                "Revenue": 3128.89,
                "Expenses": 22653.63,
                "Profit": 23966.49
            },
            {
                "date": "2023-07",
                "Revenue": 25581.95,
                "Expenses": 33998.07,
                "Profit": 26987.83
            },
            {
                "date": "2023-06",
                "Revenue": 38025.39,
                "Expenses": 18503.94,
                "Profit": 36950.3
            },
            {
                "date": "2023-05",
                "Revenue": 4813.28,
                "Expenses": 27842.98,
                "Profit": 43888.88
            },
            {
                "date": "2023-04",
                "Revenue": 17545.95,
                "Expenses": 9958.35,
                "Profit": 25820.27
            },
            {
                "date": "2023-03",
                "Revenue": 36844.82,
                "Expenses": 33846.19,
                "Profit": 8370.98
            },
            {
                "date": "2023-02",
                "Revenue": 3516.39,
                "Expenses": 45112.51,
                "Profit": 43500.46
            },
            {
                "date": "2023-01",
                "Revenue": 43838.61,
                "Expenses": 49567.1,
                "Profit": 14170.05
            },
            {
                "date": "2022-12",
                "Revenue": 47789.06,
                "Expenses": 13856.87,
                "Profit": 48712.84
            },
            {
                "date": "2022-11",
                "Revenue": 3351.06,
                "Expenses": 12166.4,
                "Profit": 8301.81
            },
            {
                "date": "2022-10",
                "Revenue": 1100.54,
                "Expenses": 46379.24,
                "Profit": 4368.42
            },
            {
                "date": "2022-09",
                "Revenue": 13214.43,
                "Expenses": 33684.72,
                "Profit": 49275.13
            },
            {
                "date": "2022-08",
                "Revenue": 3960.55,
                "Expenses": 46565.08,
                "Profit": 29091.66
            },
            {
                "date": "2022-07",
                "Revenue": 22620.94,
                "Expenses": 40946.84,
                "Profit": 32700.88
            },
            {
                "date": "2022-06",
                "Revenue": 18296.27,
                "Expenses": 39874.6,
                "Profit": 22017.32
            },
            {
                "date": "2022-05",
                "Revenue": 20777.07,
                "Expenses": 31288.71,
                "Profit": 5726.64
            },
            {
                "date": "2022-04",
                "Revenue": 22017.31,
                "Expenses": 21970.13,
                "Profit": 28451.37
            },
            {
                "date": "2022-03",
                "Revenue": 30708.48,
                "Expenses": 21358.76,
                "Profit": 45938.38
            },
            {
                "date": "2022-02",
                "Revenue": 34394.41,
                "Expenses": 22872.58,
                "Profit": 7512.61
            },
            {
                "date": "2022-01",
                "Revenue": 2263.11,
                "Expenses": 8908.65,
                "Profit": 27890.4
            },
            {
                "date": "2021-12",
                "Revenue": 33851.17,
                "Expenses": 26998.43,
                "Profit": 46200.23
            }
        ]
    },
    {
        "id": 35,
        "company": "FinSecure 35",
        "industry": "Energy",
        "location": "Tokyo",
        "employee_count": 3616,
        "year_founded": 2006,
        "status": "Active",
        "region": "Australia",
        "sector": "Healthcare",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 29525.22,
                "Expenses": 44843.43,
                "Profit": 2575.61
            },
            {
                "date": "2023-10",
                "Revenue": 32258.39,
                "Expenses": 20863.92,
                "Profit": 8062.22
            },
            {
                "date": "2023-09",
                "Revenue": 35821.24,
                "Expenses": 13543.22,
                "Profit": 29522.69
            },
            {
                "date": "2023-08",
                "Revenue": 40105.85,
                "Expenses": 39492.73,
                "Profit": 48700.27
            },
            {
                "date": "2023-07",
                "Revenue": 16513.75,
                "Expenses": 45127.27,
                "Profit": 18852.73
            },
            {
                "date": "2023-06",
                "Revenue": 35178.08,
                "Expenses": 9566.5,
                "Profit": 4168.44
            },
            {
                "date": "2023-05",
                "Revenue": 25887.29,
                "Expenses": 12465.41,
                "Profit": 36081.78
            },
            {
                "date": "2023-04",
                "Revenue": 45703.72,
                "Expenses": 42742.24,
                "Profit": 48962.64
            },
            {
                "date": "2023-03",
                "Revenue": 43349.9,
                "Expenses": 13535.66,
                "Profit": 33818.6
            },
            {
                "date": "2023-02",
                "Revenue": 6010.02,
                "Expenses": 40191.87,
                "Profit": 9913.76
            },
            {
                "date": "2023-01",
                "Revenue": 3091.11,
                "Expenses": 48678.58,
                "Profit": 14303.79
            },
            {
                "date": "2022-12",
                "Revenue": 40667.54,
                "Expenses": 45894.53,
                "Profit": 47215.56
            },
            {
                "date": "2022-11",
                "Revenue": 6045.4,
                "Expenses": 3982.82,
                "Profit": 39771.24
            },
            {
                "date": "2022-10",
                "Revenue": 8463.06,
                "Expenses": 4543.67,
                "Profit": 24772.39
            },
            {
                "date": "2022-09",
                "Revenue": 23082.07,
                "Expenses": 47710.52,
                "Profit": 27113.09
            },
            {
                "date": "2022-08",
                "Revenue": 37324.52,
                "Expenses": 27751.99,
                "Profit": 33819.16
            },
            {
                "date": "2022-07",
                "Revenue": 48745.27,
                "Expenses": 25377.17,
                "Profit": 7430.69
            },
            {
                "date": "2022-06",
                "Revenue": 36818.05,
                "Expenses": 1925.23,
                "Profit": 39255.44
            },
            {
                "date": "2022-05",
                "Revenue": 21583.33,
                "Expenses": 7429.24,
                "Profit": 31055.53
            },
            {
                "date": "2022-04",
                "Revenue": 46653.13,
                "Expenses": 3214.54,
                "Profit": 48427.46
            },
            {
                "date": "2022-03",
                "Revenue": 33097.69,
                "Expenses": 21861.11,
                "Profit": 37235.6
            },
            {
                "date": "2022-02",
                "Revenue": 14757.68,
                "Expenses": 17946.62,
                "Profit": 8327.13
            },
            {
                "date": "2022-01",
                "Revenue": 28840.05,
                "Expenses": 41108.21,
                "Profit": 5786.04
            },
            {
                "date": "2021-12",
                "Revenue": 9961.65,
                "Expenses": 37728.94,
                "Profit": 27939.97
            }
        ]
    },
    {
        "id": 36,
        "company": "TechCorp 36",
        "industry": "Education",
        "location": "San Francisco",
        "employee_count": 859,
        "year_founded": 2011,
        "status": "Inactive",
        "region": "Australia",
        "sector": "Fitness",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 41346.31,
                "Expenses": 7530.75,
                "Profit": 18137.63
            },
            {
                "date": "2023-10",
                "Revenue": 41801.21,
                "Expenses": 23732.25,
                "Profit": 8822.01
            },
            {
                "date": "2023-09",
                "Revenue": 29082.83,
                "Expenses": 30076.02,
                "Profit": 3574.33
            },
            {
                "date": "2023-08",
                "Revenue": 12061.8,
                "Expenses": 10026.72,
                "Profit": 39049.95
            },
            {
                "date": "2023-07",
                "Revenue": 32241.25,
                "Expenses": 15768.24,
                "Profit": 11275.91
            },
            {
                "date": "2023-06",
                "Revenue": 36278.13,
                "Expenses": 29257.74,
                "Profit": 43461.25
            },
            {
                "date": "2023-05",
                "Revenue": 40347.0,
                "Expenses": 32181.96,
                "Profit": 38272.27
            },
            {
                "date": "2023-04",
                "Revenue": 28009.03,
                "Expenses": 7046.43,
                "Profit": 11063.38
            },
            {
                "date": "2023-03",
                "Revenue": 3819.92,
                "Expenses": 6107.21,
                "Profit": 43204.51
            },
            {
                "date": "2023-02",
                "Revenue": 22143.11,
                "Expenses": 36511.13,
                "Profit": 39298.04
            },
            {
                "date": "2023-01",
                "Revenue": 20616.16,
                "Expenses": 30106.7,
                "Profit": 27040.41
            },
            {
                "date": "2022-12",
                "Revenue": 22732.3,
                "Expenses": 2486.63,
                "Profit": 7086.86
            },
            {
                "date": "2022-11",
                "Revenue": 14425.87,
                "Expenses": 18653.12,
                "Profit": 41584.12
            },
            {
                "date": "2022-10",
                "Revenue": 42016.53,
                "Expenses": 21452.01,
                "Profit": 13147.59
            },
            {
                "date": "2022-09",
                "Revenue": 31637.12,
                "Expenses": 30404.78,
                "Profit": 47179.62
            },
            {
                "date": "2022-08",
                "Revenue": 49129.11,
                "Expenses": 45504.45,
                "Profit": 13045.77
            },
            {
                "date": "2022-07",
                "Revenue": 17679.9,
                "Expenses": 10861.93,
                "Profit": 2947.01
            },
            {
                "date": "2022-06",
                "Revenue": 29867.72,
                "Expenses": 35978.48,
                "Profit": 12461.43
            },
            {
                "date": "2022-05",
                "Revenue": 30602.19,
                "Expenses": 3242.39,
                "Profit": 13172.15
            },
            {
                "date": "2022-04",
                "Revenue": 45715.28,
                "Expenses": 15712.0,
                "Profit": 29281.62
            },
            {
                "date": "2022-03",
                "Revenue": 1182.67,
                "Expenses": 39275.17,
                "Profit": 7023.97
            },
            {
                "date": "2022-02",
                "Revenue": 40957.31,
                "Expenses": 30800.81,
                "Profit": 9186.36
            },
            {
                "date": "2022-01",
                "Revenue": 34999.3,
                "Expenses": 43809.3,
                "Profit": 5419.7
            },
            {
                "date": "2021-12",
                "Revenue": 17748.43,
                "Expenses": 27825.03,
                "Profit": 8540.88
            }
        ]
    },
    {
        "id": 37,
        "company": "EduSmart 37",
        "industry": "Travel",
        "location": "New York",
        "employee_count": 137,
        "year_founded": 2000,
        "status": "Pending",
        "region": "Australia",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 43483.16,
                "Expenses": 48830.71,
                "Profit": 16995.43
            },
            {
                "date": "2023-10",
                "Revenue": 20480.77,
                "Expenses": 1072.17,
                "Profit": 44292.25
            },
            {
                "date": "2023-09",
                "Revenue": 2683.69,
                "Expenses": 13482.03,
                "Profit": 49753.29
            },
            {
                "date": "2023-08",
                "Revenue": 8855.43,
                "Expenses": 18721.33,
                "Profit": 14684.92
            },
            {
                "date": "2023-07",
                "Revenue": 36198.51,
                "Expenses": 18335.64,
                "Profit": 9117.45
            },
            {
                "date": "2023-06",
                "Revenue": 48705.79,
                "Expenses": 27405.52,
                "Profit": 15035.92
            },
            {
                "date": "2023-05",
                "Revenue": 5894.98,
                "Expenses": 45225.91,
                "Profit": 19868.39
            },
            {
                "date": "2023-04",
                "Revenue": 48344.07,
                "Expenses": 43878.29,
                "Profit": 10200.74
            },
            {
                "date": "2023-03",
                "Revenue": 28477.65,
                "Expenses": 34284.96,
                "Profit": 31489.61
            },
            {
                "date": "2023-02",
                "Revenue": 14929.69,
                "Expenses": 39173.68,
                "Profit": 14080.91
            },
            {
                "date": "2023-01",
                "Revenue": 33746.07,
                "Expenses": 5466.88,
                "Profit": 31866.77
            },
            {
                "date": "2022-12",
                "Revenue": 42978.23,
                "Expenses": 32580.21,
                "Profit": 43083.98
            },
            {
                "date": "2022-11",
                "Revenue": 6633.78,
                "Expenses": 17122.93,
                "Profit": 45624.94
            },
            {
                "date": "2022-10",
                "Revenue": 18086.25,
                "Expenses": 6879.74,
                "Profit": 15611.99
            },
            {
                "date": "2022-09",
                "Revenue": 11598.4,
                "Expenses": 26985.2,
                "Profit": 2235.84
            },
            {
                "date": "2022-08",
                "Revenue": 31580.01,
                "Expenses": 8792.95,
                "Profit": 12953.07
            },
            {
                "date": "2022-07",
                "Revenue": 24772.72,
                "Expenses": 12095.47,
                "Profit": 39152.25
            },
            {
                "date": "2022-06",
                "Revenue": 39762.48,
                "Expenses": 41072.25,
                "Profit": 7890.38
            },
            {
                "date": "2022-05",
                "Revenue": 6256.62,
                "Expenses": 37085.11,
                "Profit": 1544.25
            },
            {
                "date": "2022-04",
                "Revenue": 33570.26,
                "Expenses": 30685.25,
                "Profit": 45213.3
            },
            {
                "date": "2022-03",
                "Revenue": 16922.18,
                "Expenses": 27662.81,
                "Profit": 27027.57
            },
            {
                "date": "2022-02",
                "Revenue": 25055.0,
                "Expenses": 32173.43,
                "Profit": 39909.73
            },
            {
                "date": "2022-01",
                "Revenue": 5561.71,
                "Expenses": 47463.2,
                "Profit": 4616.72
            },
            {
                "date": "2021-12",
                "Revenue": 47809.14,
                "Expenses": 11110.41,
                "Profit": 28430.5
            }
        ]
    },
    {
        "id": 38,
        "company": "AutoDrive 38",
        "industry": "Fitness",
        "location": "Tokyo",
        "employee_count": 1645,
        "year_founded": 1997,
        "status": "Inactive",
        "region": "Europe",
        "sector": "Fitness",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 38877.55,
                "Expenses": 46595.6,
                "Profit": 12913.21
            },
            {
                "date": "2023-10",
                "Revenue": 37280.9,
                "Expenses": 43177.24,
                "Profit": 43965.67
            },
            {
                "date": "2023-09",
                "Revenue": 28479.87,
                "Expenses": 1778.96,
                "Profit": 4873.55
            },
            {
                "date": "2023-08",
                "Revenue": 24182.49,
                "Expenses": 27390.1,
                "Profit": 28378.93
            },
            {
                "date": "2023-07",
                "Revenue": 16083.39,
                "Expenses": 22125.4,
                "Profit": 41557.73
            },
            {
                "date": "2023-06",
                "Revenue": 6293.09,
                "Expenses": 30445.04,
                "Profit": 46183.64
            },
            {
                "date": "2023-05",
                "Revenue": 35452.51,
                "Expenses": 23308.23,
                "Profit": 14243.04
            },
            {
                "date": "2023-04",
                "Revenue": 25031.62,
                "Expenses": 10037.42,
                "Profit": 24290.35
            },
            {
                "date": "2023-03",
                "Revenue": 47261.07,
                "Expenses": 44597.05,
                "Profit": 46504.19
            },
            {
                "date": "2023-02",
                "Revenue": 20240.67,
                "Expenses": 48762.59,
                "Profit": 21310.5
            },
            {
                "date": "2023-01",
                "Revenue": 21965.75,
                "Expenses": 19497.22,
                "Profit": 43636.19
            },
            {
                "date": "2022-12",
                "Revenue": 18554.52,
                "Expenses": 4215.95,
                "Profit": 49390.03
            },
            {
                "date": "2022-11",
                "Revenue": 32932.78,
                "Expenses": 26322.69,
                "Profit": 41612.5
            },
            {
                "date": "2022-10",
                "Revenue": 8501.27,
                "Expenses": 32351.01,
                "Profit": 46549.9
            },
            {
                "date": "2022-09",
                "Revenue": 15343.01,
                "Expenses": 8425.96,
                "Profit": 24362.59
            },
            {
                "date": "2022-08",
                "Revenue": 39594.34,
                "Expenses": 29953.57,
                "Profit": 8785.62
            },
            {
                "date": "2022-07",
                "Revenue": 46979.98,
                "Expenses": 21623.68,
                "Profit": 44934.63
            },
            {
                "date": "2022-06",
                "Revenue": 23832.64,
                "Expenses": 32816.25,
                "Profit": 46616.91
            },
            {
                "date": "2022-05",
                "Revenue": 23611.01,
                "Expenses": 12124.53,
                "Profit": 41591.74
            },
            {
                "date": "2022-04",
                "Revenue": 1850.55,
                "Expenses": 35858.87,
                "Profit": 6299.75
            },
            {
                "date": "2022-03",
                "Revenue": 18583.39,
                "Expenses": 14217.49,
                "Profit": 27229.04
            },
            {
                "date": "2022-02",
                "Revenue": 15983.34,
                "Expenses": 21371.74,
                "Profit": 1221.89
            },
            {
                "date": "2022-01",
                "Revenue": 5569.48,
                "Expenses": 34911.87,
                "Profit": 10897.31
            },
            {
                "date": "2021-12",
                "Revenue": 48158.35,
                "Expenses": 16601.05,
                "Profit": 39321.43
            }
        ]
    },
    {
        "id": 39,
        "company": "FoodWorks 39",
        "industry": "Finance",
        "location": "Berlin",
        "employee_count": 2135,
        "year_founded": 1992,
        "status": "Pending",
        "region": "Europe",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 4679.39,
                "Expenses": 26574.49,
                "Profit": 17576.72
            },
            {
                "date": "2023-10",
                "Revenue": 10343.58,
                "Expenses": 29788.22,
                "Profit": 9645.51
            },
            {
                "date": "2023-09",
                "Revenue": 19964.57,
                "Expenses": 17637.0,
                "Profit": 45597.08
            },
            {
                "date": "2023-08",
                "Revenue": 12382.81,
                "Expenses": 14602.13,
                "Profit": 6239.82
            },
            {
                "date": "2023-07",
                "Revenue": 6216.39,
                "Expenses": 38410.97,
                "Profit": 25188.42
            },
            {
                "date": "2023-06",
                "Revenue": 9668.37,
                "Expenses": 49612.95,
                "Profit": 28813.14
            },
            {
                "date": "2023-05",
                "Revenue": 2293.73,
                "Expenses": 20147.68,
                "Profit": 33290.8
            },
            {
                "date": "2023-04",
                "Revenue": 30072.75,
                "Expenses": 8283.94,
                "Profit": 3540.23
            },
            {
                "date": "2023-03",
                "Revenue": 36611.94,
                "Expenses": 26976.48,
                "Profit": 16585.34
            },
            {
                "date": "2023-02",
                "Revenue": 27096.19,
                "Expenses": 26086.79,
                "Profit": 29423.06
            },
            {
                "date": "2023-01",
                "Revenue": 31986.3,
                "Expenses": 24607.37,
                "Profit": 40698.96
            },
            {
                "date": "2022-12",
                "Revenue": 20775.92,
                "Expenses": 21120.25,
                "Profit": 43500.81
            },
            {
                "date": "2022-11",
                "Revenue": 2338.03,
                "Expenses": 46702.34,
                "Profit": 19542.47
            },
            {
                "date": "2022-10",
                "Revenue": 18669.75,
                "Expenses": 19799.84,
                "Profit": 16944.96
            },
            {
                "date": "2022-09",
                "Revenue": 44204.24,
                "Expenses": 21315.2,
                "Profit": 33506.33
            },
            {
                "date": "2022-08",
                "Revenue": 10924.4,
                "Expenses": 20466.33,
                "Profit": 47001.99
            },
            {
                "date": "2022-07",
                "Revenue": 26102.96,
                "Expenses": 1318.98,
                "Profit": 27322.7
            },
            {
                "date": "2022-06",
                "Revenue": 15845.33,
                "Expenses": 14440.55,
                "Profit": 40049.56
            },
            {
                "date": "2022-05",
                "Revenue": 23795.82,
                "Expenses": 36969.54,
                "Profit": 33276.14
            },
            {
                "date": "2022-04",
                "Revenue": 3513.03,
                "Expenses": 20493.29,
                "Profit": 4436.26
            },
            {
                "date": "2022-03",
                "Revenue": 46303.35,
                "Expenses": 21469.35,
                "Profit": 3355.25
            },
            {
                "date": "2022-02",
                "Revenue": 41304.1,
                "Expenses": 25477.97,
                "Profit": 12122.37
            },
            {
                "date": "2022-01",
                "Revenue": 1452.07,
                "Expenses": 35326.43,
                "Profit": 11325.0
            },
            {
                "date": "2021-12",
                "Revenue": 14728.76,
                "Expenses": 44170.87,
                "Profit": 25376.87
            }
        ]
    },
    {
        "id": 40,
        "company": "SportFit 40",
        "industry": "Fitness",
        "location": "San Francisco",
        "employee_count": 4359,
        "year_founded": 2015,
        "status": "Pending",
        "region": "South America",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 46590.02,
                "Expenses": 34909.4,
                "Profit": 6123.71
            },
            {
                "date": "2023-10",
                "Revenue": 47787.76,
                "Expenses": 33377.18,
                "Profit": 22122.58
            },
            {
                "date": "2023-09",
                "Revenue": 4607.61,
                "Expenses": 17858.37,
                "Profit": 4902.53
            },
            {
                "date": "2023-08",
                "Revenue": 14916.9,
                "Expenses": 11558.1,
                "Profit": 46512.82
            },
            {
                "date": "2023-07",
                "Revenue": 9097.08,
                "Expenses": 38551.07,
                "Profit": 23034.36
            },
            {
                "date": "2023-06",
                "Revenue": 40605.7,
                "Expenses": 38892.86,
                "Profit": 45761.39
            },
            {
                "date": "2023-05",
                "Revenue": 21983.39,
                "Expenses": 5209.37,
                "Profit": 43289.51
            },
            {
                "date": "2023-04",
                "Revenue": 37273.89,
                "Expenses": 15800.6,
                "Profit": 26576.86
            },
            {
                "date": "2023-03",
                "Revenue": 26658.79,
                "Expenses": 4528.26,
                "Profit": 8177.09
            },
            {
                "date": "2023-02",
                "Revenue": 4180.87,
                "Expenses": 38218.69,
                "Profit": 34398.17
            },
            {
                "date": "2023-01",
                "Revenue": 43533.56,
                "Expenses": 20798.4,
                "Profit": 19628.23
            },
            {
                "date": "2022-12",
                "Revenue": 49327.98,
                "Expenses": 46368.31,
                "Profit": 3395.77
            },
            {
                "date": "2022-11",
                "Revenue": 14065.58,
                "Expenses": 3618.56,
                "Profit": 30978.69
            },
            {
                "date": "2022-10",
                "Revenue": 8307.37,
                "Expenses": 33389.72,
                "Profit": 39470.82
            },
            {
                "date": "2022-09",
                "Revenue": 16271.9,
                "Expenses": 28452.64,
                "Profit": 35343.46
            },
            {
                "date": "2022-08",
                "Revenue": 32310.79,
                "Expenses": 49404.81,
                "Profit": 29009.53
            },
            {
                "date": "2022-07",
                "Revenue": 16988.26,
                "Expenses": 11632.26,
                "Profit": 43107.45
            },
            {
                "date": "2022-06",
                "Revenue": 43227.15,
                "Expenses": 5081.4,
                "Profit": 46485.84
            },
            {
                "date": "2022-05",
                "Revenue": 12241.84,
                "Expenses": 24837.36,
                "Profit": 16680.76
            },
            {
                "date": "2022-04",
                "Revenue": 38111.21,
                "Expenses": 16677.97,
                "Profit": 13985.94
            },
            {
                "date": "2022-03",
                "Revenue": 12206.36,
                "Expenses": 37742.96,
                "Profit": 33167.17
            },
            {
                "date": "2022-02",
                "Revenue": 12414.89,
                "Expenses": 27262.76,
                "Profit": 48382.39
            },
            {
                "date": "2022-01",
                "Revenue": 36444.67,
                "Expenses": 48691.38,
                "Profit": 34802.39
            },
            {
                "date": "2021-12",
                "Revenue": 38598.86,
                "Expenses": 49677.65,
                "Profit": 15691.03
            }
        ]
    },
    {
        "id": 41,
        "company": "TechCorp 41",
        "industry": "Finance",
        "location": "Berlin",
        "employee_count": 1625,
        "year_founded": 2010,
        "status": "Inactive",
        "region": "South America",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 16962.6,
                "Expenses": 45911.09,
                "Profit": 42963.53
            },
            {
                "date": "2023-10",
                "Revenue": 32211.81,
                "Expenses": 7780.1,
                "Profit": 45266.54
            },
            {
                "date": "2023-09",
                "Revenue": 18540.55,
                "Expenses": 49226.51,
                "Profit": 18501.63
            },
            {
                "date": "2023-08",
                "Revenue": 34375.22,
                "Expenses": 33224.46,
                "Profit": 41904.47
            },
            {
                "date": "2023-07",
                "Revenue": 2335.28,
                "Expenses": 14657.37,
                "Profit": 15063.08
            },
            {
                "date": "2023-06",
                "Revenue": 5409.75,
                "Expenses": 12976.22,
                "Profit": 4153.29
            },
            {
                "date": "2023-05",
                "Revenue": 23097.27,
                "Expenses": 18563.79,
                "Profit": 15864.49
            },
            {
                "date": "2023-04",
                "Revenue": 45162.19,
                "Expenses": 33203.23,
                "Profit": 45908.86
            },
            {
                "date": "2023-03",
                "Revenue": 10446.88,
                "Expenses": 44600.69,
                "Profit": 34229.08
            },
            {
                "date": "2023-02",
                "Revenue": 27082.17,
                "Expenses": 19791.6,
                "Profit": 7404.74
            },
            {
                "date": "2023-01",
                "Revenue": 26921.58,
                "Expenses": 32131.86,
                "Profit": 20953.83
            },
            {
                "date": "2022-12",
                "Revenue": 7448.98,
                "Expenses": 39659.77,
                "Profit": 2557.08
            },
            {
                "date": "2022-11",
                "Revenue": 10006.62,
                "Expenses": 3546.74,
                "Profit": 21686.63
            },
            {
                "date": "2022-10",
                "Revenue": 8411.63,
                "Expenses": 27911.17,
                "Profit": 25689.07
            },
            {
                "date": "2022-09",
                "Revenue": 29355.69,
                "Expenses": 18871.62,
                "Profit": 39933.48
            },
            {
                "date": "2022-08",
                "Revenue": 47720.49,
                "Expenses": 7286.04,
                "Profit": 48615.16
            },
            {
                "date": "2022-07",
                "Revenue": 37981.45,
                "Expenses": 28610.92,
                "Profit": 2420.37
            },
            {
                "date": "2022-06",
                "Revenue": 24864.6,
                "Expenses": 11437.8,
                "Profit": 10719.48
            },
            {
                "date": "2022-05",
                "Revenue": 19140.31,
                "Expenses": 38825.23,
                "Profit": 35008.52
            },
            {
                "date": "2022-04",
                "Revenue": 13746.53,
                "Expenses": 32359.43,
                "Profit": 42695.71
            },
            {
                "date": "2022-03",
                "Revenue": 2740.12,
                "Expenses": 22899.36,
                "Profit": 9903.27
            },
            {
                "date": "2022-02",
                "Revenue": 7967.18,
                "Expenses": 33441.58,
                "Profit": 5867.28
            },
            {
                "date": "2022-01",
                "Revenue": 8499.56,
                "Expenses": 4518.21,
                "Profit": 7532.52
            },
            {
                "date": "2021-12",
                "Revenue": 11827.42,
                "Expenses": 36529.58,
                "Profit": 27836.77
            }
        ]
    },
    {
        "id": 42,
        "company": "TechCorp 42",
        "industry": "Energy",
        "location": "S\u00e3o Paulo",
        "employee_count": 4145,
        "year_founded": 2002,
        "status": "Active",
        "region": "Africa",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 22312.19,
                "Expenses": 1284.0,
                "Profit": 34309.27
            },
            {
                "date": "2023-10",
                "Revenue": 21910.87,
                "Expenses": 48689.69,
                "Profit": 11011.82
            },
            {
                "date": "2023-09",
                "Revenue": 14763.25,
                "Expenses": 9536.45,
                "Profit": 10909.05
            },
            {
                "date": "2023-08",
                "Revenue": 41523.04,
                "Expenses": 30213.14,
                "Profit": 6491.79
            },
            {
                "date": "2023-07",
                "Revenue": 29721.02,
                "Expenses": 15036.64,
                "Profit": 36035.01
            },
            {
                "date": "2023-06",
                "Revenue": 31921.21,
                "Expenses": 20652.5,
                "Profit": 30226.89
            },
            {
                "date": "2023-05",
                "Revenue": 27626.66,
                "Expenses": 18402.24,
                "Profit": 36623.74
            },
            {
                "date": "2023-04",
                "Revenue": 4098.64,
                "Expenses": 42928.97,
                "Profit": 36763.07
            },
            {
                "date": "2023-03",
                "Revenue": 22990.16,
                "Expenses": 40215.34,
                "Profit": 12953.34
            },
            {
                "date": "2023-02",
                "Revenue": 34099.47,
                "Expenses": 11879.66,
                "Profit": 41406.52
            },
            {
                "date": "2023-01",
                "Revenue": 37603.89,
                "Expenses": 24281.4,
                "Profit": 5842.5
            },
            {
                "date": "2022-12",
                "Revenue": 11665.3,
                "Expenses": 45021.87,
                "Profit": 17946.54
            },
            {
                "date": "2022-11",
                "Revenue": 21600.03,
                "Expenses": 14983.35,
                "Profit": 11770.23
            },
            {
                "date": "2022-10",
                "Revenue": 33880.0,
                "Expenses": 39779.42,
                "Profit": 21727.04
            },
            {
                "date": "2022-09",
                "Revenue": 15160.16,
                "Expenses": 27540.18,
                "Profit": 8973.96
            },
            {
                "date": "2022-08",
                "Revenue": 1146.09,
                "Expenses": 41518.25,
                "Profit": 37849.36
            },
            {
                "date": "2022-07",
                "Revenue": 12789.11,
                "Expenses": 22864.35,
                "Profit": 24195.42
            },
            {
                "date": "2022-06",
                "Revenue": 41165.91,
                "Expenses": 6103.14,
                "Profit": 17929.19
            },
            {
                "date": "2022-05",
                "Revenue": 30291.21,
                "Expenses": 10919.65,
                "Profit": 22154.19
            },
            {
                "date": "2022-04",
                "Revenue": 32910.68,
                "Expenses": 30374.99,
                "Profit": 28862.69
            },
            {
                "date": "2022-03",
                "Revenue": 41528.37,
                "Expenses": 48106.1,
                "Profit": 49692.42
            },
            {
                "date": "2022-02",
                "Revenue": 30849.91,
                "Expenses": 18639.33,
                "Profit": 33801.87
            },
            {
                "date": "2022-01",
                "Revenue": 29600.81,
                "Expenses": 29957.68,
                "Profit": 28269.65
            },
            {
                "date": "2021-12",
                "Revenue": 32895.45,
                "Expenses": 36881.57,
                "Profit": 49559.47
            }
        ]
    },
    {
        "id": 43,
        "company": "TechCorp 43",
        "industry": "Automotive",
        "location": "Berlin",
        "employee_count": 3212,
        "year_founded": 2008,
        "status": "Inactive",
        "region": "South America",
        "sector": "Finance",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 19149.88,
                "Expenses": 40868.82,
                "Profit": 38531.28
            },
            {
                "date": "2023-10",
                "Revenue": 41982.59,
                "Expenses": 26037.52,
                "Profit": 2487.25
            },
            {
                "date": "2023-09",
                "Revenue": 29151.66,
                "Expenses": 46374.84,
                "Profit": 37371.79
            },
            {
                "date": "2023-08",
                "Revenue": 14244.86,
                "Expenses": 12754.57,
                "Profit": 9903.55
            },
            {
                "date": "2023-07",
                "Revenue": 11381.21,
                "Expenses": 22291.95,
                "Profit": 10627.9
            },
            {
                "date": "2023-06",
                "Revenue": 13497.02,
                "Expenses": 39795.65,
                "Profit": 17930.34
            },
            {
                "date": "2023-05",
                "Revenue": 27848.81,
                "Expenses": 10476.31,
                "Profit": 12391.59
            },
            {
                "date": "2023-04",
                "Revenue": 41356.29,
                "Expenses": 34919.42,
                "Profit": 38519.11
            },
            {
                "date": "2023-03",
                "Revenue": 47066.49,
                "Expenses": 2884.57,
                "Profit": 35897.13
            },
            {
                "date": "2023-02",
                "Revenue": 3513.18,
                "Expenses": 1593.69,
                "Profit": 18061.32
            },
            {
                "date": "2023-01",
                "Revenue": 14567.29,
                "Expenses": 31948.78,
                "Profit": 32305.48
            },
            {
                "date": "2022-12",
                "Revenue": 22560.35,
                "Expenses": 12047.15,
                "Profit": 39516.74
            },
            {
                "date": "2022-11",
                "Revenue": 28585.99,
                "Expenses": 16111.46,
                "Profit": 9967.44
            },
            {
                "date": "2022-10",
                "Revenue": 47947.76,
                "Expenses": 15049.12,
                "Profit": 27303.6
            },
            {
                "date": "2022-09",
                "Revenue": 32602.02,
                "Expenses": 41660.42,
                "Profit": 2873.41
            },
            {
                "date": "2022-08",
                "Revenue": 40578.13,
                "Expenses": 23193.69,
                "Profit": 22390.74
            },
            {
                "date": "2022-07",
                "Revenue": 14727.53,
                "Expenses": 17355.69,
                "Profit": 1673.16
            },
            {
                "date": "2022-06",
                "Revenue": 49706.58,
                "Expenses": 25624.65,
                "Profit": 2091.71
            },
            {
                "date": "2022-05",
                "Revenue": 44784.51,
                "Expenses": 48611.68,
                "Profit": 28568.64
            },
            {
                "date": "2022-04",
                "Revenue": 29115.5,
                "Expenses": 28453.5,
                "Profit": 42777.99
            },
            {
                "date": "2022-03",
                "Revenue": 45412.85,
                "Expenses": 21525.49,
                "Profit": 43495.95
            },
            {
                "date": "2022-02",
                "Revenue": 8382.46,
                "Expenses": 41889.03,
                "Profit": 32196.73
            },
            {
                "date": "2022-01",
                "Revenue": 47884.32,
                "Expenses": 38912.79,
                "Profit": 24571.39
            },
            {
                "date": "2021-12",
                "Revenue": 41717.97,
                "Expenses": 42979.52,
                "Profit": 19890.41
            }
        ]
    },
    {
        "id": 44,
        "company": "AutoDrive 44",
        "industry": "Food",
        "location": "Singapore",
        "employee_count": 2981,
        "year_founded": 2008,
        "status": "Inactive",
        "region": "Europe",
        "sector": "Technology",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 13590.73,
                "Expenses": 14840.84,
                "Profit": 1379.63
            },
            {
                "date": "2023-10",
                "Revenue": 23086.87,
                "Expenses": 13978.14,
                "Profit": 23717.26
            },
            {
                "date": "2023-09",
                "Revenue": 35401.34,
                "Expenses": 26827.68,
                "Profit": 1079.02
            },
            {
                "date": "2023-08",
                "Revenue": 22578.5,
                "Expenses": 43228.22,
                "Profit": 12581.81
            },
            {
                "date": "2023-07",
                "Revenue": 33371.63,
                "Expenses": 8587.3,
                "Profit": 28062.4
            },
            {
                "date": "2023-06",
                "Revenue": 45084.43,
                "Expenses": 2237.76,
                "Profit": 10962.23
            },
            {
                "date": "2023-05",
                "Revenue": 7880.45,
                "Expenses": 4518.63,
                "Profit": 10085.96
            },
            {
                "date": "2023-04",
                "Revenue": 27042.32,
                "Expenses": 33538.47,
                "Profit": 28950.45
            },
            {
                "date": "2023-03",
                "Revenue": 9598.54,
                "Expenses": 4461.64,
                "Profit": 22377.39
            },
            {
                "date": "2023-02",
                "Revenue": 38814.4,
                "Expenses": 31851.15,
                "Profit": 32132.28
            },
            {
                "date": "2023-01",
                "Revenue": 40179.24,
                "Expenses": 39773.1,
                "Profit": 38566.49
            },
            {
                "date": "2022-12",
                "Revenue": 33264.41,
                "Expenses": 41045.65,
                "Profit": 49781.04
            },
            {
                "date": "2022-11",
                "Revenue": 28959.26,
                "Expenses": 10870.25,
                "Profit": 15958.37
            },
            {
                "date": "2022-10",
                "Revenue": 2689.08,
                "Expenses": 33645.9,
                "Profit": 9971.69
            },
            {
                "date": "2022-09",
                "Revenue": 47383.55,
                "Expenses": 14720.48,
                "Profit": 20163.18
            },
            {
                "date": "2022-08",
                "Revenue": 46800.45,
                "Expenses": 47509.34,
                "Profit": 46553.05
            },
            {
                "date": "2022-07",
                "Revenue": 4918.02,
                "Expenses": 13318.91,
                "Profit": 44363.4
            },
            {
                "date": "2022-06",
                "Revenue": 48392.6,
                "Expenses": 1752.36,
                "Profit": 23417.91
            },
            {
                "date": "2022-05",
                "Revenue": 43711.65,
                "Expenses": 32110.64,
                "Profit": 1543.84
            },
            {
                "date": "2022-04",
                "Revenue": 13509.07,
                "Expenses": 42838.48,
                "Profit": 27932.94
            },
            {
                "date": "2022-03",
                "Revenue": 20887.38,
                "Expenses": 2813.88,
                "Profit": 23008.61
            },
            {
                "date": "2022-02",
                "Revenue": 12871.62,
                "Expenses": 32225.86,
                "Profit": 5820.17
            },
            {
                "date": "2022-01",
                "Revenue": 33891.7,
                "Expenses": 48225.58,
                "Profit": 20474.28
            },
            {
                "date": "2021-12",
                "Revenue": 25279.37,
                "Expenses": 24130.6,
                "Profit": 31018.36
            }
        ]
    },
    {
        "id": 45,
        "company": "AutoDrive 45",
        "industry": "Food",
        "location": "London",
        "employee_count": 4140,
        "year_founded": 1991,
        "status": "Inactive",
        "region": "Africa",
        "sector": "Energy",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 31989.06,
                "Expenses": 30087.73,
                "Profit": 41355.94
            },
            {
                "date": "2023-10",
                "Revenue": 34183.66,
                "Expenses": 41431.73,
                "Profit": 47236.94
            },
            {
                "date": "2023-09",
                "Revenue": 31249.99,
                "Expenses": 22576.55,
                "Profit": 17822.31
            },
            {
                "date": "2023-08",
                "Revenue": 32017.54,
                "Expenses": 26887.26,
                "Profit": 2172.22
            },
            {
                "date": "2023-07",
                "Revenue": 6975.88,
                "Expenses": 23355.47,
                "Profit": 26064.8
            },
            {
                "date": "2023-06",
                "Revenue": 3132.18,
                "Expenses": 31766.19,
                "Profit": 34390.01
            },
            {
                "date": "2023-05",
                "Revenue": 16934.93,
                "Expenses": 14909.36,
                "Profit": 21659.88
            },
            {
                "date": "2023-04",
                "Revenue": 35899.37,
                "Expenses": 48163.45,
                "Profit": 31017.41
            },
            {
                "date": "2023-03",
                "Revenue": 38438.82,
                "Expenses": 36046.03,
                "Profit": 34621.45
            },
            {
                "date": "2023-02",
                "Revenue": 6909.61,
                "Expenses": 1411.98,
                "Profit": 17257.18
            },
            {
                "date": "2023-01",
                "Revenue": 27944.73,
                "Expenses": 44821.37,
                "Profit": 32833.49
            },
            {
                "date": "2022-12",
                "Revenue": 19203.63,
                "Expenses": 45356.88,
                "Profit": 24849.52
            },
            {
                "date": "2022-11",
                "Revenue": 44915.31,
                "Expenses": 6696.48,
                "Profit": 21321.86
            },
            {
                "date": "2022-10",
                "Revenue": 20029.18,
                "Expenses": 49420.29,
                "Profit": 37327.05
            },
            {
                "date": "2022-09",
                "Revenue": 44109.68,
                "Expenses": 39656.93,
                "Profit": 32433.6
            },
            {
                "date": "2022-08",
                "Revenue": 26072.53,
                "Expenses": 49124.18,
                "Profit": 17340.06
            },
            {
                "date": "2022-07",
                "Revenue": 7372.29,
                "Expenses": 7412.72,
                "Profit": 14656.26
            },
            {
                "date": "2022-06",
                "Revenue": 43194.64,
                "Expenses": 16760.05,
                "Profit": 14932.67
            },
            {
                "date": "2022-05",
                "Revenue": 6808.15,
                "Expenses": 6089.63,
                "Profit": 36663.73
            },
            {
                "date": "2022-04",
                "Revenue": 45751.33,
                "Expenses": 36712.0,
                "Profit": 37081.51
            },
            {
                "date": "2022-03",
                "Revenue": 15462.13,
                "Expenses": 34273.58,
                "Profit": 35852.01
            },
            {
                "date": "2022-02",
                "Revenue": 4552.36,
                "Expenses": 6713.45,
                "Profit": 21623.7
            },
            {
                "date": "2022-01",
                "Revenue": 42345.98,
                "Expenses": 37842.74,
                "Profit": 45945.2
            },
            {
                "date": "2021-12",
                "Revenue": 38792.79,
                "Expenses": 35754.75,
                "Profit": 26218.36
            }
        ]
    },
    {
        "id": 46,
        "company": "AutoDrive 46",
        "industry": "Education",
        "location": "San Francisco",
        "employee_count": 2482,
        "year_founded": 2012,
        "status": "Active",
        "region": "North America",
        "sector": "Technology",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 13594.12,
                "Expenses": 31303.8,
                "Profit": 17049.64
            },
            {
                "date": "2023-10",
                "Revenue": 45144.03,
                "Expenses": 43167.9,
                "Profit": 25355.55
            },
            {
                "date": "2023-09",
                "Revenue": 47872.7,
                "Expenses": 21573.69,
                "Profit": 2856.6
            },
            {
                "date": "2023-08",
                "Revenue": 28942.5,
                "Expenses": 10088.37,
                "Profit": 17943.37
            },
            {
                "date": "2023-07",
                "Revenue": 28784.22,
                "Expenses": 45121.29,
                "Profit": 22798.67
            },
            {
                "date": "2023-06",
                "Revenue": 9637.02,
                "Expenses": 3797.35,
                "Profit": 43564.74
            },
            {
                "date": "2023-05",
                "Revenue": 27327.51,
                "Expenses": 42289.58,
                "Profit": 3043.84
            },
            {
                "date": "2023-04",
                "Revenue": 30943.85,
                "Expenses": 17181.61,
                "Profit": 21816.39
            },
            {
                "date": "2023-03",
                "Revenue": 5789.91,
                "Expenses": 41502.04,
                "Profit": 33372.39
            },
            {
                "date": "2023-02",
                "Revenue": 9330.59,
                "Expenses": 45821.15,
                "Profit": 26713.27
            },
            {
                "date": "2023-01",
                "Revenue": 27594.76,
                "Expenses": 2885.87,
                "Profit": 46221.28
            },
            {
                "date": "2022-12",
                "Revenue": 11136.2,
                "Expenses": 6408.26,
                "Profit": 24117.73
            },
            {
                "date": "2022-11",
                "Revenue": 16087.25,
                "Expenses": 5796.98,
                "Profit": 19782.75
            },
            {
                "date": "2022-10",
                "Revenue": 48486.42,
                "Expenses": 27224.6,
                "Profit": 10220.77
            },
            {
                "date": "2022-09",
                "Revenue": 35676.15,
                "Expenses": 18306.02,
                "Profit": 24699.72
            },
            {
                "date": "2022-08",
                "Revenue": 29002.69,
                "Expenses": 17243.77,
                "Profit": 17208.42
            },
            {
                "date": "2022-07",
                "Revenue": 22430.46,
                "Expenses": 48228.4,
                "Profit": 37458.27
            },
            {
                "date": "2022-06",
                "Revenue": 13031.7,
                "Expenses": 49925.08,
                "Profit": 1167.96
            },
            {
                "date": "2022-05",
                "Revenue": 22828.47,
                "Expenses": 3675.72,
                "Profit": 12252.64
            },
            {
                "date": "2022-04",
                "Revenue": 31867.2,
                "Expenses": 27851.76,
                "Profit": 18795.76
            },
            {
                "date": "2022-03",
                "Revenue": 20414.8,
                "Expenses": 49227.97,
                "Profit": 39485.81
            },
            {
                "date": "2022-02",
                "Revenue": 32766.68,
                "Expenses": 28177.91,
                "Profit": 47740.33
            },
            {
                "date": "2022-01",
                "Revenue": 33408.93,
                "Expenses": 19236.35,
                "Profit": 15258.9
            },
            {
                "date": "2021-12",
                "Revenue": 3984.33,
                "Expenses": 13388.56,
                "Profit": 10350.49
            }
        ]
    },
    {
        "id": 47,
        "company": "TechCorp 47",
        "industry": "Healthcare",
        "location": "Dubai",
        "employee_count": 630,
        "year_founded": 1992,
        "status": "Active",
        "region": "Europe",
        "sector": "Education",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 12658.9,
                "Expenses": 47252.56,
                "Profit": 41349.35
            },
            {
                "date": "2023-10",
                "Revenue": 16802.42,
                "Expenses": 44887.73,
                "Profit": 5286.54
            },
            {
                "date": "2023-09",
                "Revenue": 42655.93,
                "Expenses": 19524.77,
                "Profit": 23933.48
            },
            {
                "date": "2023-08",
                "Revenue": 40590.96,
                "Expenses": 11344.56,
                "Profit": 34182.44
            },
            {
                "date": "2023-07",
                "Revenue": 27448.82,
                "Expenses": 45841.09,
                "Profit": 24727.27
            },
            {
                "date": "2023-06",
                "Revenue": 23366.23,
                "Expenses": 14732.52,
                "Profit": 11669.91
            },
            {
                "date": "2023-05",
                "Revenue": 28087.39,
                "Expenses": 35954.44,
                "Profit": 46377.53
            },
            {
                "date": "2023-04",
                "Revenue": 14485.25,
                "Expenses": 39078.19,
                "Profit": 18468.78
            },
            {
                "date": "2023-03",
                "Revenue": 45676.0,
                "Expenses": 49940.7,
                "Profit": 22734.63
            },
            {
                "date": "2023-02",
                "Revenue": 15176.21,
                "Expenses": 27499.07,
                "Profit": 19816.17
            },
            {
                "date": "2023-01",
                "Revenue": 35262.22,
                "Expenses": 22303.71,
                "Profit": 11534.24
            },
            {
                "date": "2022-12",
                "Revenue": 47165.24,
                "Expenses": 13684.14,
                "Profit": 9775.78
            },
            {
                "date": "2022-11",
                "Revenue": 26639.02,
                "Expenses": 31729.06,
                "Profit": 42599.41
            },
            {
                "date": "2022-10",
                "Revenue": 6024.63,
                "Expenses": 40972.69,
                "Profit": 26410.34
            },
            {
                "date": "2022-09",
                "Revenue": 29875.99,
                "Expenses": 1482.94,
                "Profit": 15072.16
            },
            {
                "date": "2022-08",
                "Revenue": 49953.08,
                "Expenses": 43040.86,
                "Profit": 44050.77
            },
            {
                "date": "2022-07",
                "Revenue": 30011.36,
                "Expenses": 3701.67,
                "Profit": 12211.07
            },
            {
                "date": "2022-06",
                "Revenue": 1403.35,
                "Expenses": 4534.09,
                "Profit": 38323.41
            },
            {
                "date": "2022-05",
                "Revenue": 39243.96,
                "Expenses": 39903.09,
                "Profit": 15678.98
            },
            {
                "date": "2022-04",
                "Revenue": 16873.78,
                "Expenses": 32602.57,
                "Profit": 29281.63
            },
            {
                "date": "2022-03",
                "Revenue": 39743.72,
                "Expenses": 13096.24,
                "Profit": 35020.07
            },
            {
                "date": "2022-02",
                "Revenue": 46581.38,
                "Expenses": 42917.92,
                "Profit": 7771.45
            },
            {
                "date": "2022-01",
                "Revenue": 47615.48,
                "Expenses": 32135.82,
                "Profit": 35652.74
            },
            {
                "date": "2021-12",
                "Revenue": 1628.4,
                "Expenses": 35358.74,
                "Profit": 16365.6
            }
        ]
    },
    {
        "id": 48,
        "company": "SportFit 48",
        "industry": "Technology",
        "location": "Sydney",
        "employee_count": 980,
        "year_founded": 2006,
        "status": "Active",
        "region": "Europe",
        "sector": "Automotive",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 42288.11,
                "Expenses": 34274.49,
                "Profit": 7930.52
            },
            {
                "date": "2023-10",
                "Revenue": 17684.82,
                "Expenses": 49358.86,
                "Profit": 5064.3
            },
            {
                "date": "2023-09",
                "Revenue": 18379.86,
                "Expenses": 5399.5,
                "Profit": 14915.01
            },
            {
                "date": "2023-08",
                "Revenue": 39999.55,
                "Expenses": 16004.66,
                "Profit": 45323.83
            },
            {
                "date": "2023-07",
                "Revenue": 28038.83,
                "Expenses": 18467.43,
                "Profit": 6704.37
            },
            {
                "date": "2023-06",
                "Revenue": 45866.81,
                "Expenses": 21540.29,
                "Profit": 16334.06
            },
            {
                "date": "2023-05",
                "Revenue": 38066.94,
                "Expenses": 39477.47,
                "Profit": 29844.05
            },
            {
                "date": "2023-04",
                "Revenue": 8800.49,
                "Expenses": 37649.9,
                "Profit": 45645.36
            },
            {
                "date": "2023-03",
                "Revenue": 13690.66,
                "Expenses": 2172.0,
                "Profit": 45060.87
            },
            {
                "date": "2023-02",
                "Revenue": 10926.14,
                "Expenses": 5010.55,
                "Profit": 32953.0
            },
            {
                "date": "2023-01",
                "Revenue": 45102.19,
                "Expenses": 22559.73,
                "Profit": 10507.76
            },
            {
                "date": "2022-12",
                "Revenue": 29933.13,
                "Expenses": 40767.08,
                "Profit": 44246.48
            },
            {
                "date": "2022-11",
                "Revenue": 8866.65,
                "Expenses": 31714.71,
                "Profit": 39235.27
            },
            {
                "date": "2022-10",
                "Revenue": 24063.02,
                "Expenses": 10026.78,
                "Profit": 22904.08
            },
            {
                "date": "2022-09",
                "Revenue": 45166.13,
                "Expenses": 18191.81,
                "Profit": 21198.65
            },
            {
                "date": "2022-08",
                "Revenue": 10452.23,
                "Expenses": 20955.49,
                "Profit": 21718.3
            },
            {
                "date": "2022-07",
                "Revenue": 6033.61,
                "Expenses": 25399.67,
                "Profit": 11463.46
            },
            {
                "date": "2022-06",
                "Revenue": 40925.38,
                "Expenses": 45003.11,
                "Profit": 45498.79
            },
            {
                "date": "2022-05",
                "Revenue": 38651.71,
                "Expenses": 42151.97,
                "Profit": 30095.07
            },
            {
                "date": "2022-04",
                "Revenue": 34746.32,
                "Expenses": 10441.12,
                "Profit": 41131.03
            },
            {
                "date": "2022-03",
                "Revenue": 10324.42,
                "Expenses": 37307.72,
                "Profit": 22479.42
            },
            {
                "date": "2022-02",
                "Revenue": 36864.89,
                "Expenses": 6477.51,
                "Profit": 48224.49
            },
            {
                "date": "2022-01",
                "Revenue": 24790.68,
                "Expenses": 42947.89,
                "Profit": 26274.88
            },
            {
                "date": "2021-12",
                "Revenue": 8816.61,
                "Expenses": 48817.94,
                "Profit": 16396.99
            }
        ]
    },
    {
        "id": 49,
        "company": "AutoDrive 49",
        "industry": "Healthcare",
        "location": "Berlin",
        "employee_count": 1467,
        "year_founded": 2011,
        "status": "Pending",
        "region": "Asia",
        "sector": "Travel",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 33283.77,
                "Expenses": 36311.15,
                "Profit": 48313.43
            },
            {
                "date": "2023-10",
                "Revenue": 49987.55,
                "Expenses": 28356.27,
                "Profit": 8374.56
            },
            {
                "date": "2023-09",
                "Revenue": 12175.71,
                "Expenses": 42547.25,
                "Profit": 15339.79
            },
            {
                "date": "2023-08",
                "Revenue": 24732.09,
                "Expenses": 34450.24,
                "Profit": 34631.29
            },
            {
                "date": "2023-07",
                "Revenue": 44639.29,
                "Expenses": 24572.18,
                "Profit": 22766.56
            },
            {
                "date": "2023-06",
                "Revenue": 23419.0,
                "Expenses": 36027.45,
                "Profit": 14003.38
            },
            {
                "date": "2023-05",
                "Revenue": 19945.12,
                "Expenses": 44435.74,
                "Profit": 20754.39
            },
            {
                "date": "2023-04",
                "Revenue": 38602.16,
                "Expenses": 46865.2,
                "Profit": 34229.62
            },
            {
                "date": "2023-03",
                "Revenue": 3686.79,
                "Expenses": 16686.5,
                "Profit": 36959.88
            },
            {
                "date": "2023-02",
                "Revenue": 32808.02,
                "Expenses": 14269.59,
                "Profit": 38761.98
            },
            {
                "date": "2023-01",
                "Revenue": 10851.37,
                "Expenses": 14956.86,
                "Profit": 24258.02
            },
            {
                "date": "2022-12",
                "Revenue": 13919.7,
                "Expenses": 27844.35,
                "Profit": 1009.69
            },
            {
                "date": "2022-11",
                "Revenue": 32282.91,
                "Expenses": 47948.32,
                "Profit": 44668.71
            },
            {
                "date": "2022-10",
                "Revenue": 34161.2,
                "Expenses": 2368.41,
                "Profit": 27476.95
            },
            {
                "date": "2022-09",
                "Revenue": 25328.02,
                "Expenses": 7550.99,
                "Profit": 1392.37
            },
            {
                "date": "2022-08",
                "Revenue": 34689.31,
                "Expenses": 16084.24,
                "Profit": 15748.67
            },
            {
                "date": "2022-07",
                "Revenue": 2266.57,
                "Expenses": 31406.96,
                "Profit": 43659.9
            },
            {
                "date": "2022-06",
                "Revenue": 7777.7,
                "Expenses": 13119.93,
                "Profit": 11168.29
            },
            {
                "date": "2022-05",
                "Revenue": 35905.6,
                "Expenses": 29333.89,
                "Profit": 38066.88
            },
            {
                "date": "2022-04",
                "Revenue": 28410.13,
                "Expenses": 15682.18,
                "Profit": 39942.06
            },
            {
                "date": "2022-03",
                "Revenue": 46452.53,
                "Expenses": 39619.16,
                "Profit": 45067.74
            },
            {
                "date": "2022-02",
                "Revenue": 19775.62,
                "Expenses": 45056.84,
                "Profit": 49917.3
            },
            {
                "date": "2022-01",
                "Revenue": 47755.36,
                "Expenses": 42811.85,
                "Profit": 9135.47
            },
            {
                "date": "2021-12",
                "Revenue": 29444.85,
                "Expenses": 33182.12,
                "Profit": 14134.89
            }
        ]
    },
    {
        "id": 50,
        "company": "AutoDrive 50",
        "industry": "Food",
        "location": "New York",
        "employee_count": 4115,
        "year_founded": 2002,
        "status": "Pending",
        "region": "Europe",
        "sector": "Media",
        "monthlyData": [
            {
                "date": "2023-11",
                "Revenue": 15437.45,
                "Expenses": 7595.38,
                "Profit": 41952.05
            },
            {
                "date": "2023-10",
                "Revenue": 23529.74,
                "Expenses": 8593.01,
                "Profit": 49647.82
            },
            {
                "date": "2023-09",
                "Revenue": 1254.19,
                "Expenses": 29742.02,
                "Profit": 43258.14
            },
            {
                "date": "2023-08",
                "Revenue": 22082.92,
                "Expenses": 11231.44,
                "Profit": 36535.69
            },
            {
                "date": "2023-07",
                "Revenue": 3407.38,
                "Expenses": 46857.65,
                "Profit": 15255.69
            },
            {
                "date": "2023-06",
                "Revenue": 3764.55,
                "Expenses": 33121.12,
                "Profit": 32657.87
            },
            {
                "date": "2023-05",
                "Revenue": 45274.39,
                "Expenses": 14010.19,
                "Profit": 6022.79
            },
            {
                "date": "2023-04",
                "Revenue": 17775.48,
                "Expenses": 33380.68,
                "Profit": 11434.49
            },
            {
                "date": "2023-03",
                "Revenue": 31307.26,
                "Expenses": 42649.42,
                "Profit": 3069.07
            },
            {
                "date": "2023-02",
                "Revenue": 13623.28,
                "Expenses": 45583.62,
                "Profit": 49764.37
            },
            {
                "date": "2023-01",
                "Revenue": 29542.26,
                "Expenses": 6911.29,
                "Profit": 4470.31
            },
            {
                "date": "2022-12",
                "Revenue": 6362.42,
                "Expenses": 42288.14,
                "Profit": 11492.65
            },
            {
                "date": "2022-11",
                "Revenue": 42080.3,
                "Expenses": 31844.65,
                "Profit": 7946.76
            },
            {
                "date": "2022-10",
                "Revenue": 11340.54,
                "Expenses": 35551.57,
                "Profit": 32735.09
            },
            {
                "date": "2022-09",
                "Revenue": 33557.0,
                "Expenses": 12642.89,
                "Profit": 10393.03
            },
            {
                "date": "2022-08",
                "Revenue": 31388.23,
                "Expenses": 37876.72,
                "Profit": 47455.09
            },
            {
                "date": "2022-07",
                "Revenue": 5588.04,
                "Expenses": 19233.62,
                "Profit": 44176.35
            },
            {
                "date": "2022-06",
                "Revenue": 33848.23,
                "Expenses": 40922.82,
                "Profit": 28367.3
            },
            {
                "date": "2022-05",
                "Revenue": 32798.87,
                "Expenses": 28371.0,
                "Profit": 39859.07
            },
            {
                "date": "2022-04",
                "Revenue": 42139.81,
                "Expenses": 13470.11,
                "Profit": 39847.77
            },
            {
                "date": "2022-03",
                "Revenue": 20110.83,
                "Expenses": 38872.59,
                "Profit": 31986.9
            },
            {
                "date": "2022-02",
                "Revenue": 7203.93,
                "Expenses": 48083.01,
                "Profit": 13414.46
            },
            {
                "date": "2022-01",
                "Revenue": 22335.05,
                "Expenses": 28744.79,
                "Profit": 25454.96
            },
            {
                "date": "2021-12",
                "Revenue": 11931.27,
                "Expenses": 7466.96,
                "Profit": 26559.08
            }
        ]
    }
]

  export default data;
