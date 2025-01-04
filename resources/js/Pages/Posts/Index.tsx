import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

// コントローラから受け取るデータの型を定義
interface User {
    id: number;
    name: string;
    email: string;
}

interface Post {
    id: number;
    body: string;
    user_id: number;
    user: User;
}

interface PostsProps {
    posts: {
        data: Post[];
    }
}

export default function Dashboard({posts}: PostsProps) {
    console.log(posts);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts">
                <meta name="description" content="Posts Index" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {posts.data.map((post) => {
                        return (
                            <div key={post.id}>
                                    <div className="font-semibold">{post.user.name}</div>
                                    <div className="mt-1">{post.body}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
