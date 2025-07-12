function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("fileInput").value = ""; // reset input
}

function addToCart() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.objectFit = "cover";
      img.style.border = "1px solid #ccc";
      img.style.borderRadius = "8px";
      img.alt = "Cart Item";

      document.getElementById("cartItems").appendChild(img);
      closePopup();
    };

    reader.readAsDataURL(file); // Read image as Base64
  } else {
    alert("Please select a valid image file.");
  }
}
