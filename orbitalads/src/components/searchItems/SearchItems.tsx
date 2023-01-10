import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import SelectedItems from "../selectedItems/SelectedItems";
import Item from "../item/Item";
import styles from "./searchItems.module.css";
import { ItemTypes } from "../../models/items";
import { useTranslation } from "react-i18next";

const SearchItems = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { t } = useTranslation();
    const url = process.env.REACT_APP_SERVER_URL + `?search=${debouncedSearchTerm}`
    const { data, isLoading, error } = useFetch(url);
    const [selectedItems, setSelectedItems] = useState<ItemTypes[]>([]);
    const handleSelect = (name: string) => {
        const item: ItemTypes | any  = data.find((item: ItemTypes) => item.name === name);
        
        if (item) {
            if (selectedItems.find((item: ItemTypes) => item.name === name)) {
                setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.name !== item.name));
             

            } else {
                setSelectedItems([...selectedItems, item]);
            }
        }
    };

    const deleteItem = (name: string) => {
        const item = selectedItems.find((item: ItemTypes) => item.name === name);
        if (item) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
        }
    };

    const clearAll = () => {
        setSelectedItems([]);
    }

    const getSelecetedItem = (name: string) => {
        const item = selectedItems.find((item: ItemTypes) => item.name === name);
        if (item) {
            return true;
        }
        return false;

    }

    if (isLoading) return <p>{t('GENERAL.LOADING')}</p>
    if (error) return <p>{t('GENERAL.ERROR')}</p>

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button disabled={selectedItems.length <= 0} className={styles.clearButton} onClick={() => clearAll()}>{t('GENERAL.CLEAR')}</button>

            </div>

            {data.length > 0 && (
                <div className={styles.selectedItemsContainer}>
                    {data.map((item: ItemTypes) => (
                        <Item
                            key={item.name}
                            name={item.name}
                            selected={getSelecetedItem(item.name)}
                            onCklick={handleSelect}
                        />
                    ))}
                </div>
            )}

            {selectedItems.length > 0 && (
                <SelectedItems
                    deleteItem={deleteItem}
                    selectedItems={selectedItems} />
            )}

        </div>
    );
};

export default SearchItems;