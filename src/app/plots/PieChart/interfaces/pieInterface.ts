export interface PieInterface{
    dataSet:PieDataSet,
    labels: string[],
    color: string,
    title: string
}

export interface PieDataSet{
    backgroundColor: string[],
    data: number[]
}