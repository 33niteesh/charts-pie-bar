import one from './one.png'
import './App.css';
import right from './right.png'
import search from './search.png'
import Healthfun from './components/healthsummary';
import Web2 from './components/web2';
import Web3 from './components/web3';
function App() {
  return (
    <div className="App">
      <header className="head-1"><img src={one} className="logo" /><div className="head-input"><input className="type" placeholder="search for domain" /><img src={search} className="search" /></div><img src={right} className="right-head" /></header>
      <header className="head-2"><div className="options first">Dashboard</div><div className="options">Manage Domain</div><div className="options">Report</div><div className="options">Social Media Accounts</div><div className="options">Templetes</div><div className="options">Coupons</div></header>
      <Healthfun />
      <Web2 />
      <Web3 />
      <footer style={{ height: 30 }} className="footer">
        <div style={{ fontSize: 'small', color: 'white' }}>Copyrigth 2023 web23 LTD</div>
        <div style={{ fontSize: 'small', color: 'white', justifyContent: 'space-between', flexDirection: 'row' ,display: 'flex' }}>
          <div style={{ fontSize: 'medium', color: 'white' ,margin:'1rem'}}>Content</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>About</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>Privacy polocy</div>

          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>FAQ'S</div>

        </div>
        <div style={{ fontSize: 'small', color: 'white' }}>powered by Evoquins</div>

      </footer>
    </div>
  );
}

export default App;
