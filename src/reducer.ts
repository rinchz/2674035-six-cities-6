import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer, offers as testOffers } from './mocks/offers';

interface State {
  city: string;
  offers: Offer[];
  sortType: string;
}

const initialState: State = {
  city: 'Paris',
  offers: testOffers,
  sortType: 'Popular',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    setSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
  },
});

export const { changeCity, setOffers, setSortType } = appSlice.actions;
export default appSlice.reducer;
