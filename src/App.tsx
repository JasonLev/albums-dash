import React from "react";
import useJSONPlaceholderAPI from "./hooks/useJSONPlaceholderAPI";
import ErrorMessage from "./components/ErrorMessage";
import Dashboard from "./components/Dashboard";

function App() {
  const { isLoading, isError } = useJSONPlaceholderAPI();
  if (isError) {
    return <ErrorMessage />;
  }

  return <>{isLoading ? <div>Loading...</div> : <Dashboard />}</>;
}

export default App;
