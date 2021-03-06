import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { SortInvestors } from '../Services/Enums';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  apply: ['filters']
});

export const InvestorsFilterTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  sortBy: SortInvestors.registrationDate,
  country: '',
  name: ''
});

export const apply = (state, action) => {
  const { sortBy, country, name } = action.filters;
  return state.merge({ sortBy, country, name });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APPLY]: apply
});