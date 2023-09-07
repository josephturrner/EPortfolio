import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  Outlet
} from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import Header from './components/Header';
import Footer from './components/Footer';

// import reportWebVitals from './reportWebVitals';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="experience" element={<ExperiencePage/>}/>
      <Route path="projects" element={<ProjectPage/>}/>      
    </Route>
  )
)

function App() {
  return (
    <div className='page'>
        <title>{'<Joseph Turner/>'}</title>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
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
