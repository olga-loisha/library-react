import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';

import './App.css';
import Navbar from './components/navbar/Navbar';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar/>
        <Outlet/>
      </div>
    </QueryClientProvider>
  );
}
