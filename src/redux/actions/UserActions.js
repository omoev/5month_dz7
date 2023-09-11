// redux/usersSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронное действие для загрузки пользователей
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
        const users = await response.json();
        return users;
    } else {
        throw new Error('Failed to fetch users');
    }
});

// Создаем срез пользователей с начальным состоянием
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default usersSlice.reducer;
