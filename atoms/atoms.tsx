import { atom, selector, useRecoilValue } from "recoil";

export const loadingState = atom<string>({
    key: 'loadingState', 
    default: 'start',
});

export const quizState = atom<number>({
    key: 'quizState', 
    default: 0,
});

export type barChartSeriesTypes = {
    id: number
    label: string
    data: number[]
}

export type barChartTypes = {
    series: barChartSeriesTypes[]
    height?: number
}

export const barChartsParamsAtom = atom<barChartTypes>({
    key: 'barChartsParamsAtom', 
    default: {
        series: [
            { id: 1, data: [80, 75, 91, 65, 52], label: 'Aさん' },
            { id: 2, data: [92, 85, 55, 72, 38], label: 'Bさん' },
            { id: 3, data: [60, 70, 95, 60, 80], label: 'Cさん' },
        ],
        height: 400,
    },
})

export const barChartsParamsSelector = selector<barChartTypes | any>({
    key: 'barChartsParamsSelector',
    get: ({get}) => get(barChartsParamsAtom),
    set: ({get, set}, newValue: {id: number, key: string, value: string}) => {
        let rows = get(barChartsParamsAtom);
        let filterRows = new Object
        let newSetRows = new Array

        // 更新する1行データを生成
        rows.series.map((e: barChartSeriesTypes) => {
            if(e.id !== newValue.id) return false

            if(newValue.key === 'label'){
                // label
                filterRows = {...e, [newValue.key]:newValue.value}
            }else{
                // data[]
                const num = Number(newValue.key.charAt(newValue.key.length -1)) - 1;
                let result = new Array
                e.data.map((el, i) => {
                    if(i == num) result.push(newValue.value)
                    else result.push(el)
                })
                filterRows = {...e, data:result}
            }
        });
        
        // 更新内容を含めたseriesデータを生成
        rows.series.map((e: barChartSeriesTypes) => {
            if(e.id === newValue.id) newSetRows.push(filterRows)
            else newSetRows.push(e)
        })

        // 上記seriesを含めた全データを生成
        rows = {...rows, series:newSetRows}

        console.log(rows, newSetRows);
        set(barChartsParamsAtom, rows)
    }
});
  
export const curriculumStateAtom = atom<string[]>({
    key: 'curriculumStateAtom', 
    default: ["英語", "数学", "国語", "理科", "社会"]
})