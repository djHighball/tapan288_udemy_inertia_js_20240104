<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->get();
        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts),
        ]);
    }
}
