import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../pages/auth/AuthPage';
import HomePage from '../pages/home/HomePage';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <AuthPage />
                </PublicRoute>
            } />
            <Route path="/registro" element={
                <PublicRoute>
                    <AuthPage />
                </PublicRoute>
            } />
            <Route path="/" element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;