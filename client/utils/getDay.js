import { dia } from "./constants";
import moment from 'moment';
export default function formateo(date, time) {
    // console.log('format', `${date} ${time}`);
    let a = date.split('-')
    // console.log(new Date(`${date} ${time}`).getTime());
    let timestamp = new Date(`${a[1]}-${a[0]}-${a[2]} ${time}`)

    // console.log(timestamp);
    var dayOfWeek = dia[timestamp.getDay()]
    // console.log(dayOfWeek, date);
    // let myDate = date.split("-");
    // var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
    // console.log(newDate);
    // console.log('formateado', newDate.getTime());
    const d = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format();
    // console.log(d);
    return dayOfWeek
    // return dia[new Date(Date.parse(d)).getDay()]
}