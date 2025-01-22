import React, {useContext, useEffect} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Outlet} from 'react-router';

import Navbar from './components/navbar/Navbar';
import {ThemeContext} from './contexts/themeContext';
import './App.css';

const queryClient = new QueryClient()

export default function App() {
    const {currentTheme} = useContext(ThemeContext);

    return (
        <QueryClientProvider client={queryClient}>
            <div className={`app app-${currentTheme}`}>
                <Navbar/>
                <Outlet/>
            </div>
        </QueryClientProvider>
    );
}
