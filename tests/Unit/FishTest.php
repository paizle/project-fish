<?php
namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Fish;

class FishTest extends TestCase
{
    /**
     * Test to verify the count of Fish records matches a predefined constant.
     */
    public function test_fish_count_matches_constant()
    {
        // Define the constant
        $expectedAtLeastCount = config('constants.fish_minimum_count', 1);

        // Retrieve all records from the Fish model
        $actualCount = Fish::count();

        // Assert that the count matches the expected value
        $this->assertTrue(
            $actualCount >= $expectedAtLeastCount,
            'The fish count does not contain at least ' .
                $expectedAtLeastCount .
                ' record.'
        );
    }
}
