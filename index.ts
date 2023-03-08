import './style.css';

import { fromEvent, scan } from 'rxjs';

let btn = document.getElementById('button');
let countImpura = 0;

btn.addEventListener('click', () => {
  countImpura++;
  //console.log(countImpura);
});

fromEvent(btn, 'click')
  .pipe(scan((cont) => cont + 1, 0))
  .subscribe((cont) => {
    console.log('puro', cont);
  });
