import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: IndexLayout })

function IndexLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}
