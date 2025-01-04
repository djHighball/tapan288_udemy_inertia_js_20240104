import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

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

// ポストする際のフォームのデータの型を定義
interface PostFormData {
    body: string;
}

export default function Dashboard({posts}: PostsProps) {
    console.log(posts);
 
    // InertiaのFormヘルパを使用。下記の「Form Helper」を参照
    // https://inertiajs.com/forms
    const {data, setData, post, processing, errors} = useForm<PostFormData>({
        body: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('posts.store'));
    }

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
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 space-y-3">
                    <form onSubmit={submit} className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <label htmlFor="body" className="sr-only">Body</label>
                        <textarea
                            onChange={(e) => setData('body', e.target.value)}
                            name="body"
                            id="body"
                            cols="30"
                            rows="5"
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                        ></textarea>
                        {errors.body && <div className="text-red-500">{errors.body}</div>}
                        <button
                            type="submit"
                            className="mt-2 bg-gray-700 px-4 py-2 rounded-md font-medium text-white"
                        >
                            Post
                        </button>
                    </form>


                    {posts.data.map((post) => {
                        return (
                            <div key={post.id} className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <div className="font-semibold">{post.user.name}</div>
                                    <p className="mt-1">{post.body}</p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
