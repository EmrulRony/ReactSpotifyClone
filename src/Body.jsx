import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = () => {
    const [{ selected_playlist }] = useDataLayerValue();
    return (
        <div className='body'>
            <Header />

            <div className="body__info">
                <img src={selected_playlist?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>{selected_playlist?.type}</strong>
                    <h2>{selected_playlist?.name}</h2>
                    <p>{selected_playlist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick=''
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {selected_playlist?.tracks.items.map((item) => (
                    <SongRow playSong={''} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
