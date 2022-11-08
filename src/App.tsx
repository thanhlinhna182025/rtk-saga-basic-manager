import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import Dashboard from 'features/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import config from './config';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={config.routes.notfound} element={<NotFound />} />
          <Route path={config.routes.login} element={<LoginPage />} />
          <Route
            path={config.routes.dashboard}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path={config.routes.admin}
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
