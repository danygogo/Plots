export interface BarInterface{
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
}









//old way

/*
export interface BarInterface{
    data: Data,
    options: Options

}

export interface Data{
    labels: number[], // | string[] 
    datasets: Datasets[]
}

export interface Datasets{
    label: string,
    backgroundColor: string,
    data: number[]
}

export interface Options{
    plugins: Plugins,
    scales: Scales
}

export interface Plugins{
    lengend: Legend
}

export interface Legend{
    labels: Labels
}

export interface Labels{
    color: string
}

export interface Scales{
    x: X,
    y: Y
}

export interface X{
    ticks: Thicks,
    grid: Grid
}

export interface Y{
    ticks: Thicks,
    grid: Grid
}

export interface Thicks{
    color: string
}

export interface Grid{
    color: string
}


*/