import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {
	// const stream$ = new Subject();
	// const stream$ = new BehaviorSubject('first');
	const stream$ = new ReplaySubject(2);

	stream$.next('Hello');
	stream$.next('Hello');
	stream$.next('RXJS');
	stream$.subscribe(val => console.log(val))
})