import { createContext, ReactNode, useContext, useState } from 'react';

import { posts as initialPosts } from '@/data/posts';
import { Post } from '@/model/post';

interface PostsContextValue {
    posts: Post[];
    addPost: (post: Omit<Post, 'id'>) => void;
}

const PostsContext = createContext<PostsContextValue | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    function addPost(newPost: Omit<Post, 'id'>) {
        const post: Post = {
            ...newPost,
            id: `local-${Date.now()}`,
        };
        // Novas publicações aparecem primeiro, como em um feed real.
        setPosts((current) => [post, ...current]);
    }

    return (
        <PostsContext.Provider value={{ posts, addPost }}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePosts() {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePosts precisa ser usado dentro de um PostsProvider');
    }
    return context;
}
