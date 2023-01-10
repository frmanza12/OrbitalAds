import { useTranslation } from "react-i18next";

import styles from './selectedItems.module.css'
import { ItemTypes } from "../../models/items";

interface Props {
    selectedItems: ItemTypes[];
    deleteItem: (name: string) => void;
}

const SelectedItems = ({ selectedItems , deleteItem}: Props) => {
    const { t } = useTranslation();

    return (
        <div className={styles.container} >
            <h1 className={styles.tittle}>{t('SELECTED_ITEMS.TITTLE')}</h1>
            <div className={styles.itemContainer}>
                {selectedItems.map((item: ItemTypes, index:number) => (
                    <span onClick={()=>deleteItem(item.name)} className={styles.item} key={`${item.name}-${index}`}>{item.name}</span>
                ))}
            </div>
        </div>
    );
};

export default SelectedItems;

