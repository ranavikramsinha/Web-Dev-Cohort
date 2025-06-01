import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:fond-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:fond-bold">
          About
        </Link>{" "}
        <Link to="/products" className="[&.active]:fond-bold">
          Products
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}
