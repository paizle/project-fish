<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\FishLimit;

class FishLimitTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test to verify the count of FishLimit records matches a predefined constant.
     */
    public function test_fish_limit_count_matches_constant()
    {
        // Define the constant (replace with your actual constant or config value)
        $expectedCount = config('constants.fish_limit_count', 10);

        // Seed the database with the expected number of records
        FishLimit::factory()->count($expectedCount)->create();

        // Retrieve all records from the FishLimit model
        $actualCount = FishLimit::count();

        // Assert that the count matches the expected value
        $this->assertEquals($expectedCount, $actualCount, 'The FishLimit count does not match the expected constant.');
    }

    /**
     * Test to ensure all FishLimit records have valid data.
     */
    public function test_fish_limit_records_have_valid_data()
    {
        // Seed the database with some records
        FishLimit::factory()->count(5)->create();

        // Retrieve all FishLimit records
        $fishLimits = FishLimit::all();

        // Assert that each record has non-null required fields
        $fishLimits->each(function ($fishLimit) {
            $this->assertNotNull($fishLimit->species, 'Species should not be null.');
            $this->assertNotNull($fishLimit->limit, 'Limit should not be null.');
            $this->assertGreaterThanOrEqual(0, $fishLimit->limit, 'Limit should be non-negative.');
        });
    }

    /**
     * Test to verify that a FishLimit record can be successfully created.
     */
    public function test_fish_limit_can_be_created()
    {
        // Create a new FishLimit record
        $fishLimit = FishLimit::factory()->create([
            'species' => 'Salmon',
            'limit' => 5,
        ]);

        // Assert that the record exists in the database
        $this->assertDatabaseHas('fish_limits', [
            'species' => 'Salmon',
            'limit' => 5,
        ]);
    }

    /**
     * Test to verify that a FishLimit record can be updated.
     */
    public function test_fish_limit_can_be_updated()
    {
        // Create a new record
        $fishLimit = FishLimit::factory()->create();

        // Update the record
        $fishLimit->update([
            'limit' => 20,
        ]);

        // Assert that the record has been updated in the database
        $this->assertDatabaseHas('fish_limits', [
            'id' => $fishLimit->id,
            'limit' => 20,
        ]);
    }

    /**
     * Test to verify that a FishLimit record can be deleted.
     */
    public function test_fish_limit_can_be_deleted()
    {
        // Create a new record
        $fishLimit = FishLimit::factory()->create();

        // Delete the record
        $fishLimit->delete();

        // Assert that the record no longer exists in the database
        $this->assertDatabaseMissing('fish_limits', [
            'id' => $fishLimit->id,
        ]);
    }
}
