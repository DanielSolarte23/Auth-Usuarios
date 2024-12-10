import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegistesPage from "./pages/RegistesPage";
import LoginPage from "./pages/LoginPage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage from "./pages/TaskPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/taskContext";
import NavBar from "./components/NavBar";
import UsersPage from "./pages/UsersPage";
import { UserProvider } from "./context/UserContext";
import UserDetail from "./components/UserDetail";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <UserProvider>
          <BrowserRouter>
            <main className="h-screen">
              <NavBar />
              <div className="h-[88%]">
                <div className="h-[12%]"></div>
                <div className="h-full">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistesPage />} /> {/* Usamos el mismo componente */}
                    <Route element={<ProtectedRoute />}>
                      <Route path="/usuarios" element={<UsersPage />} />
                      <Route path="/usuarios/:id" element={<UserDetail />} />
                      <Route path="/add-task" element={<TaskFormPage />} />
                      <Route path="/tasks/:id" element={<TaskFormPage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                    </Route>
                  </Routes>
                </div>
              </div>
            </main>
          </BrowserRouter>
        </UserProvider>
      </TaskProvider>
    </AuthProvider>
  );
};

//Quedamos en el minuto 02:05mts
export default App;
