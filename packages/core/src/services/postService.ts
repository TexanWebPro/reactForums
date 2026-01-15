import { Post } from "../domain/models";

const posts = [
  {
    id: 1,
    threadId: 1,
    forumId: 2,
    userId: 1,
    username: "Elegant Totality",
    createdAt: new Date(),
    content: "Lorem, y'know?",
    ipAddress: "IP address",
    longIpAddress: "Long IP address",
    includeSignature: true,
    editUId: 1,
    editedAt: new Date(),
    isVisible: true,
  },
];

export class PostService {
  constructor(baseUrl: string) {}

  getPostById(postId: number | null) {
    const post = posts.find((p) => p.id === postId);
    return post;
  }

  getNPostsInThread(postId: number, _n: number): Post[] {
    const allPosts = posts.filter((post) => post.threadId === postId);
    return allPosts;
  }

  getThreadById(postId: number): Post | undefined {
    const post = posts.find((p) => p.id === postId);
    return post;
  }
}
