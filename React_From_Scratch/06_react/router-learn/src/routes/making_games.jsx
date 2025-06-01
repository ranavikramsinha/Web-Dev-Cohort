import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/making_games')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/making_games"!</div>
}
