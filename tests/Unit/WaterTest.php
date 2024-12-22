<?php
namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Water;

class WaterTest extends TestCase
{
    /**
     * Test to verify the count of water records matches a predefined constant.
     */
    public function test_water_count_matches_constant()
    {
        // Define the constant
        $expectedAtLeastCount = config('constants.water_minimum_count', 1);

        // Retrieve all records from the Water model
        $actualCount = Water::count();

        // Assert that the count matches the expected value
        $this->assertTrue($actualCount >= $expectedAtLeastCount, 'The water count does not contain at least ' . $expectedAtLeastCount . ' record.');
    }

}
