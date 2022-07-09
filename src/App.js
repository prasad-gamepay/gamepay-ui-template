import React from "react";

import "./styles/index.scss";

const App = () => {
  return (
    <main>
      <section>
        <div class="container flex justify-center py-20">
          <div class="p-3 bg-white rounded-xl max-w-xl hover:shadow">
            <div class="flex justify-between w-full">
              <img
                src="https://avatars.githubusercontent.com/u/7972572?v=4"
                width="250"
                class="rounded-lg"
              />
              <div class="ml-2">
                <div class="p-3">
                  <h3 class="text-2xl">Durga Prasad Narikalapa</h3>
                  <span>Fullstack Developer</span>
                </div>

                <div class="flex justify-between items-center mt-2 gap-2">
                  <button class="w-full h-12 rounded-md border-2 text-md hover:shadow hover:bg-red-700 hover:border-red-700 hover:text-white ">
                    Linked In
                  </button>
                  <button class="w-full h-12 rounded-md bg-blue-700 text-white text-md hover:shadow hover:bg-blue-800">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
