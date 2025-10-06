// Import React Query provider and client to enable server state caching and requests
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import React Router components for client-side routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Ant Design ConfigProvider to supply theme tokens app-wide
import { ConfigProvider } from 'antd';
// Import the app layout and page components used by the router
import AppLayout from "./pages/AppLayout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Users from "./pages/Users.tsx";
import CreateUser from "./pages/CreateUser.tsx";
import NotFound from "./pages/NotFound.tsx";

// Create a React Query client instance used by QueryClientProvider
const queryClient = new QueryClient();

// App: root component that wires providers and the router
const App = () => (
  // Provide React Query client to the app so hooks like useQuery can function
  <QueryClientProvider client={queryClient}>
    {/* ConfigProvider: central place to define AntD theme tokens */}
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff', // primary brand color used by AntD components
          borderRadius: 6, // default border radius applied across components
        },
      }}
    >
      {/* BrowserRouter: enable HTML5 history based routing */}
      <BrowserRouter>
        {/* Routes: declare route hierarchy for the application */}
        <Routes>
          {/* Root route renders AppLayout which contains shared layout (sidebar/header/footer) */}
          <Route path="/" element={<AppLayout />}>
            {/* index route: renders Home at the root path "/" */}
            <Route index element={<Home />} />
            {/* Nested routes inside AppLayout for different pages */}
            <Route path="about" element={<About />} /> {/* /about */}
            <Route path="users" element={<Users />} /> {/* /users */}
            <Route path="create-user" element={<CreateUser />} /> {/* /create-user */}
          </Route>

          {/* Fallback route: render NotFound for any unmatched path ("404") */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>
);

// Default export so the app entry can render this root component
export default App;
