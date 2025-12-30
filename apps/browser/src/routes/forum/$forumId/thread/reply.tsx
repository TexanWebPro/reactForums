import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forum/$forumId/thread/reply')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/forum/$forumId/thread/reply"!</div>
}
