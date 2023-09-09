import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Default from './layouts/Default';

import NotFound from './pages/NotFound';
import routes from './routes';

ReactDOM.createRoot(
	document.getElementById('root')!
).render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Default />}>
					{routes.map((route, index) => {
						return <Route
							key={index}
							path={route.path}
							index={route.index}
							element={
								<Suspense fallback="Loading...">
									<route.element />
								</Suspense>
							} />
					})}
					<Route path="*"
						element={
							<Suspense fallback="Loading...">
								<NotFound />
							</Suspense>
					} />
				</Route>
			</Routes>
		</BrowserRouter>
  </React.StrictMode>,
)
