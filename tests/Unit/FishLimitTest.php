<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\FishLimit;

class FishLimitTest extends TestCase
{
    /**
     * Test to verify the count of FishLimit records matches a predefined constant.
     */
    public function test_fish_limit_count_matches_constant()
    {
        // Define the constant (replace with your actual constant or config value)
        $expectedAtLeastCount = config('constants.fish_limit_minimum_count', 1);

        // Retrieve all records from the FishLimit model
        $actualCount = FishLimit::count();

        // Assert that the count matches the expected value
        $this->assertTrue(
            $actualCount >= $expectedAtLeastCount,
            'The FishLimit count does not contain at least ' .
                $expectedAtLeastCount .
                ' record.'
        );
    }
}
