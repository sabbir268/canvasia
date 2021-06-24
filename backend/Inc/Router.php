<?php

class Router
{
    public $routes;
    
    public static function get($action, Closure $callback)
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            echo "Wrong method";
        // return ;
        } else {
            self::route($action, $callback);
        }
    }

    public static function post($action, Closure $callback)
    {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            echo "Wrong method";
        // return ;
        } else {
            self::route($action, $callback);
        }
    }

    private static function route($action, Closure $callback)
    {
        global $routes;
        $action = trim($action, '/');
        $routes[$action] = $callback;
    }

    /**
     * Dispatch the router
     *
     * @param $action string
     */
    public static function dispatch($action)
    {
        global $routes;
        $action = trim($action, '/');
        $callback = $routes[$action];

        echo call_user_func($callback);
    }
}
