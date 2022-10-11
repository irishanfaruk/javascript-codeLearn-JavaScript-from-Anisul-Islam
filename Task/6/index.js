// A program that will find sum of all numbers from 1 to 100 that are divisible by 3 and 5(একটি প্রোগ্রাম যা 1 থেকে 100 পর্যন্ত সমস্ত সংখ্যার যোগফল খুঁজে পাবে যা 3 এবং 5 দ্বারা বিভাজ্য)
var sum = 0
var i = 1
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + 1
    }
    i++
}
console.log(sum);