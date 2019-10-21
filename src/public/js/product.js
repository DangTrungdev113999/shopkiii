function createProduct() {
  $("#createProduct").on("click", function() {
    let name = $("#productName").val();
    let category = $("#category").val();
    let price = +$("#productPrice").val();
    let salePrice = +$("#productSalePrice").val();
    let description = $("#desciptionProduct").val();
    let createdAt = $("#createdProduct").val() ?  $("#createdProduct").val() : Date.now();

    let regxPrice = new RegExp(/^\d+(,\d{1,2})?$/);
    let regxname = new RegExp(/^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/);
    let regxDescription = new RegExp(/^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/gim);

    if (!name.length) {
      alertify.notify("You have to enter product name", "error", 6);
      return;
    }

    if (!regxname.test(name)) {
      alertify.notify("Product names are from 1 -> 30 characters long, not special characters", "error", 6);
      return;
    }

    if (category === "Choose...") {
      alertify.notify("You have to enter category", "error", 6);
      return;
    }

    if (!price) {
      alertify.notify("You have to enter product price", "error", 6);
      return;
    } 

    if (!regxPrice.test(price)) {
      alertify.notify("product price have to be positive numbers", "error", 6);
      return;
    } 


    if (!salePrice) {
      alertify.notify("You have to enter product sale price", "error", 6);
      return;
    }
  
    if (!regxPrice.test(salePrice)) {
      alertify.notify("product sale price have to be positive numbers", "error", 6);
      return;
    } 

    if (salePrice > price) {
      alertify.notify("product sale price have to less than root price", "error", 6);
      return;
    } 

    if (!description.length) {
      alertify.notify("You have to enter desciption", "error", 6);
      return;
    }

    if (!regxDescription.test(description)) {
      alertify.notify("desciption not special characters", "error", 6);
      return;
    }

    $.post({
      url: "/api/admin/product",
      data: {
        name, category, price, salePrice, description  
      },
      // headers: localStorage.getItem(token)
    })
    .then(res => {
      window.location.href = "http://localhost:3000/admin/products";
    })
    .catch(err => console.log(err))

  })
}


function deleteProduct() {
  $(".delete-product").on("click", function() {
    let id = $(this).data("pid");
    $.ajax({
      method: "delete",
      url: `/api/admin/product/${id}`
    })
    .then(res => {
      if (res === true) {
        $(`tr[data-pid=${id}]`).remove();
      }
    })
    .catch(err => {
      alertify.notify(`${err.statusText}`, "error", 6)
    })
  })
}

$(document).ready(function() {
  createProduct();

  deleteProduct();
})