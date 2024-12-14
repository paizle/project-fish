<?php

namespace Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImportDatabaseSeeder extends Seeder
{
    public function run()
    {

        $mysqlHost = env('DB_HOST', '127.0.0.1');
        $mysqlPort = env('DB_PORT', '3306');
        $mysqlDatabase = env('DB_DATABASE');
        $mysqlUser = env('DB_USERNAME');
        $mysqlPassword = env('DB_PASSWORD');
        $dumpFile = database_path('seeders/test_database_dump.sql');

        // Execute mysqldump to export the database
        $mysqldumpCommand = sprintf(
            'C:\wamp64\bin\mysql\mysql8.3.0\bin\mysql --host=%s --port=%s --user=%s --password=%s %s > %s',
            escapeshellarg($mysqlHost),
            escapeshellarg($mysqlPort),
            escapeshellarg($mysqlUser),
            escapeshellarg($mysqlPassword),
            escapeshellarg($mysqlDatabase),
            escapeshellarg($dumpFile)
        );

        $this->runCommand($mysqldumpCommand);

        // Import the SQL file into the SQLite database
        $sql = file_get_contents($dumpFile);
        DB::unprepared($sql);


        $sql = file_get_contents(database_path('seeders/test_database_dump.sql'));
        DB::unprepared($sql);
    }

    private function runCommand(string $command)
    {
        $output = [];
        $exitCode = 0;

        // Run the command and wait for it to finish
        exec($command, $output, $exitCode);

        if ($exitCode !== 0) {
            throw new \RuntimeException('Command failed: ' . implode(PHP_EOL, $output));
        }
    }
}