<?php
namespace App\Util;

class Indexer 
{
    public static function indexBy($array, $index_column = 'id') 
    {
        $assoc_array = [];
        foreach($array as $element) {
            $assoc_array[$element[$index_column]] = $element;
        }
        return $assoc_array;
    }

    public static function deIndex($array)
    {
        $newArray = [];
        foreach($array as $element) {
            $newArray[] = $element;
        }

        return $newArray;
    }
}