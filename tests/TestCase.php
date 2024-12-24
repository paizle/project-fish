<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Database\Seeders\ImportDatabaseSeeder;

abstract class TestCase extends BaseTestCase
{
    protected static $seeded = false;

    protected function setUp(): void
    {
        parent::setUp();

        if (!self::$seeded) {
            $this->artisan('db:seed', [
                '--class' => ImportDatabaseSeeder::class,
            ]);
            self::$seeded = true;
        }
    }
}
