import React, { createContext, useState } from 'react';

export const LoadingContext = createContext({
  loadingCount: 0,
  loadingCleaners: false,
  showLoading: () => { },
  hideLoading: () => { },
  showCleanersLoading: () => { },
  hideCleanersLoading: () => { }
});

const LoadingProvider = ({ children }) => {

  const showLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount: prevState.loadingCount + 1
      }
    });
  };

  const hideLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount:
          prevState.loadingCount > 0 ? prevState.loadingCount - 1 : 0
      }
    });
  };

  const showCleanersLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCleaners: true
      }
    });
  }

  const hideCleanersLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCleaners: false
      }
    });
  }

  const loadingState = {
    loadingCount: 0,
    loadingCleaners: false,
    showLoading,
    hideLoading,
    showCleanersLoading,
    hideCleanersLoading
  }

  const [loading, toggleLoading] = useState(loadingState);

  return (
    <LoadingContext.Provider value={loading}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider;