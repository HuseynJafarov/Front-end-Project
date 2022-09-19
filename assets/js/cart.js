$(function () {
  let scrollSection = document.getElementById("scroll-section");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 195 ||
      document.documentElement.scrollTop > 195
    ) {
      scrollSection.style.top = "0";
    } else {
      scrollSection.style.top = "-62px";
      $("div").removeClass("inActive");
    }
  }
});

products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

let totalBody = document.querySelector("#table .table-total .table-body")
let tableBody = document.querySelector("#basket .table .table-body");

addDatasToTable(products);
showIconBasketCount();
let deleteBtns = document.querySelectorAll(".delete-btn");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    deleteProducts(this);
  });
});

function deleteProducts(btn) {
  let id = parseInt(
    btn.parentNode.parentNode.firstElementChild.getAttribute("data-id")
  );
  products = products.filter((m) => m.id != id);
  localStorage.setItem("products", JSON.stringify(products));
  // document.location.reload();
  btn.parentNode.parentNode.remove();
  showIconBasketCount();
}

function addDatasToTable(products) {
  for (const product of products) {
    
    tableBody.innerHTML += `
          <tr>
          <td data-id ="${product.id}"><img src="${product.image}" class="card-img-top" alt="..."></td>
          <td>${product.name}</td>
          <td>${product.price} ${"$"}</td>
          <td>${product.count}</td> 
          <td>${product.price * product.count} ${"$"}</td>
          <td><i class="fa-solid fa-trash delete-btn" style="color: red; cursor: pointer;"></i></td>
        </tr>`;
  }

}


function getProductsCount(items) {
  let resultCount = 0;
  for (const item of items) {
    resultCount += item.count;
  }
  return resultCount;
}
function showIconBasketCount() {
  document.querySelector(".sup sup").innerText = getProductsCount(products);
}
