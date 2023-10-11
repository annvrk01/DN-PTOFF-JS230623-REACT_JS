import { createSlice } from '@reduxjs/toolkit';
import { fetchRequest } from '../api/request';


const initialState = {
    data: [
        {
            id: 1,
            title: 'Peraichi request',
            status: 'New',
            priority: 'Normal',
            confidential: '',
            requestedDate: '2023/10/01',
            deadline: '2023/10/01',
            note: 'None',
            content: 'Test',
        }
    ],
    selectAll: false,
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
}

const requestSlice = createSlice({
    name: 'requests',
    initialState: initialState,
    reducers: {
        addRequest(state, action) {
            console.log('adding request');
            state.data.push(action.payload);
        },
        removeRequest(state, action) {
            console.log('remove request');
            state.data.splice(action.payload, 1);
            console.log(action.payload);
        },
        editRequest(state, action) {
            const request = action.payload
            const indexOf = state.data.indexOf(i => i.id === request.id);
            if (indexOf > -1) {
                const targetRequest = state.data[indexOf];
                targetRequest.title = request.title;
                targetRequest.status = request.status;
                targetRequest.priority = request.priority;
                targetRequest.confidential = request.confidential;
                targetRequest.requestedDate = request.requestedDate;
                targetRequest.deadline = request.deadline;
                targetRequest.note = request.note;
                targetRequest.content = request.content;
                state.data[indexOf] = targetRequest
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchRequest.fulfilled, (state, action) => {
                state.push(action.payload);
            });
        },
    }
}
);

const { actions, reducer } = requestSlice;
export const { addRequest, removeRequest } = actions;
export default reducer;
