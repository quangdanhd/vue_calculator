<template>
  <main class="calculator-wrapper">
    <div class="title-wrapper">
      <div class="title">Glass morphism</div>
      <div class="title">Glass morphism</div>
    </div>

    <section class="calculator" :class="{ dark: darkMode }">
      <button @click="toggleTheme" id="toggle" class="toggle-theme">
        <svg
          v-if="!darkMode"
          id="dark"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
          />
          <path
            d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
          />
        </svg>
        <svg
          v-else
          id="light"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
          />
        </svg>
      </button>
      <header class="calculator-header">
        <div
          class="calculator-operation"
          :class="{ active: operationActive }"
          v-html="operationText"
        ></div>
        <div
          class="calculator-operation-result"
          :class="{ active: operationActive }"
        >
          {{ result }}
        </div>
      </header>
      <main class="calculator-body"></main>
      <div class="calculator-button-wrapper">
        <button @click="clean" type="button" class="calculator-button">
          <span>C</span>
        </button>
        <button
          @click="addOperation('/')"
          type="button"
          class="calculator-button"
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10Z"
                fill="currentColor"
              />
              <circle cx="10" cy="7" r="1" fill="currentColor" />
              <circle cx="10" cy="13" r="1" fill="currentColor" />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation('*')"
          type="button"
          class="calculator-button"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        <button @click="eraser" type="button" class="calculator-button">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-eraser-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"
              />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation(7)"
          type="button"
          class="calculator-button highlight"
        >
          <span>7</span>
        </button>
        <button
          @click="addOperation(8)"
          type="button"
          class="calculator-button highlight"
        >
          <span>8</span>
        </button>
        <button
          @click="addOperation(9)"
          type="button"
          class="calculator-button highlight"
        >
          <span>9</span>
        </button>
        <button
          @click="addOperation('-')"
          type="button"
          class="calculator-button"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
              />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation(4)"
          type="button"
          class="calculator-button highlight"
        >
          <span>4</span>
        </button>
        <button
          @click="addOperation(5)"
          type="button"
          class="calculator-button highlight"
        >
          <span>5</span>
        </button>
        <button
          @click="addOperation(6)"
          type="button"
          class="calculator-button highlight"
        >
          <span>6</span>
        </button>
        <button
          @click="addOperation('+')"
          type="button"
          class="calculator-button"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation(1)"
          type="button"
          class="calculator-button highlight"
        >
          <span>1</span>
        </button>
        <button
          @click="addOperation(2)"
          type="button"
          class="calculator-button highlight"
        >
          <span>2</span>
        </button>
        <button
          @click="addOperation(3)"
          type="button"
          class="calculator-button highlight"
        >
          <span>3</span>
        </button>
        <button
          @click="getResult"
          type="button"
          class="calculator-button equal"
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00006 8.625C5.00006 8.45924 5.06591 8.30027 5.18312 8.18306C5.30033 8.06585 5.4593 8 5.62506 8H14.3751C14.5408 8 14.6998 8.06585 14.817 8.18306C14.9342 8.30027 15.0001 8.45924 15.0001 8.625C15.0001 8.79076 14.9342 8.94973 14.817 9.06694C14.6998 9.18415 14.5408 9.25 14.3751 9.25H5.62506C5.4593 9.25 5.30033 9.18415 5.18312 9.06694C5.06591 8.94973 5.00006 8.79076 5.00006 8.625Z"
                fill="currentColor"
              />
              <path
                d="M5.00006 12.25C5.00006 12.0842 5.06591 11.9253 5.18312 11.8081C5.30033 11.6908 5.4593 11.625 5.62506 11.625H14.3751C14.5408 11.625 14.6998 11.6908 14.817 11.8081C14.9342 11.9253 15.0001 12.0842 15.0001 12.25C15.0001 12.4158 14.9342 12.5747 14.817 12.6919C14.6998 12.8092 14.5408 12.875 14.3751 12.875H5.62506C5.4593 12.875 5.30033 12.8092 5.18312 12.6919C5.06591 12.5747 5.00006 12.4158 5.00006 12.25Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation('%')"
          type="button"
          class="calculator-button highlight"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-percent"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
              />
            </svg>
          </span>
        </button>
        <button
          @click="addOperation(0)"
          type="button"
          class="calculator-button highlight"
        >
          <span>0</span>
        </button>
        <button
          @click="addOperation('.')"
          type="button"
          class="calculator-button highlight"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
          </span>
        </button>
      </div>
    </section>

    <div class="calculator-back"></div>
  </main>
</template>

<script>
import CalculatorWrapper from "@/components/scripts/CalculatorWrapper";

export default CalculatorWrapper;
</script>
