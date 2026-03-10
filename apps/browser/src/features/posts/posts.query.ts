import { queryOptions } from "@tanstack/react-query";
import { fetchPostById, fetchPostsByThreadId } from "./posts.api";

export const postKeys = {
  all: ["posts"] as const,
  byId: (id: number) => ["posts", "byId", id] as const,
  byThreadId: (threadId: number, limit: number) =>
    ["posts", "byThreadId", threadId, limit] as const,
};

export const postQueries = {
  byId: (id: number) =>
    queryOptions({
      queryKey: postKeys.byId(id),
      queryFn: () => fetchPostById(id),
    }),

  byThreadId: (threadId: number, limit: number) =>
    queryOptions({
      queryKey: postKeys.byThreadId(threadId, limit),
      queryFn: () => fetchPostsByThreadId(threadId, limit),
    }),
};

// export const postMutations = {
//   create: (queryClient: QueryClient) =>
//     mutationOptions({
//       mutationFn: (input: CreatePostInput) => createPost(input),
//       onSuccess: async (createdPost) => {
//         queryClient.setQueryData(postKeys.byId(createdPost.id), createdPost);

//         await queryClient.invalidateQueries({
//           queryKey: postKeys.byThreadId(createdPost.threadId),
//         });
//       },
//     }),
// };
