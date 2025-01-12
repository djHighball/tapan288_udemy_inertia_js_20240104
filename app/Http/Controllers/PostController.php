<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->latest()->get();
        $now = now();
        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts),
            'now' => Carbon::now(),
        ]);
    }

    public function store(StorePostRequest $request)
    {
        auth()->user()->posts()->create($request->validated());
        return
            redirect()
            ->route('posts.index')
            ->with('success', 'Post created successfully!');
    }
}
