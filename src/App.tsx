import {Routes, Route} from "react-router-dom"
import { Navbar } from "./Routes/Navbar/navbar.routes"
import LandingPage from "./Routes/Homepage/homepage"
import { Blog } from "./Routes/blog/blog.routes"
import { Authentication } from "./Routes/authentication/authentication.route"



const App = () => {
  return (
    <>
    <Routes>
      <Route path="" element = {<Navbar />}>
    <Route index  element ={<LandingPage />}/>
    <Route path="/blog" element = {<Blog />} />
    <Route path="/auth" element = {<Authentication />} />
    </Route>
    </Routes>
    </>
  )
}

export default App