import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  // Define your application state types here
  user: any; // Replace 'any' with your user type
  isLoading: boolean;
}

interface AppAction {
  type: string;
  payload?: any; // Replace 'any' with a more specific type if possible
}

const initialState: AppState = {
  user: null,
  isLoading: false,
};

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<AppAction> } | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};