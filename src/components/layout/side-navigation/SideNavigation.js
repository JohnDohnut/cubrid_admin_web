import React from 'react';
import {
    CloseCircleOutlined, ExpandAltOutlined,
    MinusSquareOutlined,
} from '@ant-design/icons';
import {Radio} from 'antd';

import styles from '@/components/layout/layout.module.css';
import IconButton from "@/components/ui/buttons/IconButton";
import SideNavigation from "@/components/layout/side-navigation/SideNavigation";
import ServerTree from "@/components/ui/trees/ServerTree";
// import SideTreeBackup from "@/components/ui/trees/ServerTree";

const App = () => {
    return (

        <div className={"sidebar"}>
            <div className={styles.top__menu}>
                <div className={styles.mode__view}>
                    <Radio.Group
                        defaultValue={"host"}
                    >
                        <Radio.Button value="host">Host</Radio.Button>
                        <Radio.Button value="monitor">Monitor</Radio.Button>
                    </Radio.Group>
                </div>
                <div className={styles.left__menu__button}>
                    <IconButton>
                        <MinusSquareOutlined />
                    </IconButton>
                    <IconButton>
                        <CloseCircleOutlined />
                    </IconButton>
                    <IconButton>
                        <ExpandAltOutlined />
                    </IconButton>


                </div>
            </div>
            <div className={styles.tree__container}>
                <ServerTree/>
            </div>

            {/*/!*<div className={styles.side__property}>*!/*/}
            {/*/!*    <SideProperty/>*!/*/}
            {/*/!*</div>*!/*/}

        </div>

    );
};
export default App;