<?php
namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Location;

class LocationTest extends TestCase
{
    /**
     * Test to verify the count of Location records matches a predefined constant.
     */
    public function test_location_count_matches_constant()
    {
        // Define the constant
        $expectedAtLeastCount = config('constants.location_minimum_count', 1);

        // Retrieve all records from the Location model
        $actualCount = Location::count();

        // Assert that the count matches the expected value
        $this->assertTrue($actualCount >= $expectedAtLeastCount, 'The Location count does not contain at least ' . $expectedAtLeastCount . ' record.');
    }

}
