import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  Outlet
} from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Footer from './components/Footer';
import infoData from './items.json';

// import reportWebVitals from './reportWebVitals';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path="experience" element={<ItemPage info={infoData.experience}/>}/>
      <Route path="projects" element={<ItemPage info={infoData.projects}/>}/>      
      <Route path="education" element={<ItemPage info={infoData.education}/>}/>      
    </Route>
  )
)

function App() {
  return (
    <div className='root-site'>
        {/* <HeaderTwo/> */}
        <RouterProvider router={router}/>
        {/* <Footer/> */}
    </div>
  )
}

// Create root and render the router inside of it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
