<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted } from "vue";
onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <div class="w-full">
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <header class="border-b navbar">
          <div class="navbar-start">
            <label for="my-drawer" class="btn btn-sm drawer-button btn-ghost"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>

          <div class="hidden md:block navbar-center">
            <a class="btn btn-ghost normal-case text-xl">CoffeeSwt</a>
          </div>
          <div class="navbar-end">
            <div class="dropdown dropdown-hover dropdown-bottom mx-2">
              <label tabindex="0" class="btn btn-sm"
                ><svg
                  width="21"
                  height="21"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <path
                    d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z"
                    stroke-linecap="round"
                    stroke-width="3"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="hidden md:inline">主题</span></label
              >
              <ul
                tabindex="0"
                class="dropdown-content menu shadow rounded-box w-24 bg-base-100"
              >
                <li class="flex justify-center items-center">
                  <button
                    data-set-theme="cupcake"
                    class="p-2 text-lg flex items-center"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                    >
                      <path
                        d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"
                        fill="none"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <line
                        x1="11"
                        y1="8"
                        x2="11"
                        y2="11"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="35"
                        y1="8"
                        x2="35"
                        y2="11"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="23"
                        y1="5"
                        x2="23"
                        y2="11"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-sm">咖啡</span>
                  </button>
                </li>

                <li class="flex justify-center items-center">
                  <button
                    data-set-theme="dark"
                    class="p-2 text-lg flex items-center"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                    >
                      <path
                        d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
                        fill="none"
                        stroke-width="3"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-sm">夜间</span>
                  </button>
                </li>
                <li class="flex justify-center items-center">
                  <button
                    data-set-theme="wireframe"
                    class="p-2 text-lg flex items-center"
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                    >
                      <path
                        d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z"
                        fill="none"
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
                    <span class="text-sm">日间</span>
                  </button>
                </li>
              </ul>
            </div>
            <button tabindex="0" class="btn btn-sm mx-2">
              <svg
                width="21"
                height="21"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z"
                  fill="none"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 37H34"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="hidden md:inline">博客</span>
            </button>
            <button tabindex="0" class="btn btn-sm mx-2">
              <svg
                width="21"
                height="21"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        <div>
          <aside></aside>
          <main></main>
        </div>
        <footer></footer>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul
          class="menu p-4 w-56 sm:w-80 h-full bg-base-200 text-base-content pt-2"
        >
          <!-- Sidebar content here -->
          <li class="menu-title text-base sm:text-lg">Coffee的网站</li>
          <div class="divider my-0"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
