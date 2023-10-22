import { lazy, Suspense } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './Layout/Layout';
import { LazyLoader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="tweets" element={<TweetsPage />} />
    </Route>
  ),
  { basename: '/tweet-app' }
);

export default function App() {
  return (
    <Suspense fallback={<LazyLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
