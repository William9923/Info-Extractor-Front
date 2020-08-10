import Header from './components/Header';
import Footer from './components/Footer';
import Picker from './components/Picker';
import Textbox from './components/Textbox';
import Button from './components/Button';
import Tab from './components/Tab';

async function App() {

  const algorithm = new Map();
  // setting algorithm process
  algorithm.set('Knuth–Morris–Pratt','kmp');
  algorithm.set('Boyer–Moore','bm');
  algorithm.set('Regular Expression','regex');

  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
        ${Header()}
        ${Tab()}
        ${Picker(algorithm)}
        ${Textbox("Enter a Keyword")}
        ${Button("🔎")}
        ${Footer()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;