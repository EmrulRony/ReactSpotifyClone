import React from 'react';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

import './Sidebar.css'

const Sidebar = () => {
    const [{ playLists }] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
            <strong className="sidebar_title">PlayLists</strong>
            <hr />
            {playLists?.map(item => <SidebarOption title={item.name} />)}
        </div>
    )
}

export default Sidebar
