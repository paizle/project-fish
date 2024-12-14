<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{

    protected static $seeded = false;

    //
    protected function setUp(): void
    {
        parent::setUp();

        if (!self::$seeded) {
            //$this->artisan('migrate');
            //$this->artisan('db:seed');

            $this->artisan('db:seed', ['--class' => 'ImportDatabaseSeeder']);
            self::$seeded = true;
        }

        
        //$this->artisan('db:seed', ['--class' => 'ImportDatabaseSeeder']);
    }
}
