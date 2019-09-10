		Element.prototype.documentOffsetTop = function () {
			return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
		};
		
		function myFunction() {
			    var top = document.getElementById("me").documentOffsetTop() - (window.innerHeight * 0.15 );
				window.scrollTo( 0, top );
		}
		
		function myFunction2() {
								var elmnt = document.getElementById("content");
								elmnt.scrollIntoView();
							  }