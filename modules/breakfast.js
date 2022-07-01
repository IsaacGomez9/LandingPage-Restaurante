const BreakFast = async (Platos) => {

    let inyectar = document.querySelector('#platosJunt')
    inyectar.innerHTML = ""
    const Ramen = Platos.filter(category => category.categories == 'BreakFast')
    Ramen.map(plato => {
        const { categories, description, img } = plato


        inyectar.innerHTML += `
        <div class="tarjetasPlatos" id="tarjetasPlatos">
        <div class="d-flex justify-content-evenly mt-5 platosJunt">
        <div class="card text-center" style="width: 15rem">
        <div>${categories}</div>
          <div>
            <img src="${img}" class="" style="width: 180px" />
          </div>
          <div class="d-flex justify-content-center align-items-center m-auto">
            <img src="./users.png" style="width: 100px" />
            <img src="./Star 7.svg" />
            <p class="mt-3 ms-2">(4.5)</p>
          </div>
          <div class="card-body">
            <p class="card-text">
              ${description}
            </p>
            <button type="button" class="btn btn-danger" style="height: 40px">
              Order Now
            </button>
          </div>
        </div>
        </div>
      </div>
        </div>
        `
    })
}

export default BreakFast