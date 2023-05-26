import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaders: [
    {id: 1, title: "Потолочная плита Байкал", img: "./images/leaders/bajkal.png"},
    {id: 2, title: "Панель стальная tegular", img: "./images/leaders/metal.png"},
    {id: 3, title: "Рейка A100AS", img: "./images/leaders/slat.png"},
    {id: 4, title: "Грильято белый 100х100", img: "./images/leaders/grid.png"}
  ]
};

const leadersSlice = createSlice({
  name: 'leaders',
  initialState,
})

const selectLeaders = state => state.leaders.leaders;

export { selectLeaders };
export default leadersSlice.reducer;
