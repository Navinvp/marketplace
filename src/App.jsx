import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { GlobalProvider } from './GlobalContext.jsx';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary.jsx';
import Layout from './components/layout/Layout';
import MainSection from './components/mainSection/MainSection';

import bannerData from './banner-data.json';
import ConnectToWallet from './components/connectToWallet/ConnectToWallet';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {path: '/', element: <MainSection />, loader: async() => {
        return {
          id: 0,
          bannerData: { ...bannerData['collection-home'][0] }
        };
    }},
    {path: '/Collection/:collectionId', element: <MainSection />, loader: async({params}) => {
        return {
          id: params?.collectionId,
          bannerData: {...bannerData[`collection${+params.collectionId+1}`]}
        };
    }},
    { path: '/connectToWallet', element: <ConnectToWallet/> }
  ]}
])

function App() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </ErrorBoundary>
  );
}

export default App
