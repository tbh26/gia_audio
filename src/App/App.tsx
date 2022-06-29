import React from 'react';
import './App.css';

function App() {
    return (
        <section className="App">
            <header className="App-header">
                <h2>graphql in action, audio</h2>
            </header>
            <section>
                <ul>
                    <li>
                        <h4>Part 1</h4>
                        <audio controls>
                            <source src="https://home.tbhes.net/data/buna-audio/01-Part 1.m4a" type="audio/mpeg"/>
                            <h5>Your browser does not support the audio tag.</h5>
                        </audio>
                    </li>
                    <li>
                        <h4>Chapter 1</h4>
                        <audio controls>
                            <source src="https://home.tbhes.net/data/buna-audio/02-Chapter 1.m4a" type="audio/mpeg"/>
                            <h5>Your browser does not support the audio tag.</h5>
                        </audio>
                    </li>
                    <li>
                        <h4>Chapter 2</h4>
                        <audio controls>
                            <source src="https://home.tbhes.net/data/buna-audio/03-Chapter 2.m4a" type="audio/mpeg"/>
                            <h5>Your browser does not support the audio tag.</h5>
                        </audio>
                    </li>
                    <li>
                        <h4>Chapter 3</h4>
                        <audio controls>
                            <source src="https://home.tbhes.net/data/buna-audio/04-Chapter 3.m4a" type="audio/mpeg"/>
                            <h5>Your browser does not support the audio tag.</h5>
                        </audio>
                    </li>

                </ul>
            </section>
        </section>
    );
}

export default App;
