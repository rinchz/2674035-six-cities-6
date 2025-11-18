import { Offer, offers as testOffers } from './mocks/offers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  city: string;
  offers: Offer[];
}

const initialState: State = {
  city: 'Paris',
  offers: testOffers,
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
  },
});

export const { changeCity, setOffers } = appSlice.actions;
export default appSlice.reducer;
