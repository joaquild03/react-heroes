import { Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage} from "../../heroes";
import { NotFoundPage } from "../../auth/pages/404Page";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelPage/>}/>
              <Route path="dc" element={<DcPage/>}/>
              
              <Route path="hero/:id" element={<HeroPage/>}/>
              <Route path="search" element={<SearchPage/>}/>

              <Route path="/" element={<NotFoundPage/>}/>
          </Routes>
        </div>
    </>
  )
}
