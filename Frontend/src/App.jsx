import { 
  EditKamar,
  ListKamar,
  ListOrder,
  ListUser,
  Dashboard,
  Rooms,
  LoginAdmin,
  LoginPage,
  RegistPage,
} from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
        <Route path="/admin/kamar" element={<ListKamar/>} />
        <Route path="/admin/order" element={<ListOrder/>} />
        <Route path="/admin/user" element={<ListUser/>} />
        <Route path="/admin/login" element={<LoginAdmin/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistPage/>} />
        <Route path="/edit" element={<EditKamar/>} />

        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/rooms" element={<Rooms/>} />
    </Routes>
);
}

export default App