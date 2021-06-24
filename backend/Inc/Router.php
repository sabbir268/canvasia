<?php

class Router
{
    public $routes;
    
    public static function create($action, Closure $callback)
    {
            self::route($action, $callback);
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
