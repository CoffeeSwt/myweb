<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted } from "vue";
onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <div class="w-full">
    <header class="border-b flex py-1">
      <div class="dropdown dropdown-hover dropdown-bottom">
        <label tabindex="0" class="btn btn-sm"
          ><svg
            width="21"
            height="21"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z"
              fill="none"
              stroke="#333"
              stroke-width="3"
              stroke-linejoin="round"
            />
          </svg>
          <span>主题</span></label
        >
        <ul tabindex="0" class="dropdown-content menu shadow rounded-box w-15">
          <li class="flex justify-center items-center">
            <button data-set-theme="cupcake" class="p-2 text-lg">
              <svg
                width="21"
                height="21"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"
                  fill="none"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="11"
                  y1="8"
                  x2="11"
                  y2="11"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="35"
                  y1="8"
                  x2="35"
                  y2="11"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="23"
                  y1="5"
                  x2="23"
                  y2="11"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>

          <li class="flex justify-center items-center">
            <button data-set-theme="dark" class="p-2 text-lg">
              <svg
                width="21"
                height="21"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
                  fill="none"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li class="flex justify-center items-center">
            <button data-set-theme="wireframe" class="p-2 text-lg">
              <svg
                width="21"
                height="21"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z"
                  fill="none"
                  stroke="#333"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z"
                  fill="#333"
                />
                <path
                  d="M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z"
                  fill="#333"
                />
                <path
                  d="M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z"
                  fill="#333"
                />
                <path
                  d="M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z"
                  fill="#333"
                />
                <path
                  d="M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z"
                  fill="#333"
                />
                <path
                  d="M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z"
                  fill="#333"
                />
                <path
                  d="M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z"
                  fill="#333"
                />
                <path
                  d="M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z"
                  fill="#333"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <div>
      <aside></aside>
      <main></main>
    </div>
    <footer></footer>
  </div>
  <div></div>
</template>

<style scoped></style>
