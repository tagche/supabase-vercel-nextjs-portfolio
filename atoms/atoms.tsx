import { atom } from "recoil";

export const loadingState = atom<string>({
    key: 'loadingState', 
    default: 'start',
});

export const quizState = atom<number>({
    key: 'quizState', 
    default: 0,
});

export type barChartTypes = {
    series: { [key: string]: any }
    height: number
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
    }
})

export const curriculumStateAtom = atom<string[]>({
    key: 'curriculumStateAtom', 
    default: ["英語", "数学", "国語", "理科", "社会"]
})