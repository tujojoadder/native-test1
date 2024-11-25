import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the state type
interface CounterState {
  count: number;
  value: number;
}
const initialState:CounterState = {
  count: 0,
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload; // Action payload is strictly typed as `number`
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice