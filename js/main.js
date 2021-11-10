$(".loader").fadeOut("slow");
function openModel(type) {
  document.getElementById("modal-wrapper").innerHTML += getModal(type);
}

function closeModal() {
  document.getElementById("modal-wrapper").innerHTML = "";
}

function addItem(type, event) {
  event.preventDefault();

  const clothName = document.getElementById("clothName");
  const clothColor = document.getElementById("clothColor");
  const clothType = document.getElementById("clothType");

  const targetCategory = document.getElementById(clothType.value);
  const table = targetCategory.getElementsByClassName(type)[0];

  table.innerHTML += `<span class="task-box">${clothName.value} _ ${clothColor.value}</span><br />`;

  document.getElementById("modal-wrapper").innerHTML = "";
}

function downloadPdf() {
  $("#organizer").tableHTMLExport({ type: "pdf", filename: "organizer.pdf" });
}

function getModal(type) {
  return `<div class="custom-model-main model-open">
<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">
      <div class="custom-model-inner">
        <div class="custom-model-wrap">
          <div class="pop-up-content-wrap">
            <div class="items">
              <div class="adding row">
                <div class="add col-6">Add Item</div>
                <div class="close-btn col-6" onclick="closeModal()">×</div>
              </div>
              <form onsubmit="addItem( '  ${type}  ', event)">
                <div class="input-ele">
                  <div class="mb-3 row">
                    <label
                      for="staticEmail"
                      class="col-3 col-form-label"
                      >Clothe Name:</label
                    >
                    <div class="col-8">
                      <input
                        id="clothName"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      for="inputPassword"
                      class="col-3 col-form-label"
                      >Clothe Color:</label
                    >
                    <div class="col-8">
                      <input
                        id="clothColor"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label
                      class="col-3 col-form-label"
                      >Cloth type:</label
                    >
                    <div class="col-8">
                      <select
                        id="clothType"
                        class="form-control"
                      >
                      <option value="workware">Workware</option>
                      <option value="home">Home</option>
                      <option value="sport">Sport</option>
                      <option value="partyware">Partyware</option>
                      </select>

                    </div>
                  </div>
                </div>
                <button
                  id="saveData"
                  class="btn btn-primary text-center submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bg-overlay"></div>
</div>`;
}
