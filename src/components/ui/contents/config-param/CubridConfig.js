import React, {useEffect, useState} from 'react';
import { Card } from 'antd';
import Editor from '@monaco-editor/react';
import {getCubridConfig, setCubridConfig} from "@/utils/api";
import {getAPIParam} from "@/utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {deleteContents, deleteSignalSavePanel, setActivePanel, setUnsavedPanels} from "@/state/generalSlice";
import {setLoading} from "@/state/dialogSlice";
import ConfirmAction from "@/components/ui/dialogs/ConfirmAction";

const CodeEditorPage = () => {
    const {contents, activePanel, unsavedPanels, signalSavePanel} = useSelector(state => state.general);
    const dispatch = useDispatch()
    const [server, setServer] = useState({})
    const {servers} = useSelector(state => state);
    const [isChange, setIsChange] = useState(false);
    const [code, setCode] = useState('// Write your JavaScript code here');

    useEffect(() => {
        const content = contents.find(res => res.key === activePanel)
        const server = servers.find(res => res.serverId === content.serverId)
        setServer(server);
        dispatch(setLoading(true))
        getCubridConfig({...getAPIParam(server)}).then(res => {
            dispatch(setLoading(false))
            if(res.status) {
                setCode(res.result.conflist[0].confdata.join("\r\n"));
            }
        })
    },[])

    const handleChange = (value)=>{
        setCode(value)
        setIsChange(true)

    }
    useEffect(()=>{
        if(isChange){
            dispatch(setUnsavedPanels([...unsavedPanels, activePanel]))
        }
    },[isChange])

    useEffect(()=>{
        if(signalSavePanel.includes(activePanel)){
            ConfirmAction({
                content: "Do you want to save changes?",
                onOk: () => {
                    dispatch(setLoading(true))
                    setCubridConfig({...getAPIParam(server), confdata: code.split("\r\n")}).then(res =>{
                        dispatch(setLoading(false))
                        if(res.status) {
                            removePanel()
                        }
                    })
                },
                onCancel: () => {
                    removePanel()
                }
            })
        }
    },[signalSavePanel])

    const removePanel = ()=>{
        if(contents.length > 1) {
            const activeKey = contents.at(-2).key;
            dispatch(setActivePanel(activeKey));
        }
        dispatch(deleteContents(activePanel));
        dispatch(deleteSignalSavePanel(activePanel));
    }


    return (
                <Editor
                    height="100%"
                    defaultLanguage="ini"
                    value={code}
                    theme="vs-white"
                    onChange={handleChange}
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        automaticLayout: true,
                    }}
                />
    );
};

export default CodeEditorPage;
