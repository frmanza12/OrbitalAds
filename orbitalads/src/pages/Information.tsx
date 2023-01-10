import { useTranslation } from "react-i18next";

import style from './Information.module.css'
import LeftIcon from '../assets/svg/left-arrow.svg'
import Schema from '../assets/images/Schema.jpg'

function Information() {
    const { t } = useTranslation();
    const goBack = () => {

        window.history.back();
    }
    return (
        <div className={style.container}>
            <div className={style.header} onClick={() => goBack()}>
                <img src={LeftIcon} alt="left" width={15} height={15} />
                <span>{t('GENERAL.BACK')}</span>
            </div>
            <h1>{t('INFORMATION.TITTLE.INSTRUCTIONS')}</h1>
            <p>{t('INFORMATION.TEXTS.INSTRUCTIONS.1')}</p>
            <ul>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.2')}</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.3')}</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.4')}s</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.5')}</li>
            </ul>
            <p>{t('INFORMATION.TEXTS.INSTRUCTIONS.6')}</p>
            <ul>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.7')}s</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.8')}</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.9')}</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.10')}</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.11')}</li>
            </ul>
            <p>{t('INFORMATION.TEXTS.INSTRUCTIONS.12')}</p>
            <p>{t('INFORMATION.TEXTS.INSTRUCTIONS.13')}</p>
            <ul>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.14')}t</li>
                <li>{t('INFORMATION.TEXTS.INSTRUCTIONS.15')}</li>
            </ul>
            <p>{t('INFORMATION.TEXTS.INSTRUCTIONS.16')}</p>
            <h1>{t('INFORMATION.TITTLE.COMPONENTS')}</h1>
            <h3>{t('INFORMATION.TEXTS.COMPONENTS.SEARCHITEMS')}</h3>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.SEARCHITEMS_TEXT1')}</p>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.SEARCHITEMS_TEXT2')}</p>
            <h3>{t('INFORMATION.TEXTS.COMPONENTS.SELECTEDITEMS')}</h3>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.SELECTEDITEMS_TEXT1')}</p>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.SELECTEDITEMS_TEXT2')}</p>
            <ul>
                <li>{t('INFORMATION.TEXTS.COMPONENTS.SELECTEDITEMS_TEXT3')}</li>
                <li>{t('INFORMATION.TEXTS.COMPONENTS.SELECTEDITEMS_TEXT4')}</li>
            </ul>
            <h3>{t('INFORMATION.TEXTS.COMPONENTS.ITEM')}</h3>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.ITEM_TEXT1')}</p>
            <p>{t('INFORMATION.TEXTS.COMPONENTS.ITEM_TEXT2')}</p>
            <ul>
                <li>{t('INFORMATION.TEXTS.COMPONENTS.ITEM_TEXT3')}</li>
                <li>{t('INFORMATION.TEXTS.COMPONENTS.ITEM_TEXT4')} </li>
                <li>{t('INFORMATION.TEXTS.COMPONENTS.ITEM_TEXT5')}</li>
            </ul>
            <div className={style.imageInfo}>
                <h3>{t('INFORMATION.TEXTS.COMPONENTS.SCHEMA')}</h3>
                <img src={Schema} alt="Schema" width={350} height={700} />
            </div>

        </div>
    )
}

export default Information