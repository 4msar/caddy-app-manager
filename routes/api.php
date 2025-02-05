<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/config', function () {
    $response = Http::get('http://localhost:2019/config');

    return response()->json($response->json());
});
