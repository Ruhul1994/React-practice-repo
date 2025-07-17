import { Routes, Route } from 'react-router-dom';
import { lazy , Suspense } from 'react';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
// import Blog from './Blog';
// import BlogPost from './BlogPost';
import NotFound from './NotFound';
import Header from './Header';
import User from './User';
import UserDetails from './UserDetails';
import AddUser from './AddUser';
import Edit from './Edit';

const About = lazy(() => import('./About'));
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/:id/:name?" element={<UserDetails />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
