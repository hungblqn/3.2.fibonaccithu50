# 3.2.fibonaccithu50
sử dụng dynamic programming để tính fibonacci.
trong file chạy thử với các giá trị n=10, 20, 50 ra kết quả lần lượt 55, 6765, 12586269025
với thời gian thực thi trung bình 10 lần chạy lần lượt là 0.0068ms, 0.0019ms và 0.0048ms với máy tính đang sử dụng là CPU 2.3 GHz
-> đáp ứng yêu cầu về thời gian

time complexity: O(n) (chạy từ 2->n)
space complexity: O(1) (chỉ dùng 3 biến để lưu 3 số fibonacci gần nhất)

Kết quả chạy:
node fibonacci.js

F(10) = 55
Thời gian trung bình qua 10 lần: 0.0068 ms

F(20) = 6765
Thời gian trung bình qua 10 lần: 0.0019 ms

F(50) = 12586269025
Thời gian trung bình qua 10 lần: 0.0048 ms
