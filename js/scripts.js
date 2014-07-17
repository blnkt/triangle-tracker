var newTriangle = {
  triangleType: function() {
    if ((this.side1 + this.side2 <= this.side3) || (this.side1 + this.side3 <= this.side2) || (this.side2 + this.side3 <= this.side1)) {
      return "notATriangle";
    } else if ((this.side1 === this.side2) && (this.side2 === this.side3) && (this.side1 === this.side3)) {
      return "equilateral";
    } else if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)) /* &&
      ((this.side1 + this.side2 >= this.side3) || (this.side2 + this.side3 >= this.side1) || (this.side3 + this.side1 >= this.side2)))*/ {
      return "isosceles";
    } else /*if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3))*/ {
      return "scalene";
    }
  }
};


$(document).ready(function(){
  $("form#triangleSides").submit(function(event) {
    event.preventDefault();

    newTriangle.side1 = parseInt($("input.side1").val());
    newTriangle.side2 = parseInt($("input.side2").val());
    newTriangle.side3 = parseInt($("input.side3").val());
    console.log(newTriangle);


    if (newTriangle.triangleType() === "notATriangle") {
      alert("Please enter a REAL triangle");
    } else if (newTriangle.triangleType() === "equilateral") {
      $("#equilateral").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
    } else if (newTriangle.triangleType() === "isosceles") {
      $("#isosceles").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
    } else if (newTriangle.triangleType() === "scalene") {
      $("#scalene").append("<li>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
    }
  });
});
