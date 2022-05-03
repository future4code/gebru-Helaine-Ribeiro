import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CharacterListPage/>}></Route>
          <Route path="/detalhe" element={<CharacterDetailPage/>}></Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    );
  };

  