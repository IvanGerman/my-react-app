import { createStore, combineReducers, applyMiddleware, compose }  from "redux" ;
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


let reducers = combineReducers( {
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
// sozdaem store dla react dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// sozdaem store obichnij
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;