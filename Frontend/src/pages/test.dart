import 'dart:io';

void printPattern(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      stdout.write(' ');
    }
    for (int k = 0; k < i + 1; k++) {
      stdout.write('*');
    }
    print('');
  }
}

void main() {
  print("hello world");
  // *
  // **
  // ***
  // ****
  // *****
  printPattern(115);
}
