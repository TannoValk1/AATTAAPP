def mySum(a, b):
    if isinstance(a, int) and isinstance(b, int):
        return a + b
    else:
        print("Wrong numbers")

### iteratsioon 2 - Rohkem tehteid
# - Lisa lahutamine, korrutamine ja jagamine
# - loo valikumenüü (1-liida, 2-lahuta, 3-korruta, 4-jaga)

def mySub(a, b):
    if isinstance(a, int) and isinstance(b, int):
        return a - b
    else:
        print("Wrong numbers")

def myMult(a, b):
    if isinstance(a, int) and isinstance(b, int):
        return a * b
    else:
        print("Wrong numbers")

def myDiv(a, b):
    try:
        if isinstance(a, int) and isinstance(b, int):
            return a / b
        else:
            print("Valed numbrid")
    except ZeroDivisionError:
        print("Can't divide with a 0")
        
### **Iteratsioon 3- Sisendi Valideerimine
# kontroll et kasutaja sisestab numbrid

def mySum(a, b):
    return a + b

def mySub(a, b):
    return a - b

def myMult(a, b):
    return a * b  # This function was missing

def myDiv(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: Division by zero"

def main():
    myArr = [0, 0, 0, 0, 0]
    
    while True:
        valik = input("What do you want! 1,2,3,4 or 5:")
        
        if valik == "1":
            a = int(input("Sisesta arv a:"))
            b = int(input("Sisesta arv b:"))
            result = mySum(a, b)
            myArr[0] += 1
            print("Tulemus on", result)
        
        elif valik == "2":
            a = int(input("Sisesta arv a:"))
            b = int(input("Sisesta arv b:"))
            result = mySub(a, b)
            myArr[1] += 2
            print("Tulemus on", result)
        
        elif valik == "3":
            a = int(input("Sisesta arv a:"))
            b = int(input("Sisesta arv b:"))
            result = myMult(a, b)
            myArr[2] += 3 
            print("Tulemus on", result)
        
        elif valik == "4":
            a = int(input("Sisesta arv a:"))
            b = int(input("Sisesta arv b:"))
            result = myDiv(a, b)
            myArr[3] += 4
            print("Tulemus on", result)
        
        elif valik == "5":
            break
        else:
            print("Thats not an option")

    displayInfo()

def displayInfo():
    print("kokku oli", sum(myArr))
    print("summerimine töötas:", myArr[0], "korda")
    print("lahutamine oli", myArr[1], "korda")
    print("korrutamine oli", myArr[2], "korda")
    print("jagamine oli", myArr[3], "korda")

main()


### 
                





    
        
