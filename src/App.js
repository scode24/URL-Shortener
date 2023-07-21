import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import Redirect from './pages/redirect/Redirect';
import Dialog from './components/Dialog';

function App() {

  const [dialogOpenStatus, setDialogOpenStatus] = useState(false);
  const [dialogStatus, setDialogStatus] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  const openCloseDialog = (status, statusInfo, message) => {
    if (status === 'open') {
      setDialogOpenStatus(true);
      setDialogStatus(statusInfo);
      setDialogMessage(message);
    } else if (status === 'close') {
      setDialogOpenStatus(false)
    }
  }

  return (
    <BrowserRouter>
      <Header openCloseDialog={openCloseDialog}></Header>
      <div className='flex h-screen max-md:px-0 max-md:flex-col'>
        <Routes>
          <Route exact path='/' element={<Home openCloseDialog={openCloseDialog} />} />
          <Route exact path='/o/:surl' element={<Redirect />} />
        </Routes>
      </div>

      {dialogOpenStatus ?
        <Dialog info={{
          'status': dialogStatus,
          'message': dialogMessage
        }} openCloseDialog={openCloseDialog}></Dialog>
        : <></>}

    </BrowserRouter>
  );
}

export default App;
