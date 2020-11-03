import { range, timer, interval } from 'rxjs';
import { of, from, Observable, fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';

// const stream$ = of (1, 2, 3, 4, 456);
//
// stream$.subscribe( val => console.log(val));
//
// const arr$ = from([
// 	'123', 'Vlad', 'min'
// ]).pipe(
// 	scan((acc, v) => acc.concat(v), [])
// );
//
// arr$.subscribe(val => console.log(val));
//
// const stream$ = new Observable(observer => {
// 	observer.next('First value');
// 	setTimeout(() => observer.next('after 1000 ms'), 1000);
// 	setTimeout(() => observer.complete(), 1500);
// 	setTimeout(() => observer.error('Smth went wrong'), 2000);
// 	setTimeout(() => observer.next('after 3000 ms'), 3000);
// });
//
// stream$.subscribe(
// 	{
// 		next(val) {
// 			console.log(val);
// 		},
// 		error(err) {
// 			console.log(err);
// 		},
// 		complete() {
// 			console.log('completed');
// 		}
// 	}
// 	// (value) => {
// 	// 	console.log('val:', value);
// 	// },
// 	// (err) => console.log(err),
// 	// () => console.log('complete')
// );

// fromEvent(document.querySelector('canvas'), 'mousemove')
// 	.pipe(
// 		map(e => ({
// 			x: e.offsetX,
// 			y: e.offsetY,
// 			ctx: e.target.getContext('2d')
// 		}))
// 	)
// 	.subscribe(pos => {
// 		console.log(pos);
// 		pos.ctx.fillRect(pos.x, pos.y, 2, 2);
// 	});
//
// clear$ = fromEvent(document.getElementById('clear'), 'click')
// 	.subscribe(() => {
// 		const canvas = document.querySelector('canvas');
// 		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// 	});
// const sub = interval(500).subscribe(value => console.log(value));
//
// setTimeout(() => sub.unsubscribe(), 4000);

// timer(2500).subscribe(v => console.log(v));
range(42, 10).subscribe(v => console.log(v));