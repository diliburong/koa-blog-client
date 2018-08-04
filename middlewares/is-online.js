// middlewares/is-online.js

export default function (context) {

    if(navigator.onLine == true) {
        console.log('online')
    } else {
        console.log('offline')
    }
}