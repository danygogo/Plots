export interface PieInterface{
    dataSet:PieDataSet,
    labels: string[],
    title: string
}

export interface PieDataSet{
    backgroundColor: string[],
    data: number[]
}