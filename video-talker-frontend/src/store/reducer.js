import { combineReducers } from 'redux';
import dashboardReducer from './reducers/dashboardReducer';

export default combineReducers({
  dashboard: dashboardReducer
});
