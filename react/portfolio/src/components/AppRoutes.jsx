import React from 'react'
import { Routes, Route } from "react-router-dom";

import Head from './Head'
import Progects from './Progects';
import Contacts from './Contacts';
import Page from './pages/Page';
import Validate from './Validate';
import Admin_panel from './Admin_panel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Head />} />
      <Route path="/progects" element={<Progects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/page" element={<Page />} />
      <Route path="/validate" element={<Validate />} />
      <Route path="/admin" element={<Admin_panel />} />
    </Routes>
  )
}

export default AppRoutes