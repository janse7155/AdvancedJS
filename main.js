console.groupCollapsed("Exercise 1");
class Subject1 {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if(index > -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers() {
		for(let observer of this.observers) {
			observer.update();
		}
	}
}

class Observer1 {
	update() {
		console.log('Observer updated!');
	}
}


let subject1 = new Subject1();

let observer1 = new Observer1();
let observer2 = new Observer1();
subject1.addObserver(observer1);
subject1.addObserver(observer2);

subject1.notifyObservers();

console.groupEnd();

console.groupCollapsed("Exercise 2");


let person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

let fruits = ['apple', 'banana', 'cherry', 'date'];

let { name, age } = person;
console.log(name);
console.log(age);

let [ , x, , z] = fruits;
console.log(x);
console.log(z);

let { address: { city, country} } = person;
console.log(city);
console.log(country);


console.groupEnd();

console.groupCollapsed("Exercise 3");

async function fetchPosts() {
    try{
	const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
   
    } catch(err){
        console.log("Something went wrong...")
        console.log(err);
    }
}

// Call the function to fetch posts
fetchPosts();
console.log("Fetch Complete");


console.groupEnd();

console.groupCollapsed("Exercise 4");


class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
		try {
			const response = await fetch(url);
			const data = await response.json();
			this.notifyObservers(data);
		} catch (error) {
			this.notifyObservers(`Error: ${error.message}`);
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			console.log(data);
		} else {
			const [{ title }] = data;
			console.log(title);
		}
	}
}

// Instantiate the Subject
const subject = new Subject();

// Add observers
subject.addObserver(new Observer());
subject.addObserver(new Observer());

// Call the fetchAndNotify method
subject.fetchAndNotify();


console.groupEnd();