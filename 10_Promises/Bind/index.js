class React {
    constructor() {
        this.library = 'React';
        this.server = 'https://localhost:3000';
        document
            .querySelector('button')
            .addEventListener('click',this.HandleClick.bind(this));
    }

    HandleClick() {
        console.log('Button clicked!', this);
        console.log(this.server);
    }
}


const reactInstance = new React();
console.log(reactInstance);


// Add Event Listener
// document.querySelector('.class1').addEventListener('click',() => {
//
// });