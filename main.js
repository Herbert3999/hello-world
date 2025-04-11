public class NumberSorter {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 8, 1, 2};
        sortAscending(numbers);
        
        System.out.println("Sorted array:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
    }

    /**
     * Sorts an integer array in ascending order using bubble sort
     * @param arr The array to be sorted
     */
    public static void sortAscending(int[] arr) {
        boolean swapped;
        for (int i = 0; i < arr.length - 1; i++) {
            swapped = false;
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap adjacent elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no swaps occurred, array is already sorted
            if (!swapped) break;
        }
    }
}
