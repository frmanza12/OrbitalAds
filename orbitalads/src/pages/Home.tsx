import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

import SearchItems from '../components/searchItems/SearchItems';
import InfoIcon from '../assets/svg/info-icon.svg';
import style from './Home.module.css';
import { ROUTES_PATH } from '../routes';

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <div className={style.header}>
                <h1>{t('GENERAL.TITTLE')}</h1>
                <Link to={ROUTES_PATH.INFORMATION}>
                    <img  className={style.infoIcon} src={InfoIcon} alt="info" width={20} height={20} />
                </Link>

            </div>
            <SearchItems />
        </div>
    );
}

export default Home;
