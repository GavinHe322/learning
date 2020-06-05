class Command {
  public static void main(String[] args) {
    // java Command 1 2 3
    for (String arg : args) {
      System.out.println(arg);
    }
  }
}