<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ImportDatabaseSeeder extends Seeder
{
    public function run()
    {

        $mysqlDumpDatabase = 'fish2';
        $mysqlDumpUser = 'root';
        $mysqlDumpPassword = '';
        $dumpFile = base_path() .'/ignored/database_dump.sql';

        // Execute mysqldump to export the database
        $mysqldumpCommand = sprintf(
            'C:\wamp64\bin\mysql\mysql8.3.0\bin\mysqldump --user=%s --password=%s %s > %s',
            escapeshellarg($mysqlDumpUser),
            escapeshellarg($mysqlDumpPassword),
            escapeshellarg($mysqlDumpDatabase),
            escapeshellarg($dumpFile)
        );

        $this->runCommand($mysqldumpCommand);

        // Import the SQL file into the SQLite database
        $sql = file_get_contents($dumpFile);
        DB::unprepared($sql);

        $sql = file_get_contents($dumpFile);
        DB::unprepared($sql);

        if (file_exists($dumpFile)) {
            unlink($dumpFile);  // Use unlink() for deleting local files
        }
    }

    private function runCommand(string $command)
    {
        $output = [];
        $exitCode = 0;

        echo $command;

        // Run the command and wait for it to finish
        exec($command, $output, $exitCode);

        if ($exitCode !== 0) {
            throw new \RuntimeException('Command failed: ' . implode(PHP_EOL, $output));
        }
    }
}