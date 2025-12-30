import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mod-dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mod-dashboard"!</div>
}
