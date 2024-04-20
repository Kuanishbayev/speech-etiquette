import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Post from "./pages/Post"
import Editor from "./pages/admin/Editor"
import Login from "./pages/Login"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import PageNotFound from "./pages/PageNotFound"
import AdminLayout from "./layout/AdminLayout"
import RootLayout from "./layout/RootLayout"
import BlogsManager from "./pages/admin/BlogsManager"
import Admins from "./pages/admin/Admins"
import Trash from "./pages/admin/Trash"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<BlogsManager />} />
            <Route path="create-post" element={<Editor />} />
            <Route path="admins" element={<Admins />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App