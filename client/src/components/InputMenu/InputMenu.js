import React, { useState, useContext } from 'react';
import { ChatContext } from '../../chatContext';

import Gif from '../gifSearch/gif';
import ImageInput from '../ImageInput/ImageInput';

import GifIcon from '@material-ui/icons/Gif';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CloseIcon from '@material-ui/icons/Close';
import sticker from '../../assets/images/sticker.png'

import './InputMenu.scss';

const InputMenu = () => {
	const [clickGif, setClickGif] = useState(false);
	const [clickImg, setClickImg] = useState(false);
	const [clickStickers, setClickStickers] = useState(false);
	const { theme } = useContext(ChatContext);
	const [themeDark] = theme;

	const handleInputs = (input) => {
		if (input === 'gif') {
			setClickGif(true); setClickImg(false); setClickStickers(false)
		} else if (input === 'img') {
			setClickImg(true); setClickGif(false); setClickStickers(false);
		} else {
			setClickStickers(true); setClickImg(false); setClickGif(false);
		}
	}

	const handleClose = () => {
		setClickImg(false); setClickGif(false); setClickStickers(false);
	}

	return (
		<div className={themeDark ? 'inputMenu inputMenu__dark' : 'inputMenu inputMenu__light'}>

			<div className="inputMenu__inner">
				<div>
					<GifIcon onClick={() => handleInputs('gif')} className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} />
					<ImageSearchIcon onClick={() => handleInputs('img')} className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} />
					<img src={sticker} width='48px' onClick={() => handleInputs('stickers')} className={themeDark ? 'inputMenu__icon inputMenu__icon__dark' : 'inputMenu__icon inputMenu__icon__light'} alt="stickers" />
				</div>
				<div>
					{clickGif || clickImg || clickStickers ? <CloseIcon className="inputMenu__close" onClick={() => handleClose()} /> : null}
				</div>
			</div>

			<div>
				{clickGif ? <Gif library={"gifs"} setClickGif={setClickGif} /> :
					clickStickers ? <Gif library={"stickers"} setClickStickers={setClickStickers} /> :
						clickImg ? <ImageInput setClickImg={setClickImg} /> : null}
			</div>
		</div>
	)
}

export default InputMenu;
