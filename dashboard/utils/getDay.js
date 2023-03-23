import { dia } from "./constants";
import moment from 'moment';
export default function hola(date, time) {
    const d = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format();
    return dia[new Date(Date.parse(d)).getDay()]
}