tasks = []


def add_task(task):
    tasks.append(task)


def delete_task(tasks):
    tasks.remove(input=(int("Millise taski tahad kustudada:")))
    print(tasks)
    pass


def show_task(tasks):
    for elem in tasks:
        print(elem)


def is_done():
    pass

# pip install streamlit


def main():
    while True:
        print("Mida sa tahad teha?")
        print("1 - Lisa ülesanne, 2 - Kustuta ülesanne, 3 - Ülevaada kõikidest ülesannetest, 4 - Muuda seisundit(Tehtud või mitte)")
        userInput = input("Mida sa tahad?")
        if userInput == "1":
            task = input("Sisesta ülesanne:")
            add_task(task)
        elif userInput == "2":
            delete_task()
        elif userInput == "3":
            show_task()
        elif userInput == "4":
            is_done()
        else:
            break


main()

