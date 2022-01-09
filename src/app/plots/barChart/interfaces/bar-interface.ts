export interface BarInterface{
    dataSet:DataSet
    title: string,
    xValues: number[],
    textdataSetColor: string,
    labelsXColor: string,
    gridXColor: string,
    labelsYColor: string,
    gridYColor: string
}

export interface DataSet{
    label: string,
    backgroundColor: string,
    data: number[]

}




/*


old

title: string,
    dataSetName: string,
    xValues: number[],
    yValues: number[],
    dataSetColor: string,
    textdataSetColor: string,
    labelsXColor: string,
    gridXColor: string,
    labelsYColor: string,
    gridYColor: string

*/