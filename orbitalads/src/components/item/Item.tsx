import styles from "./item.module.css";
interface Props {
    name: string;
    selected:boolean;
    onCklick: (name: string) => void;
}

const Item = ({ name, selected, onCklick }: Props) => {
    return (
        <div onClick={()=>onCklick(name)} className={styles.item} style={{background: selected ? '#1097cf' : 'white', color:selected ? '#ffffff' : '#000000' }}>
            <p>{name}</p>
        </div>
    );
};

export default Item;