<?php
namespace App\Util;

class Indexer
{
    public static function indexBy($array, $index_column = 'id')
    {
        $assoc_array = [];
        foreach ($array as $element) {
            $assoc_array[$element[$index_column]] = $element;
        }
        return $assoc_array;
    }

		public static function indexEnum(string $enumClass): array
		{
			if (!enum_exists($enumClass)) {
					throw new \InvalidArgumentException("The provided class is not a valid enum.");
			}

			return array_reduce(
					$enumClass::cases(),
					function ($carry, $case) {
							$carry[$case->name] = $case->value;
							return $carry;
					},
					[]
			);
		}

		public static function getValueFromEnum(string $enumClass, string $key)
		{
				if (!enum_exists($enumClass)) {
						throw new \InvalidArgumentException("The provided class is not a valid enum.");
				}

				foreach ($enumClass::cases() as $case) {
						if ($case->name === $key) {
								return $case->value;
						}
				}

				throw new \InvalidArgumentException("No enum case found for key: $key");
		}

    public static function deIndex($array)
    {
        $newArray = [];
        foreach ($array as $element) {
            $newArray[] = $element;
        }

        return $newArray;
    }
}
