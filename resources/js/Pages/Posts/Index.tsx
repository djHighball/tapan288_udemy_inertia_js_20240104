import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

interface Post {
    id: number;
    body: string;
    user_id: number;
}

interface PostsProps {
    posts: Post[];
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
                    {posts.map((post) => {
                        return (
                            <div className="p-6 text-gray-900" key={post.id}>{post.body}</div>
                        )
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
