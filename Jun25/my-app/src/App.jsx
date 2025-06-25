import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
// import Blog from './Blog';
// import BlogPost from './BlogPost';
import NotFound from './NotFound';
import Header from './Header';
import User from './User';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/:id/:name?" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
