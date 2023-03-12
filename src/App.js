// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/nav';
import Faq from './components/faq';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from './components/review';
import Demo from './components/demo';
import Courses from './components/courses';
function App() {
  return (
    // <div className="App">
    //   <Nav/>
    //   <Faq/>
    //   {/* <Home/> */}
    //   <Route exact path='/nav' component={Nav} />

    // </div>
  <>
  <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/nav" element={<Nav />} /> */}
          <Route path="/faq" element={< Faq/>} />
          <Route path="/reviews" element={< Review/>} />
          <Route path="/demo" element={< Demo/>} />
          <Route path="/courses" element={< Courses/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
