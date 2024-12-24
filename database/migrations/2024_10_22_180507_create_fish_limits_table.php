<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fish_limits', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('season_start');
            $table->date('season_end');
            $table->integer('bag_limit')->nullable();
            $table->string('minimum_size')->nullable();
            $table->string('maximum_size')->nullable();
            $table->string('note')->nullable();
            $table
                ->foreignId('location_id')
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('fish_category_id')
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('fish_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('boundary_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('waters_category_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('water_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
            $table->string('water_description')->nullable();
            $table
                ->foreignId('tidal_category_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
            $table
                ->foreignId('fishing_method_id')
                ->nullable()
                ->constrained()
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fish_limits');
    }
};
