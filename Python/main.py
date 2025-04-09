import streamlit as st

if 'tasks' not in st.session_state:
    st.session_state.tasks = []

st.title("See on TodoList:")

def add_task():
    task = st.text_input("Sisesta uus ülesanne", key="new_task_input")
    if st.button("Lisa"):
        if task.strip():
            st.session_state.tasks.append({"text": task, "done": False})
            st.rerun()
        else:
            st.warning("Lahter ei tohi jääda tühjaks")

add_task()

def show_task():
    if not st.session_state.tasks:
        st.info("Nimekiri on tühi")
        return
    
    for i, task in enumerate(st.session_state.tasks):
        cols = st.columns([0.08, 0.80, 0.11]) 
        with cols[0]:
            task["done"] = st.checkbox("", value=task["done"], key=f"done_{i}")
        with cols[1]:
            text = task["text"]
            st.markdown(text)
        with cols[2]:
            if st.button("Kustuta", key=f"delete_{i}"):
                st.session_state.tasks.pop(i)
                st.rerun()

show_task()
