<script setup>
import ArrowUpwardIcon from '@/components/icons/ArrowUpwardIcon.vue'
import AppTextArea from '@/components/TextArea.vue'
import Todo from '@/components/PannableTodo.vue'
import { onMounted, reactive, watch } from 'vue'

const data = reactive({
  todos: JSON.parse(localStorage.getItem('v1/todos')) ?? [],
  content: '',
  selected: null,
})

onMounted(() => {
  watch(
    data.todos,
    (value) =>  localStorage.setItem('v1/todos', JSON.stringify(value)),
    { immediate: true }
  )

  if (! localStorage.getItem('v1/setting/first-open')) {
    data.todos = [
      createTodo('سلام رفیق! من یک برنامه خیلی کوچولو برای مدیریت کار هام', 1),
      createTodo('هر وقت کاری خواستی اضافه کنی از پایین صفحه جایی که نوشته «کار من» می تونی اضافه کنی', 2),
      createTodo('وقتی کاری رو تموم کردی روی تیک سمت راستش ضربه بزن تا یک خط روش بکشم', 3),
      createTodo('اگر لازم شد کاری رو ویرایش کنی اونو به سمت راست هلش بده', 4),
      createTodo('برای حذف کار هم به سمت چپ حلش بده', 5),
    ]

    localStorage.setItem('v1/setting/first-open', 1)
  }
})

function save() {
  if (data.content.trim()) {

    if (data.selected) {
      data.selected.content = data.content
    } else {
      data.todos.push(
        createTodo(data.content.trim())
      )
    }

    data.content = ''
    data.selected = null
  }
}

function remove(todo) {
  const index = data.todos.indexOf(todo)
  if (index >= 0) {
    data.todos.splice(index, 1)
  }
}

function edit(todo) {
  data.selected = todo
  data.content = todo.content
}

function createTodo(content, id = null) {
  return {
    id: id ?? Date.now(),
    completed_at: null,
    content: content,
  }
}

function toggleComplete(todo)
{
  todo.completed_at = todo.completed_at ? null : Date.now()
}

</script>
<template>
  <div class="flex flex-col h-full">
    <TransitionGroup
      name="fade"
      tag="div"
      class="relative h-full overflow-x-hidden overflow-y-scroll"
    >
      <Todo
        v-for="todo in data.todos"
        v-show="!todo.deleted_at"
        :key="todo.id"
        :todo="todo"
        @edit="edit"
        @delete="remove"
        @click="toggleComplete(todo)"
      />
    </TransitionGroup>

    <div class="flex flex-row items-end bg-secondary">
      <AppTextArea
        v-model="data.content"
        class="w-full h-auto p-4 font-light min-h-16 max-h-32"
        placeholder="کار من"
        @keyup.enter="save"
      />
      <button
        class="flex items-center justify-center w-14 h-14"
        @click="save"
      >
        <ArrowUpwardIcon class="text-2xl font-thin text-mute" />
      </button>
    </div>
  </div>
</template>

<style>

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>