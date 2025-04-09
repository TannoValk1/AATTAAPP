import streamlit as st

st.session_state.tasks = []

st.title("See on TodoList:")

def add_task():
    task = st.text_input("Sisesta uus ülesanne", key="new_task_input")

add_task()