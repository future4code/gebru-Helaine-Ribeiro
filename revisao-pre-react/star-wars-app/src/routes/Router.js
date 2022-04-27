import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<CharacterListPage/>}></Route>
          <Route path="/" element={<CharacterDetailPage/>}></Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    );
  };

  