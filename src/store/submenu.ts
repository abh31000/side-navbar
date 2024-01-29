import { create } from "zustand";

interface SubState {
    sub: number,
    changeSub: (num:number) => void
} 

const useStore = create<SubState>()((set) => ({
    sub: 1,
    changeSub: (num) => set({sub: num})
}))

export { useStore }