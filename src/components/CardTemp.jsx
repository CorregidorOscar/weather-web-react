import style from './CardTemp/CardTemp.module.css'
export default function CardTemp({ label, value }) {
    return (
        <div className={style.cardTemp}>
            <label>{label}</label>
            <span>{value}</span>
        </div>
    );
}