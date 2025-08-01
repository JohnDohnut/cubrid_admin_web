import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    connection: {open: false},
    userManagement: {open: false},
    userDB: {open: false},
    loginDB: {open: false},
    compactDB: {open: false},
    checkDB: {open: false},
    backupDB: {open: false},
    optimizeDB: {open: false},
    copyDB: {open: false},
    deleteDB: {open: false},
    renameDB: {open: false},
    restoreDB: {open: false},
    planDump: {open: false},
    paramDump: {open: false},
    changeCMPassword: {open: false},
    property: {open: false},
    about: false,
    loading: false,
    version: false


};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        setConnection: (state, action) => {
            state.connection = action.payload;
        },
        setUserManagement: (state, action) => {
            state.userManagement = action.payload;
        },
        setUserDB: (state, action) => {
            state.userDB = action.payload;
        },
        setLoginDB: (state, action) => {
            state.loginDB = action.payload;
        },
        setCompactDB: (state, action) => {
          state.compactDB = action.payload;
        },
        setCheckDB: (state, action) => {
            state.checkDB = action.payload;
        },
        setBackupDB: (state, action) => {
            state.backupDB = action.payload;
        },
        setOptimizeDB: (state, action) => {
            state.optimizeDB = action.payload;
        },
        setCopyDB: (state, action) => {
            state.copyDB = action.payload;
        },
        setDeleteDB: (state, action) => {
            state.deleteDB = action.payload;
        },
        setRenameDB: (state, action) => {
            state.renameDB = action.payload;
        },
        setRestoreDB: (state, action) => {
            state.restoreDB = action.payload;
        },
        setPlanDump: (state, action) => {
            state.planDump = action.payload;
        },
        setParamDump: (state, action) => {
            state.paramDump = action.payload;
        },
        setChangeCMPassword: (state, action) => {
            state.changeCMPassword = action.payload;
        },
        setProperty: (state, action) => {
            state.property = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAbout: (state, action) => {
            state.about = action.payload;
        },
        setVersion: (state, action) => {
            state.version = action.payload;
        }
    },
});

export const { setConnection, setCompactDB, setCheckDB, setBackupDB,
    setOptimizeDB, setCopyDB, setDeleteDB, setRenameDB,
    setUserManagement, setAbout, setVersion, setProperty, setParamDump, setChangeCMPassword, setPlanDump, setRestoreDB, setUserDB, setLoginDB,  setLoading } = dialogSlice.actions;
export default dialogSlice.reducer;