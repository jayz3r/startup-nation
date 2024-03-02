import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import UserInfo from "./pages/UserInfo";
import VacancyInfo from "./pages/VacancyInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path='/Vacancy' element={<VacancyInfo/>}/>
          <Route path='/profile' element={<UserInfo/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

