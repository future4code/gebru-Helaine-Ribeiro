import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import { ErrorPage}  from "../pages/ErrorPage/ErrorPage";
import React from "react";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CharacterListPage />}></Route>
        <Route path="/detalhe/:nome/" element={<CharacterDetailPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

  