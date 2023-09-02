var age = 18;
switch (true) {
    case (age >= 15 && age <= 20):
        document.write("You are Eligible");
        break;
    case (age >= 21 && age <= 30):
        document.write("You are  Not Eligible");
        break;
    default:
        document.write("Enter the valid age");
}