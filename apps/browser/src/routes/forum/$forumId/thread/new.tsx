import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forum/$forumId/thread/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/forum/$forumId/thread/new"!</div>
}
